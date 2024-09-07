import React from "react"

interface NotFoundCardProps {
    message?: string
}

export const NotFoundCard: React.FC<NotFoundCardProps> = ({
    message = "Não existem registros suficientes no filtro selecionado para a apresentação desta métrica."
}) => {
    return (
        <div className="w-full flex items-center justify-center min-h-[200px] rounded-lg border border-dashed border-border px-4 text-center">
            <span className="text-sm text-muted-foreground/50">
                {message}
            </span>
        </div>
    )
}