import { getCategories } from "@/lib/api"
import { ProductCategory } from "@/types/Product.type";
import Link from "next/link";


export default async function Navbar() {
    const categories: ProductCategory[] = await getCategories();
    console.log(categories)
    return (
        <div className="border">

            <nav className="container mx-auto flex my-2">
                {categories.map((category, i) => (
                    <Link key={i} href={`category/${category.slug}`} className="flex gap-2 p-2 px-4 rounded-full text-sm font-medium">
                        <span>{category.icon}</span>
                        <span>{category.nameBn}</span>
                    </Link>
                ))}
            </nav>
        </div>
    )
}