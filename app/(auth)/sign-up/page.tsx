"use client";
import { signUp } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, Spinner, TextField, toast } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formData = new FormData(e.currentTarget);
            const userData = Object.fromEntries(formData.entries());

            const { data, error } = await signUp.email({
                name: userData.name as string,
                email: userData.email as string,
                password: userData.password as string,
                callbackURL: "/",
            });

            if (data) {
                toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে")
            }
            if (error) {

                if (error?.status == 422) {
                    toast.danger("এই ইমেইল দিয়ে ইতোমধ্যে একটি অ্যাকাউন্ট রয়েছে")
                } else {
                    toast.danger(error?.message)
                }
            }

        } catch (er) {
            console.error(er)
        } finally {
            setIsLoading(false);
        }
    };

    return (
        // <section className="container grid gap-4 place-items-center h-fit my-8">
        <section className="container grid place-items-center my-8">
            <div className="grid place-items-center gap-4 w-full">
                <div className="text-center">
                    <h2>অ্যাকাউন্ট তৈরি করুন</h2>
                    <p className="text-sm text-muted">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
                </div>

                <Form className="flex w-full max-w-sm flex-col gap-4 bg-surface border border-border p-4 rounded-4xl" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "কমপক্ষে ৩ অক্ষর হতে হবে";
                            }
                            return null;
                        }}
                    >
                        <Label>নাম</Label>
                        <Input placeholder="যেমন: রহিম উদ্দিন" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "দয়া করে একটি সঠিক ইমেইল এড্রেস দিন";
                            }

                            return null;
                        }}
                    >
                        <Label>ইমেইল</Label>
                        <Input placeholder="you@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        onChange={setPassword}
                        validate={(value) => {
                            if (value.length < 8) {
                                return "কমপক্ষে ৮ অক্ষর হতে হবে";
                            }
                            return null;
                        }}
                    >
                        <Label>পাসওয়ার্ড</Label>
                        <Input placeholder="কমপক্ষে ৮ অক্ষর" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="confirmPassword"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "কমপক্ষে ৮ অক্ষর হতে হবে";
                            }
                            if (password !== value) {
                                return "পাসওয়ার্ড দুটি মিলছে না"
                            }

                            return null;
                        }}
                    >
                        <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
                        <Input placeholder="আবার লিখুন" />
                        <FieldError />
                    </TextField>

                    <div className="grid gap-2">
                        <Button type="submit" className='w-full'>
                            {isLoading && <Spinner className="text-white" />}
                            অ্যাকাউন্ট তৈরি করুন
                        </Button>

                        <div className="grid place-items-center *:col-start-1 *:row-start-1 my-4">
                            <hr className="border-t border-border w-full" />
                            <p className=" text-xs text-muted bg-surface px-4 mx-auto">অথবা</p>
                        </div>

                        <p className="mt-4 text-center text-sm">
                            অ্যাকাউন্ট আছে? <Link href={'/sign-in'} className="text-accent"> সাইন ইন করুন</Link>
                        </p>
                    </div>
                </Form>

                <Link href={'/'} className="text-center text-muted text-sm">← হোম পেজে ফিরে যান</Link>
            </div>
        </section>
    );
}