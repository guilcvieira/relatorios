"use client"

import { DataTableColumnHeader } from "@/components/data-table-column-header"
import { formatDateWithoutTimezone } from "@/lib/utils"
import { Comment } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Comment>[] = [
    {
        id: 'codigo',
        accessorKey: 'com_codigo',
        enableHiding: false,
        enableSorting: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Código" />
        ),
        cell: ({ cell }) => (
            <span className="block text-center">
                {cell.getValue() as string}
            </span>
        ),
        size: 80,
    },
    {
        id: 'comunicado',
        enableHiding: false,
        enableResizing: true,
        header: () => (
            <span className="block text-left">
                Comunicado
            </span>
        ),
        accessorKey: 'com_titulo',
        size: 400,

    },
    {
        id: 'comentario',
        enableHiding: false,
        enableSorting: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Comentário" className="text-left" />
        ),
        accessorKey: 'cmt_titulo',
        size: 400
    },
    {
        id: 'data do comentario',
        accessorKey: 'cmt_data_comentario',
        size: 100,
        cell: ({ cell }) => (
            <span className="block text-center w-full">
                {formatDateWithoutTimezone(cell.getValue() as string)}
            </span>
        ),
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Data do Comentário" className="text-wrap" />
        )
    },
    {
        id: 'colaborador',
        accessorKey: 'cmt_nome_colaborador',
        size: 150,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Colaborador" />
        )
    },
]