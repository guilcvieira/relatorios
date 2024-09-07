import { Info } from "lucide-react"
import Link from "next/link"
import React from "react"
import { IReport } from "./reports-block"

export type ReportsItemProps = {
    report: IReport
}

const ReportsItem: React.FC<ReportsItemProps> = async ({ report }) => {
    const getLink = () => {
        // replace spaces with hyphens, and make it lowercase and change accents to normal characters and remove special characters
        return report.title.toLowerCase().replace(/ /g, "-")
            .replace(/[áàãâä]/g, "a").replace(/[éèêë]/g, "e")
            .replace(/[íìîï]/g, "i").replace(/[óòõôö]/g, "o")
            .replace(/[úùûü]/g, "u").replace(/[^a-z0-9-]/g, "")
    }
    return (
        <Link href={`/${getLink()}`}>
            <div className="
                flex flex-col justify-between
                w-44 h-36 p-2 bg-background 
                rounded-sm shadow-sm border border-border 
                hover:bg-primary group transition-all"
            >
                <div className="flex flex-row justify-between items-center">
                    <report.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary-foreground" />
                    <Info className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground" />
                </div>
                <span className="font-bold text-muted-foreground group-hover:text-primary-foreground overflow-hidden">
                    {report.title}
                </span>
                <span className="text-right text-xs text-muted group-hover:text-primary-foreground ">
                    {report.type === "visao-geral" ? "Visão Geral" : "Um a Um"}
                </span>
            </div>
        </Link>
    )
}
export default ReportsItem