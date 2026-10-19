import SortedProducts from "@/components/Products/SortedProducts";
import { getCategoryById, getProductsByCatagory } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const category = await getCategoryById(slug);
    if (!category) { notFound() };
    const products = await getProductsByCatagory(slug);

    return (
        <div>
            <div className="flex bg-surface border border-border rounded-4xl mb-8 p-4">
                <figure className="text-5xl w-12 grid place-content-center rounded-2xl mr-4">
                    {category.icon}
                </figure>

                <div>
                    <h2>{category.nameBn}</h2>
                    <p className="text-muted">{products.length.toLocaleString('bn-BD')}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>
            <SortedProducts products={products}></SortedProducts>
        </div>
    )
}