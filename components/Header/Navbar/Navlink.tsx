'use client'
import { Category } from "@/types/Category.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({ category }: { category: Category }) {
    const activeRoute = usePathname();
    // console.log(activeRoute);
    return (
        <>
            <Link href={`/category/${category.slug}`}
                className={`flex text-nowrap gap-2 p-2 px-4 rounded-full text-sm font-medium hover:bg-background
                    ${activeRoute === `/category/${category.slug}` ? "bg-accent text-white": ""}`}
            >
                <span>{category.icon}</span>
                <span>{category.nameBn}</span>
            </Link>
        </>
    )
}