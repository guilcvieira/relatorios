import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import React from "react"

type BreadCrumbProps = {
    title: string
}

const Breadcrumb: React.FC<BreadCrumbProps> = ({title}) => {
    return (
        <Link href='/' className="flex gap-2 items-center">
            <ChevronLeft className='h-6 w-6 text-primary' />
            <h1 className='text-xl text-primary font-bold'>{title}</h1>
        </Link>
    )
}

export default Breadcrumb