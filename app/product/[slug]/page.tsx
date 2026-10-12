import { getProductById } from "@/lib/api";
import { RiTriangleFill } from "react-icons/ri";

export default async function ProductDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = await getProductById(slug);
    return (
        <div>
            <article className="bg-surface border border-border rounded-4xl p-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="grid md:flex gap-4 items-center w-full md:w-auto text-center">
                    <figure className="text-7xl/tight bg-background rounded-2xl p-4">
                        {product.image}
                    </figure>

                    <div>
                        <h1 className="text-4xl/normal font-bold">
                            {product.nameBn}
                        </h1>
                        <p className="capitalize text-muted mb-2">প্রতি {product.unit} . {product.nameBn} </p>
                        <p>গতকালের তুলনায় আজ দাম
                            {
                                product.change.dir === 'up' ? ` বেড়েছে ${product.today - product.yesterday} টাকা`
                                    : product.change.dir === 'down' ? ` কমেছে ${product.yesterday - product.today} টাকা`
                                        : "অপরিবর্তিত."
                            }
                        </p>
                    </div>
                </div>

                <div className="bg-background rounded-2xl p-4 text-muted text-center w-full md:w-auto">
                    <p>আজকের দাম</p>
                    <p className="text-4xl font-bold text-foreground">{product.today.toLocaleString('bn-BD')}</p>
                    <p className="capitalize">টাকা / {product.unit}</p>
                    <p className={`flex items-center justify-center gap-1 
                                                ${product.change.dir === 'down' ? 'text-green-700'
                            : product.change.dir === "up" ? 'text-red-700'
                                : ""}`}>

                        {product.change.dir === 'flat'
                            ? "—"
                            : <RiTriangleFill className={`text-xs mb-1 ${product.change.dir === 'down' ? 'rotate-180' : ''}`} />
                        }
                        <span>{Math.abs(product.change.pct).toLocaleString('bn-BD')}%</span>
                    </p>
                </div>
            </article>
        </div>
    )
}