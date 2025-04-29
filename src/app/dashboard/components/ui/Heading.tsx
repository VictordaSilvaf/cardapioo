import { FC, ReactNode } from "react";


interface HeadingPros {
    title: string;
    rightContent?: ReactNode

}

const Heading: FC<HeadingPros> = ({ title, rightContent }) => {
    return (
        <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    { title }
                </h2>
                <p className="text-sm text-gray-400 mt-1">#22 Maio, 09:30</p>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
                
               { rightContent }
            </div>
        </div>
    )
}


export default Heading