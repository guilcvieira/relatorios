import { ChartColumnBig, Info } from "lucide-react"
import Link from "next/link"
import React from "react"

const ReportsItem: React.FC = () => {
    return (
        <Link href={"/ranking-comentarios"}>
            <div className="
                flex flex-col justify-between gap-3 
                w-44 h-32 p-2 bg-background 
                rounded-sm shadow-sm border border-border 
                hover:bg-primary group transition-all"
            >
                <div className="flex flex-row justify-between items-center">
                    <ChartColumnBig className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground" />
                    <Info className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground" />
                </div>
                <span className="font-bold text-muted-foreground group-hover:text-primary-foreground">
                    Ranking dos Comentários
                </span>
                <span className="text-right text-xs text-muted group-hover:text-primary-foreground">Visão Geral</span>
            </div>
        </Link>
    )
}

export default ReportsItem