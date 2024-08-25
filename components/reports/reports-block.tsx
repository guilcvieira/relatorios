import React from "react"
import ReportsItem from "./reports-item"

const ReportsBlock: React.FC = () => {
    return (
        <div className="w-full">
            <div className="w-full border-b border-border mb-4">
                <h2 className="text-md text-muted-foreground font-semibold">
                    Bloco de Relatórios
                </h2>

            </div>

            <div className="w-full flex flex-col gap-4 flex-wrap">
                <ReportsItem />
            </div>
        </div>
    )
}

export default ReportsBlock