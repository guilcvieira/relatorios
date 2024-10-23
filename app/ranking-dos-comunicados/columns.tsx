"use client"

import { DataTableColumnHeader } from "@/components/data-table-column-header"
import { formatDateWithoutTimezone } from "@/lib/utils"
import { Announcement } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Announcement>[] = [
    {
        accessorKey: 'com_codigo',
        enableHiding: false,
        enableSorting: false,
        size: 80,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Código" />
        ),
        cell: ({ cell }) => (
            <span className="block text-center">
                {cell.getValue() as string}
            </span>
        ),
    },
    {
        id: 'comunicado',
        accessorKey: 'com_titulo',
        enableHiding: false,
        enableSorting: false,
        size: 400,

        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Comunicado" className="text-left" />
        ),
    },
    {
        id: 'editorias',
        enableSorting: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Editorias" className="text-left" />
        ),
        accessorKey: 'com_editorias',
    },
    {
        id: 'pilares',
        accessorKey: 'com_pilares',
        enableSorting: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Pilares" className="text-left" />
        ),
    },
    {
        id: 'canais',
        accessorKey: 'com_canais',
        enableSorting: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Canais" />
        ),
        cell: ({ cell }) => (
            <span className="block text-center w-full">
                {cell.getValue() as string}
            </span>
        ),
    },
    {
        id: 'data envio',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Data Envio" />
        ),
        accessorKey: 'com_data_envio',
        cell: ({ cell }) => (
            <span className="block text-center w-full">
                {formatDateWithoutTimezone(cell.getValue() as string)}
            </span>
        ),
    },
    {
        id: 'data termino',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Data Término" className="text-center" />
        ),
        accessorKey: 'com_data_termino',
        cell: ({ cell }) => (
            <span className="block text-center w-full">
                {formatDateWithoutTimezone(cell.getValue() as string)}
            </span>
        ),
    },
    {
        id: 'enviados',
        accessorKey: 'com_enviados',
        enableSorting: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Enviados" className="text-center" />
        ),
        cell: ({ cell }) => (
            <span className="block text-center w-full">
                {cell.getValue() as string}
            </span>
        ),
    },
    {
        id: 'alcançados',
        accessorKey: 'com_alcancados',
        enableSorting: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Alcançados" className="text-center" />
        ),
        cell: ({ cell }) => (
            <span className="block text-center w-full">
                {cell.getValue() as string}
            </span>
        ),
    },
    {
        id: 'visualizados',
        accessorKey: 'com_visualizados',
        enableSorting: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Visualizados" className="text-center" />
        ),
        cell: ({ cell }) => (
            <span className="block text-center w-full">
                {cell.getValue() as string}
            </span>
        ),
    },
    {
        id: 'links',
        accessorKey: 'com_links',
        enableSorting: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Links" className="text-center" />
        ),
        cell: ({ cell }) => (
            <span className="block text-center w-full">
                {cell.getValue() as string}
            </span>
        ),
    },
    {
        id: 'total clicados',
        enableSorting: false,
        accessorKey: 'com_total_clicados',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Total Clicados" className="text-center" />
        ),
        cell: ({ cell }) => (
            <span className="block text-center w-full">
                {cell.getValue() as string}
            </span>
        ),
    },
    {
        id: 'total reagidos',
        accessorKey: 'com_total_reagidos',
        enableSorting: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Total Reagidos" className="text-center" />
        ),
        cell: ({ cell }) => (
            <span className="block text-center w-full">
                {cell.getValue() as string}
            </span>
        ),
    },
    {
        id: 'total comentários',
        accessorKey: 'com_total_comentarios_unicos',
        enableSorting: false,
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Total Comentários" className="text-center" />
        ),
        cell: ({ cell }) => (
            <span className="block text-center w-full">
                {cell.getValue() as string}
            </span>
        ),
    }
]