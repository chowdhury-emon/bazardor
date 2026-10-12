import MarqueeProduct from "@/components/Header/MarqueeLinks/MarqueeProduct";
import { getProducts } from "@/lib/api";
import Marquee from "react-fast-marquee";

export default async function MarqueeLinks() {
  const products = await getProducts();
  // console.log(products)

  return (
    <Marquee className="h-fit overflow-hidden border-b border-border" pauseOnHover pauseOnClick>
      {
        products.map((product, i) => <MarqueeProduct key={i} product={product} />)
      }
    </Marquee>
  )
}