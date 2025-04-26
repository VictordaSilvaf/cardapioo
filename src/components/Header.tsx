'use client'

import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button";
import { LayoutDashboardIcon, UserIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { logout } from "@/app/auth/login/actions";


const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Sobre nós', href: '/about' },
    { name: 'Preços', href: '/prices' },
    { name: 'Clientes', href: '/clients' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [user, setUser] = useState<User>()
    const pathname = usePathname();

    useEffect(() => {
        async function getUser() {
            const supabase = await createClient()

            const { data } = await supabase.auth.getUser()

            if (data.user) {
                setUser(data.user)
            }
        }

        getUser()
    }, [])

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-8 py-4">
            <nav aria-label="Global" className="flex items-center justify-between p-4 lg:px-8 bg-white rounded-full">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <Logo />
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <Drawer direction="right" open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <DrawerTrigger
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </DrawerTrigger>
                        <DrawerContent className="px-2">
                            <DrawerHeader>
                                <div className="flex items-center justify-between mb-6 pt-2">
                                    <button type="button" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <Image
                                            alt=""
                                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                            className="h-8 w-auto"
                                            width={40}
                                            height={40}
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon aria-hidden="true" className="size-6" />
                                    </button>
                                </div>


                                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                <DrawerDescription>This action cannot be undone.</DrawerDescription>


                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-6">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                        <div className="py-6">
                                            {user ? (
                                                <Link href="/app" className="text-sm/6 font-semibold text-gray-900">
                                                    <Button variant="default" className="">
                                                        Dashboard
                                                    </Button>
                                                </Link>
                                            ) : (
                                                <Link href="/auth/login" className="text-sm/6 font-semibold text-gray-900">
                                                    Log in
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </DrawerHeader>
                            <DrawerFooter>
                                <Button>Submit</Button>
                                <DrawerClose>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm/6 font-semibold`}
                        >
                            <Button variant={item.href === pathname ? "default" : "ghost"} className="">
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {user ? (
                        <>
                            <form>
                                <Button
                                    formAction={logout}
                                    type="submit"
                                    variant={'outline'}
                                    className="mr-4">
                                    Sair
                                </Button>
                            </form>
                            <Link href="/app/profile" className="mr-4">
                                <Button variant="outline" className="aspect-square">
                                    <UserIcon className="text-vermilion-700" />
                                </Button>
                            </Link>
                            <Link href="/dashboard" className="">
                                <Button variant="default" className="">
                                    <LayoutDashboardIcon />
                                    Dashboard
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <Link href="/auth/login" className="text-sm/6 font-semibold text-gray-900">
                            <Button variant="default" className="">
                                Log in
                            </Button>
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    )
}