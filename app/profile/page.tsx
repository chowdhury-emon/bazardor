'use client'
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField, toast } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function UserProfile() {
    const { data: session } = useSession();
    const router = useRouter();
    const [isEditMode, setIsEditMode] = useState(false);

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

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updateData = Object.fromEntries(formData.entries());

        await updateUser({
            name: updateData.name as string,
        }, {
            onSuccess() {
                toast.success("তথ্য সফলভাবে হালনাগাদ হয়েছে")
            },
            onError(context) {
                toast.danger("তথ্য হালনাগাদ সফল হয়নি")
                console.log(context.error)
            }
        })
    }

    return (
        <div className="container mx-auto max-w-3xl">
            <div>
                <h2>আমার প্রোফাইল</h2>
                <p className="text-muted">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </div>

            <div className="flex justify-between gap-4 bg-surface border border-border rounded-4xl p-4 my-4">
                <div className="grid md:flex items-center gap-4">
                    <figure className="w-20 h-auto aspect-square rounded-3xl border-2 border-border bg-background text-6xl text-muted font-black grid place-content-center capitalize overflow-hidden">
                        {session?.user.image ?
                            (
                                <Image src={session?.user.image} width={500} height={500} alt="User Profile Image" />
                            ) : (
                                <div>{session?.user.name[0]}</div>
                            )
                        }
                    </figure>

                    <div>
                        <p className="text-2xl font-semibold capitalize">{session?.user.name}</p>
                        <p className="text-base font-medium text-muted">{session?.user.email}</p>
                    </div>
                </div>
                <div className="grid gap-2 place-items-end h-fit text-xs">
                    <Button variant="outline" className="text-base justify-start text-red-700 border-current"
                        onClick={() => handleSignOut()}
                    >
                        <FaArrowRightFromBracket />
                        সাইন আউট
                    </Button>
                    <Button variant="outline" className="text-base justify-start text-blue-700 border-current"
                        onClick={() => setIsEditMode(!isEditMode)}
                    >
                        <FaUserEdit />
                        এডিট ইউজার
                    </Button>
                </div>
            </div>

            {isEditMode &&
                <div className="grid gap-4 bg-surface border border-border rounded-4xl p-4 my-4">
                    <p className="text-xl font-semibold">তথ্য</p>
                    <Form className="flex w-full flex-col gap-4 bg-surface border border-border p-4 rounded-4xl"
                        onSubmit={onSubmit}>
                        <TextField
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "কমপক্ষে ৩ অক্ষর হতে হবে";
                                }
                                return null;
                            }}
                        >
                            <Label>নাম</Label>
                            <Input placeholder={`আপনার নাম`} />
                            <FieldError />
                        </TextField>

                        <Button type="submit" className='w-full'>
                            আপডেট
                        </Button>
                    </Form>
                </div>
            }
        </div>
    )
}