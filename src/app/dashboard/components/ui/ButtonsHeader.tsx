'use client'

import { FC, ReactNode } from "react"

interface ButtonsProps {
    text: string;
    icon: ReactNode;
    href: string
}

const ButtonHeader: FC<ButtonsProps> = ({ text, icon, href }) => {
    return (
        <a
            href={href}
            className="rounded-full flex items-center gap-2 transition-all bg-gray-200 px-3.5 py-2 text-sm font-semibold text-gray-900 hover:bg-vermilion-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vermilion-600"
        >
            <span>{icon}</span>
            {text}
        </a>
    )
}

export default ButtonHeader