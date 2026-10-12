import ProductCard from "@/components/Products/ProductCard";
import { getProducts } from "@/lib/api"

export default async function PriceDownProducts() {
    const allProducts = await getProducts();
    const downPriceProducts = allProducts.filter(product => product.change.dir === 'down');
    const products = downPriceProducts.sort((a ,b) => a.change.pct - b.change.pct).splice(0, 6);

    return (
        <section className="my-12">
            <h3><span className="text-green-700"> ▼ </span>আজ দাম কমেছে </h3>
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {
                    products.map((product, i) => (
                        <div key={i}>
                            <ProductCard product={product} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}