import { Product } from "@/types/Product.type";
import Link from "next/link";
import { RiTriangleFill } from "react-icons/ri";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link href={'/'}>

            <article className=" bg-surface border border-border p-4 rounded-4xl hover:border-accent">
                <div className="flex">
                    <figure className="text-2xl w-12 grid place-content-center rounded-2xl bg-background mr-4">
                        {product.image}
                    </figure>
                    <div>
                        <p className="text-md font-bold">{product.nameBn}</p>
                        <p className="text-sm text-muted">প্রতি {product.unit}</p>
                    </div>
                </div>
                <div className="flex justify-between items-end mt-4 text-sm">
                    <div>
                        <p>আজকের দাম</p>
                        <p className="font-semibold">
                            <span className="text-xl font-bold mr-1">
                                {product.today.toLocaleString('bn-BD')}
                            </span>
                            টাকা</p>
                    </div>
                    <span className={`flex items-center gap-1 bg-background rounded-full p-1 px-2 
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
            </article>
        </Link>
    )
}