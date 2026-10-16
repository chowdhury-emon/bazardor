'use client'
import { signOut, useSession } from "@/lib/auth-client";
import { getDate } from "@/utils/date";
import { Button, toast } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function Header() {
    const router = useRouter();
    const [date, setDate] = useState("");
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const { data: session } = useSession();

    useEffect(() => {
        setDate(getDate());
    }, []);

    const handleSignOut = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/sign-in");
                    toast.success("সাইন আউট সলফ হয়েছে");
                },
            },
        });
    }

    return (
        <div className="container mx-auto relative flex justify-between items-center p-2 zoom-90 sm:zoom-100">
            <Link href={'/'} className="flex gap-2">
                <Image className="w-12 h-full aspect-square p-2 rounded-3xl bg-accent object-contain"
                    src={'/cart-logo.png'} width={500} height={500} alt="Cart logo"></Image>
                <div>
                    <h1 className="text-2xl font-black">বাজার দর</h1>
                    <p className="text-sm text-muted">{date}</p>
                </div>
            </Link>

            {session?.user
                ? (
                    <div className="flex items-center gap-1">
                        <figure className="w-10 h-auto aspect-square rounded-full border-2 border-border bg-background text-2xl text-muted font-black grid place-content-center capitalize overflow-hidden">
                            {session.user.image ?
                                (
                                    <Image src={session.user.image} width={300} height={300} alt="User Profile Image" />
                                ) : (
                                    <div className="select-none">{session.user.name[0]}</div>
                                )
                            }
                        </figure>
                        <Button variant="ghost" className="capitalize font-bold!"
                            onClick={() => { setMenuOpen(!menuOpen) }}
                        >
                            {session.user.name.split(' ')[0]}
                            <FaCaretDown />
                        </Button>

                        {/* HIDDEN MENU POPUP */}
                        <div className={` ${menuOpen ? 'grid' : 'hidden'} absolute right-2 top-15 z-100 min-w-3xs w-fit bg-surface shadow-xl border border-border rounded-4xl p-4`}>
                            <div className="border-b mb-3 pb-2">
                                <p className="text-2xl font-bold capitalize">{session.user.name}</p>
                                <p className="text-sm font-medium text-muted">{session.user.email}</p>
                            </div>

                            <Link href={'/profile'} className="button button--ghost text-base w-full justify-start">
                                <FaUser className="text-sm" />
                                আমার প্রোফাইল
                            </Link>
                            <Button variant="ghost" className="text-base w-full justify-start text-red-700"
                                onClick={() => handleSignOut()}
                            >
                                <FaArrowRightFromBracket />
                                সাইন আউট
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className={`flex gap-2`}>
                        <Link href={"/sign-in"} className="button button--ghost">
                            সাইন ইন
                            {/* <Button variant="ghost">সাইন ইন</Button> */}
                        </Link>
                        <Link href="/sign-up" className="button button--primary">
                            সাইন আপ
                            {/* <Button>সাইন আপ</Button> */}
                        </Link>
                    </div>
                )
            }

        </div>
    )
}