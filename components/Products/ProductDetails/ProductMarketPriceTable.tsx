import { Product } from "@/types/Product.type";
import { bengaliNum } from "@/utils/bengaliNum";

export default function ProductMarketPriceTable({ product }: { product: Product }) {
    return (
        <div>
            <h3 className="mt-8 mb-4">বাজারভিত্তিক আজকের দাম</h3>

            <div className="w-full overflow-auto grid border rounded-3xl text-nowrap">
                <div className="min-w-max">
                    {/* TABLE HEADER */}
                    <div className="grid grid-cols-5 font-semibold text-muted *:p-2 *:px-4">
                        <p>বাজার</p>
                        <p>বিভাগ</p>
                        <p>সর্বনিম্ন</p>
                        <p>সর্বাধিক</p>
                        <p className="text-end">গড়</p>
                    </div>

                    {/* TABLE BODY */}

                    {
                        product.markets.map((market, i) => (
                            <div key={i} className="grid grid-cols-5 text-sm *:p-2 *:px-4 border-t border-border even:bg-background">
                                <p>{market.market}</p>
                                <p>{market.division}</p>
                                <p>{bengaliNum(market.min)} টাকা</p>
                                <p>{bengaliNum(market.max)} টাকা</p>
                                <p className="text-end">
                                    {
                                        bengaliNum(((market.max + market.min) / 2))
                                    } টাকা
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}