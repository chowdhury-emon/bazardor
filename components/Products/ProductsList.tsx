import ProductCard from "@/components/Products/ProductCard";
import { getProducts } from "@/lib/api";

export default async function ProductsList() {
    const products = await getProducts();
    return (
        <section className=" my-12">
            <h3>সব পণ্য</h3>
            <p>মোট {products.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে</p>
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {
                    products.map((product, i) => (
                        <ProductCard key={i} product={product} ></ProductCard>
                    ))
                }
            </div >
        </section>
    )
}