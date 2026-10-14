'use client'
import { getDate } from "@/utils/date";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(getDate());
    }, []);

    return (
        <div className="container mx-auto flex justify-between items-center p-2 zoom-90 sm:zoom-100">
            <Link href={'/'} className="flex gap-2">
                <Image className="w-12 h-full aspect-square p-2 rounded-3xl bg-accent object-contain"
                    src={'/cart-logo.png'} width={500} height={500} alt="Cart logo"></Image>
                <div>
                    <h1 className="text-2xl font-black">বাজার দর</h1>
                    <p className="text-sm text-muted">{date}</p>
                </div>
            </Link>

            <div className={"flex gap-2"}>
                <Button variant="ghost">সাইন ইন</Button>
                <Button>সাইন আপ</Button>
            </div>
        </div>
    )
}