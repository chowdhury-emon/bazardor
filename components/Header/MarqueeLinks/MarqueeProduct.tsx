import { Product } from "@/types/Product.type";
import Link from "next/link";
import { RiTriangleFill } from "react-icons/ri";

export default function MarqueeProduct({ product }: { product: Product }) {
    return (
        <Link href={`/product/${product.id}`}>

            <div className="text-sm flex gap-2 p-2 px-4 border-l border-border">
                <span>{product.categoryIcon}</span>
                <span>{product.nameBn}</span>
                <span className="text-muted capitalize">
                    {product.today.toLocaleString('bn-BD')} টাকা/
                    {product.unit}
                </span>

                <span className={`flex items-center gap-1 
                    ${product.change.dir === 'down' ? 'text-green-700'
                        : product.change.dir === "up" ? 'text-red-700'
                        : ""}`}>

                    {product.change.dir === 'flat'
                        ? "—"
                        : <RiTriangleFill className={`text-xs mb-1 ${product.change.dir === 'down' ? 'rotate-180' : ''}`} />
                    }
                    <span>{Math.abs(product.change.pct).toLocaleString('bn-BD')}%</span>
                </span>

            </div>
        </Link>
    )
}