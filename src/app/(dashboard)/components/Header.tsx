'use client'

import { Popcorn, QrCode } from "lucide-react"
import Avatars from "./ui/Avatars"
import ButtonHeader from "./ui/ButtonsHeader"


export default function Header() {
    return (
        <div className="header mb-5">
            <div className="flex items-center gap-10">
                <div>
                    <Avatars text="F" color="bg-black" />
                </div>
                <div className="buttons-header flex items-center gap-2">
                    <ButtonHeader icon={<Popcorn className='size-4' />} href="#" text="Lorem" />
                    <ButtonHeader icon={<Popcorn className='size-4' />} href="#" text="Lorem" />
                    <ButtonHeader icon={<Popcorn className='size-4' />} href="#" text="Lorem" />
                    <ButtonHeader icon={<Popcorn className='size-4' />} href="#" text="Planos" />
                    <ButtonHeader icon={<Popcorn className='size-4' />} href="#" text="Lorem" />
                    <ButtonHeader icon={<Popcorn className='size-4' />} href="#" text="Lorem" />
                </div>
            </div>
        </div>
    )
}