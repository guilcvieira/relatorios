import React from "react"

interface DataTableLoadingProps {
    isLoading: boolean
    message?: string
}

const DataTableLoading: React.FC<DataTableLoadingProps> = ({
    isLoading,
    message = "Carregando dados..."
}) => {
    return (
        <>
            {isLoading && (
                <div className="w-full flex items-center justify-center min-h-[200px] rounded-lg border border-dashed border-border px-4 text-center">
                    <span className="text-sm text-muted-foreground/50">
                        {message}
                    </span>
                </div>
            )}
        </>
    )
}

export default DataTableLoading