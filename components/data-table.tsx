"use client"

import React from "react"

import {
    ColumnDef,
    ColumnFilter,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"

import { DataTablePagination } from "@/components/ui/table-pagination"
import { Channel } from "@/types"
import { DateRange } from "react-day-picker"
import { DataTableFilters } from "./data-table-filters"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    selectedChannels?: Channel[]
    setSelectedChannels?: (channels: Channel[]) => void 
    selectedDateRange?: DateRange
    setSelectedDateRange?: (dateRange: DateRange) => void
    filterBy: string
    filters?: any
}

export const DataTable: React.FC<DataTableProps<any, any>> = ({
    columns,
    data,
    selectedChannels,
    setSelectedChannels,
    selectedDateRange,
    setSelectedDateRange,
    filterBy,
    filters = {}
}) => {

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFilter[]>([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters
        },
        getPaginationRowModel: getPaginationRowModel()
    })

    const getFilterHeaderFromAccessor = (accessorKey: string) => {
        const column = table.getColumn(accessorKey)
        return column?.columnDef.header as string
    }

    return (
        <div>

            <div className="mb-2">
                <DataTableFilters
                    filterBy={filterBy}
                    filterAlias={getFilterHeaderFromAccessor(filterBy)}
                    table={table}
                    selectedChannels={selectedChannels}
                    setSelectedChannels={setSelectedChannels}
                    selectedDateRange={selectedDateRange}
                    setSelectedDateRange={setSelectedDateRange}
                />
            </div>

            <div className="w-full border border-border rounded-md overflow-hidden">
                <Table>
                    <TableHeader className="px-4">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} className="h-16 bg-primary hover:bg-primary">
                                {headerGroup.headers.map(header => (
                                    <TableHead key={header.id} className="text-primary-foreground font-semibold px-4">
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )
                                        }
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map(row => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className="h-14">
                                    {row.getVisibleCells().map(cell => (
                                        <TableCell key={cell.id} className="px-4">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    Nenhum registro encontrado
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-16">
                                <DataTablePagination table={table} />
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    )
}