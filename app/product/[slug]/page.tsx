import ProductMarketPriceTable from "@/components/Products/ProductDetails/ProductMarketPriceTable";
import ProductPriceSummary from "@/components/Products/ProductDetails/ProductPriceSummary";
import ProductSummary from "@/components/Products/ProductDetails/ProductSummary";
import { getProductById } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = await getProductById(slug);
    if (!product) { notFound() };

    return (
        <section className="overflow-auto">
            <ProductSummary product={product}></ProductSummary>
            <div className="bg-surface border border-border rounded-4xl p-4 my-4">
                <ProductPriceSummary product={product}></ProductPriceSummary>
                <ProductMarketPriceTable product={product}></ProductMarketPriceTable>
            </div>
        </section>
    )
}