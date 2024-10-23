import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";

export const comunicadosColumns: ColumnDef<Comunicado>[] = [
    {
        id: 'codigo',
        accessorKey: 'com_codigo',
        enableHiding: false,
        enableSorting: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Código" className="text-center" />
        ),
        cell: ({ cell }) => (
            <span className="block text-center">
                {cell.getValue() as string}
            </span>
        ),
        size: 50,
    },
    {
        id: 'comunicado',
        enableHiding: false,
        enableSorting: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Comunicado" />
        ),
        accessorKey: 'com_titulo',
        size: 900,
    },
    {
        id: 'total',
        enableHiding: false,
        enableSorting: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Total" className="text-center" />
        ),
        cell: ({ cell }) => (
            <span className="block text-center">
                {cell.getValue() as string}
            </span>
        ),
        accessorKey: 'total',
        size: 50
    }
]