import { Product } from "@/types/Product.type";
import { bengaliNum } from "@/utils/bengaliNum";

export default function ProductPriceSummary({ product }: { product: Product }) {
  // const minPrice = product.markets.reduce((minValue, market) => minValue = Math.min(minValue, market.min) , Infinity);

  const minPrice = Math.min(...product.markets.map(market => market.min));
  const maxPrice = Math.max(...product.markets.map(market => market.max));
  const totalMinMaxSum = product.markets.reduce((sum, market) => sum + ((market.max + market.min) / 2), 0);
  const avgPrice = Math.trunc(totalMinMaxSum / product.markets.length);

  // console.log(typeof minPrice, maxPrice.toLocaleString('bn-BD'), avgPrice)

  return (
    <div>
      <h3 className=" mb-4">দামের সারসংক্ষেপ</h3>

      <article className="grid gap-4 md:grid-cols-3 text-muted">
        <div className="rounded-3xl p-4 border border-border">
          <p>সর্বনিম্ন দাম</p>
          <p className="text-green-700 text-2xl font-bold">{bengaliNum(minPrice)}  টাকা</p>
          <p>সবচেয়ে কম দামের বাজার</p>
        </div>

        <div className="rounded-3xl p-4 border border-border">
          <p>সর্বাধিক দাম</p>
          <p className="text-red-700 text-2xl font-bold">{bengaliNum(maxPrice)}  টাকা</p>
          <p>সবচেয়ে বেশি দামের বাজার</p>
        </div>

        <div className="rounded-3xl p-4 border border-border">
          <p>গড় দাম</p>
          <p className="text-green-700 text-2xl font-bold">{bengaliNum(avgPrice)}  টাকা</p>
          <p>প্রতি পিস-এর হিসাবে</p>
        </div>
      </article>
    </div>
  )
}