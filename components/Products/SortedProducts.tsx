'use client'
import ProductCard from "@/components/Products/ProductCard";
import { Product } from "@/types/Product.type";
import { useState } from "react";

type ProductSort = 'default' | 'lowToHigh' | 'highToLow';

export default function SortedProducts({ products }: { products: Product[] }) {
    const [sortBy, setSortBy] = useState<ProductSort>('default');

    const handleSortProduct = () => {
        const productsCopy = [...products]; 
        if(sortBy === 'lowToHigh'){
            productsCopy.sort((a, b) => a.today - b.today);
        }
        else if(sortBy === 'highToLow'){
            productsCopy.sort((a, b) => b.today - a.today);
        } 
        return productsCopy;
    }

    const sortedProducts = handleSortProduct();

    return (
        <>
            <div className="flex justify-end items-center gap-4 bg-surface border border-border rounded-4xl mb-8 p-4 font-medium text-sm text-muted">
                <p>সাজান</p>
                <span className="border border-border p-2 rounded-xl outline-0 *:outline-0 *:px-2">
                    <select className="" value={sortBy} onChange={(e) => setSortBy(e.target.value as ProductSort)}>
                        <option value={"default"}>ডিফল্ট</option>
                        <option value={"lowToHigh"}>দাম: কম থেকে বেশি</option>
                        <option value="highToLow">দাম: বেশি থেকে কম</option>
                    </select>
                </span>
            </div>

            <p>মোট {sortedProducts.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে</p>
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {
                    sortedProducts.map((product, i) => (
                        <ProductCard key={i} product={product} ></ProductCard>
                    ))
                }
            </div >
        </>
    )
}