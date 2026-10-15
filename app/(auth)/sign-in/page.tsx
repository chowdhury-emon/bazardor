'use client'
import { signIn } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, Spinner, TextField, toast } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {

      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData.entries());

      const { data, error } = await signIn.email({
        email: userData.email as string,
        password: userData.password as string,
        callbackURL: "/",
      });

      if (data) {
        toast.success("সফলভাবে সাইন ইন হয়েছে")
      }
      else if (error) {
        if (error.status == 401) {
          toast.danger("ইমেইল বা পাসওয়ার্ড ভুল হয়েছে।")
        } else {
          toast.danger(error.message)
        }
        console.error(error)
      }
    } catch (er) {
      console.log(er)
    }
    finally {
      setIsLoading(false)
    }
  };

  return (
    <section className="container grid place-items-center my-8">
      <div className="grid place-items-center gap-4 w-full">
        <div className="text-center">
          <h2>সাইন ইন</h2>
          <p className="text-sm text-muted">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
        </div>

        <Form className="flex w-full max-w-sm flex-col gap-4 bg-surface border border-border p-4 rounded-4xl" onSubmit={onSubmit}>
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

          <div className="grid gap-2">
            <Button type="submit" className='w-full'>
              {isLoading && <Spinner className="text-white" />}
              সাইন ইন
            </Button>

            <div className="grid place-items-center *:col-start-1 *:row-start-1 my-4">
              <hr className="border-t border-border w-full" />
              <p className=" text-xs text-muted bg-surface px-4 mx-auto">অথবা</p>
            </div>

            <p className="mt-4 text-center text-sm">
              অ্যাকাউন্ট নেই? <Link href={'/sign-up'} className="text-accent"> সাইন আপ করুন</Link>
            </p>
          </div>
        </Form>

        <Link href={'/'} className="text-center text-muted text-sm">← হোম পেজে ফিরে যান</Link>
      </div>
    </section>
  );
}