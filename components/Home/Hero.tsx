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
    <section className="bg-surface border border-border p-6 rounded-[2rem] md:flex md:justify-between text-balance ">
      <div className="text-center md:text-start md:w-1/2">
        <p className="text-sm text-accent bg-accent-soft-hover w-fit p-4 py-2 rounded-full font-semibold">
          {date}
        </p>
        <h1 className="text-4xl font-extrabold my-6">আজকের বাজারের দাম এক নজরে</h1>
        <p className="my-8">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
        <Button className={"shadow-lg shadow-accent/50"}>সব পণ্য দেখুন</Button>

      </div>
      <figure>
        <Image src={'/bazar-hero.svg'} width={400} height={400} alt="Bazar Image" className="w-auto h-auto object-contain"></Image>
      </figure>

    </section>
  )
}