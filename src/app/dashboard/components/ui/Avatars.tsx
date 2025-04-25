'use client';

import { FC } from "react";

interface AvatarsProps {
    text: string;
    color: string;
}

const Avatars: FC<AvatarsProps> = ({ text, color }) => {
    return (
        <span className={`inline-flex cursor-pointer size-10 items-center justify-center rounded-full ${ color }`}>
            <span className="text-lg font-medium text-white">{ text }</span>
        </span>
    )
}

export default Avatars