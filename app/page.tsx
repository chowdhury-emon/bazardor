import Hero from "@/components/Home/Hero";
import AllProducts from "@/components/Products/AllProducts";
import PriceDownProducts from "@/components/Products/PriceDownProducts";
import PriceUpProducts from "@/components/Products/PriceUpProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <PriceUpProducts />
      <PriceDownProducts />
      <AllProducts />
    </div>
  )
}