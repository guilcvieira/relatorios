"use client"

import { Button } from "@/components/ui/button"
import { formatDateWithoutTimezone } from "@/lib/utils"
import { Comment } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<Comment>[] = [
    {
        header: 'Comunicado',
        accessorKey: 'com_titulo',
    },
    {
        header: 'Comentário',
        accessorKey: 'cmt_titulo',
    },
    {
        accessorKey: 'cmt_data_comentario',
        cell: ({ cell }) => (
            <span className="text-center w-full">
                {formatDateWithoutTimezone(cell.getValue() as string)}
            </span>
        ),
        header: ({ column }) => (
            <Button
                className="-ml-4"
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Data do comentário
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },
    {
        accessorKey: 'cmt_nome_colaborador',
        header: ({ column }) => (

            <Button
                className="-ml-4"
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            >
                Colaborador
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },
]