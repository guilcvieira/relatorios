import { DateRange } from "react-day-picker"

export type Comment = {
    com_codigo?: string
    com_titulo: string
    cmt_titulo: string
    cmt_data_comentario: string
    cmt_nome_colaborador: string
}

export type Announcement = {
    com_codigo?: string
    com_titulo: string
    cmt_titulo: string
    com_pilares: string
    com_canais: string
    com_data_envio: string
    com_data_termino: string
    com_enviados: number
    com_alcancados: number
    com_visualizados: number
    com_links: number
    com_total_clicados: number
}

export interface IChannel {
    slug: string
    name: string
    active?: boolean
}

export interface IComunicadosChartProps {
    chartData?: Array<any>
    totalComunicados?: number
    percent?: number
}

export interface IDataRangePickerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    className?: string
    selectedDateRange?: DateRange
    setSelectedDateRange?: (dateRange: DateRange) => void
}