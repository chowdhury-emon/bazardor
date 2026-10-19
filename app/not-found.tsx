import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid place-content-center">
      <p className="text-lg font-black text-muted animate-pulse text-center md:text-start">( ৪০৪ )</p>
      <h1 className="text-3xl md:text-5xl font-black text-muted"> পেজটি খুজে পাওায়া যায়নি</h1>
      <figure>
        <Image src={'/bazar-hero.svg'} width={300} height={300} alt="Bazar Image" className="w-auto h-auto mx-auto object-contain saturate-0"></Image>
      </figure>
      <Link href={'/'} className="text-center text-muted animate-bounce">← হোম পেজে ফিরে যান</Link>
    </div>
  )
}