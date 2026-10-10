'use client'
import { Button } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
    const [date, setDate] = useState("");

    useEffect(() => {
        setDate(new Date().toLocaleDateString('bn-BD', { dateStyle: "full" }));
    }, []);

    return (
        <div className="container mx-auto flex justify-between items-center py-2">
            <div className="flex gap-4">
                <Image className="w-14 p-2 aspect-square rounded-2xl bg-accent object-contain"
                    src={'/cart-logo.png'} width={500} height={500} alt="Cart logo"></Image>
                <div>
                    <h1 className="text-2xl font-bold">বাজার দর</h1>
                    <p>{date}</p>
                </div>
            </div>

            <div className={"flex gap-4"}>
                <Button variant="ghost">সাইন ইন</Button>
                <Button>সাইন আপ</Button>
            </div>
        </div>
    )
}