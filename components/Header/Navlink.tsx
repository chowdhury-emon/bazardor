'use client'
import { ProductCategory } from "@/types/Product.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({ category }: { category: ProductCategory }) {
    const activeRoute = usePathname();
    console.log(activeRoute);
    return (
        <>
            <Link href={`/category/${category.slug}`}
                className={`flex gap-2 p-2 px-4 rounded-full text-sm font-medium ${activeRoute === `/category/${category.slug}` ? "bg-accent text-white": ""}
            `}
            >
                <span>{category.icon}</span>
                <span>{category.nameBn}</span>
            </Link>
        </>
    )
}