'use client'
import { getDate } from "@/utils/date";
import { Button } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(getDate());
  }, []);

  return (
    <section className="bg-surface border border-border p-6 rounded-[2rem] md:flex md:justify-around text-pretty">
      <div>
        <h3 className="bg-accent-soft-hover text-accent w-fit p-4 py-1 font-medium rounded-full border border-accent">
          {date}
        </h3>
        <h1 className="text-4xl md:text-5xl font-extrabold my-6">আজকের বাজারের দাম এক নজরে</h1>
        <p className="my-8">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
        <Button >সব পণ্য দেখুন</Button>

      </div>
      <figure>
        <Image src={'/bazar-hero.svg'} width={600} height={600} alt="Bazar Image" className="object-contain"></Image>
      </figure>

    </section>
  )
}