
'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
    Bars3Icon,
    CalendarIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Header from './Header'

export default function Aside() {

    const navigation = [
        { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
        { name: 'Produtos', href: '#', icon: UsersIcon, current: false },
        { name: 'Estoque', href: '#', icon: FolderIcon, current: false },
        { name: 'Pagamentos', href: '#', icon: CalendarIcon, current: false },
        { name: 'Relatórios', href: '#', icon: DocumentDuplicateIcon, current: false },

    ]

    const [sidebarOpen, setSidebarOpen] = useState(false)

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <div>
                
                <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                    />

                    <div className="fixed inset-0 flex">
                        <DialogPanel
                            transition
                            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
                        >
                            <TransitionChild>
                                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                                    <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                                    </button>
                                </div>
                            </TransitionChild>
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                                <div className="flex h-16 shrink-0 items-center">
                                    <img
                                        alt="Your Company"
                                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                        className="h-8 w-auto"
                                    />
                                </div>
                                <nav className="flex flex-1 flex-col">
                                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" className="-mx-2 space-y-1">
                                                {navigation.map((item) => (
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? 'bg-vermilion-600 text-white'
                                                                    : 'text-gray-700 hover:bg-gray-50 hover:text-vermilion-600',
                                                                'group flex gap-x-3 rounded-full p-2 text-sm/6 font-semibold',
                                                            )}
                                                        >
                                                            <item.icon
                                                                aria-hidden="true"
                                                                className={classNames(
                                                                    item.current ? 'text-white' : 'text-gray-400 group-hover:text-vermilion-600',
                                                                    'size-6 shrink-0',
                                                                )}
                                                            />
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col p-4">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <Header />
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white border border-gray-100 rounded-xl px-6">
                        <div className="flex h-16 shrink-0 items-center">
                            <span className="uppercase font-bold text-xl text-vermilion-600">Mynu</span>
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-vermilion-600 text-white'
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-vermilion-600',
                                                        'group flex gap-x-3 rounded-full p-2 text-sm/6 font-semibold',
                                                    )}
                                                >
                                                    <item.icon
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            item.current ? 'text-white' : 'text-gray-400 group-hover:text-vermilion-600',
                                                            'size-6 shrink-0',
                                                        )}
                                                    />
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}

                                       
                                    </ul>
                                </li>

                                <li className="mt-auto pb-3">
                                    <a
                                        href="#"
                                        className="group -mx-2 flex gap-x-3 rounded-full p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-vermilion-600"
                                    >
                                        <Cog6ToothIcon
                                            aria-hidden="true"
                                            className="size-6 shrink-0 text-gray-400 group-hover:text-vermilion-600"
                                        />
                                        Configurações
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 lg:hidden">
                    <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                    <div className="flex-1 text-sm/6 font-semibold text-gray-900">Dashboard</div>
                    <a href="#">
                        <span className="sr-only">Your profile</span>
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="size-8 rounded-full bg-gray-50"
                        />
                    </a>
                </div>

                <main className="py-10 lg:pl-72">
                    <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
                </main>
            </div>
        </>
    )
}