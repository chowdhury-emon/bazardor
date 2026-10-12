import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="grid place-content-center">
      <p className="text-xs font-black text-muted">( 404 )</p>
      <h1 className="text-7xl font-black text-muted"> not found </h1>
      <figure>
        <Image src={'/bazar-hero.svg'} width={300} height={300} alt="Bazar Image" className="w-auto h-auto object-contain saturate-0"></Image>
      </figure>
      <Link href={'/'} className="text-center text-muted animate-bounce">← হোম পেজে ফিরে যান</Link>
    </div>
  )
}