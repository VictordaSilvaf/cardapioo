"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Header from "./Header";
import Avatars from "./ui/Avatars";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  CalendarIcon,
  FilesIcon,
  FolderIcon,
  HomeIcon,
  MenuIcon,
  SettingsIcon,
  UsersIcon,
  XIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationBase = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Meu Cardápio", href: "/dashboard/menu", icon: UsersIcon },
  { name: "Estoque", href: "/dashboard/stock", icon: FolderIcon },
  { name: "Pagamentos", href: "/dashboard/payment", icon: CalendarIcon },
  { name: "Relatórios", href: "/dashboard/reports", icon: FilesIcon },
];

export default function Aside(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navigation = navigationBase.map((item) => ({
    ...item,
    current: pathname === item.href,
  }));

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      {/* Mobile Sidebar */}

      <Header />

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:top-20 lg:z-50 lg:flex lg:w-72 lg:flex-col p-4">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white border border-gray-200 rounded-xl px-6">
          <div className="flex h-16 shrink-0 items-center">
            <span className="uppercase font-bold text-xl text-vermilion-600">
              Mynu
            </span>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          buttonVariants({
                            variant: item.current ? "default" : "ghost",
                            size: "icon",
                          }),
                          "justify-start px-4 w-full group duration-300"
                        )}
                      >
                        <item.icon
                          size={16}
                          className={classNames(
                            item.current
                              ? "text-white"
                              : "text-neutral-600 group-hover:text-vermilion-600",
                            "shrink-0"
                          )}
                        />
                        <p
                          className={classNames(
                            item.current
                              ? "text-white"
                              : "text-neutral-600 group-hover:text-vermilion-600"
                          )}
                        >
                          {item.name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="mt-auto pb-3">
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <SettingsIcon className="size-6 shrink-0 text-gray-400 group-hover:text-vermilion-600" />
                  Configurações
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Topbar Mobile */}
      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 lg:hidden">
        <Button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <MenuIcon className="size-6" />
        </Button>
        <div className="flex-1 text-sm font-semibold text-gray-900">
          Dashboard
        </div>
        <button>
          <span className="sr-only">Your profile</span>
          <Avatars text="F" color="bg-black" />
        </button>
      </div>

      {/* Content */}
      <main className="py-4 lg:pl-72 px-10">
        <div className="px-4 sm:px-6 lg:px-8 py-5 bg-white rounded-2xl border border-gray-200">
          {props.children}
        </div>
      </main>
    </div>
  );
}
