import ProductCard from "@/components/Products/ProductCard";
import { getProducts } from "@/lib/api"

export default async function PriceUpProducts() {
    const allProducts = await getProducts();
    const upPriceProducts = allProducts.filter(product => product.change.dir === 'up');
    const products = upPriceProducts.sort((a ,b) => b.change.pct - a.change.pct).splice(0, 6);

    return (
        <section className="my-12">
            <h3><span className="text-red-700"> ▲ </span> আজ দাম বেড়েছে</h3>
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