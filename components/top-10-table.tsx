import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "./data-table"

interface Top10TableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

const Top10Table: React.FC<Top10TableProps<any, any>> = ({ columns, data }) => {
    console.log(data)
    return (
        <DataTable columns={columns} data={data} isLoading={false} type="top10" />
    )
}

export default Top10Table