import React from "react"
import ReportsItem from "./reports-item"

export interface IReport {
    title: string
    type: "visao-geral" | "um-a-um"
    icon: any
}

export type ReportsBlockProps = {
    title: string
    reports: Array<IReport>
}

const ReportsBlock: React.FC<ReportsBlockProps> = ({ title, reports }) => {
    console.log(reports)
    return (
        <div className="w-full pt-24">
            <div className="w-full border-b border-border mb-4">
                <h2 className="text-lg text-muted-foreground font-semibold">
                    {title}
                </h2>

            </div>

            <div className="w-full flex gap-4 flex-wrap">
                {reports && reports.map((report, index) => (
                    <ReportsItem key={index} report={report} />
                ))}
            </div>
        </div>
    )
}

export default ReportsBlock