"use client"

import React from "react"

import {
    ColumnDef,
    ColumnFilter,
    SortingState,
    VisibilityState,
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
import { IChannel } from "@/types"
import { DateRange } from "react-day-picker"
import { DataTableFilters } from "./data-table-filters"
import DataTableLoading from "./data-table-loading"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    type: string
    selectedChannels?: IChannel[]
    setSelectedChannels?: (channels: IChannel[]) => void
    selectedDateRange?: DateRange
    setSelectedDateRange?: (dateRange: DateRange) => void
    filterBy?: string
    filters?: any
    isLoading?: boolean
}

export const DataTable: React.FC<DataTableProps<any, any>> = ({
    columns,
    data,
    selectedChannels,
    setSelectedChannels,
    selectedDateRange,
    setSelectedDateRange,
    filterBy,
    type,
    filters = {},
    isLoading = true
}) => {

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFilter[]>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            columnFilters,
            columnVisibility
        },
        getPaginationRowModel: getPaginationRowModel()
    })

    const getFilterHeaderFromAccessor = (accessorKey: string) => {
        const column = table.getColumn(accessorKey)
        return column?.columnDef.id as string
    }

    return (
        <div>
            {filterBy && (
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
            )}


            {isLoading
                ? (
                    <DataTableLoading message="Carregando dados..." isLoading={isLoading} />
                )
                : (
                    <div className="w-full border border-border rounded-md overflow-hidden">
                        <Table>
                            <TableHeader className="px-4">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id} className="h-16 bg-primary hover:bg-primary">
                                        {headerGroup.headers.map(header => (
                                            <TableHead
                                                key={header.id}
                                                className="text-primary-foreground font-semibold px-4"
                                                style={{
                                                    minWidth: header.column.columnDef.size,
                                                    maxWidth: header.column.columnDef.size,
                                                }}
                                            >
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
                                                <TableCell
                                                    key={cell.id}
                                                    className="px-4"
                                                    style={{
                                                        minWidth: cell.column.columnDef.size,
                                                        maxWidth: cell.column.columnDef.size,

                                                        backgroundColor: cell.column.id.includes('codigo') ? "#F5F5F5" : "#FFF"
                                                    }}
                                                >
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
                            {type !== 'top10' && (
                                <TableFooter>
                                    <TableRow>
                                        <TableCell colSpan={columns.length} className="h-16">
                                            <DataTablePagination table={table} />
                                        </TableCell>
                                    </TableRow>
                                </TableFooter>
                            )}

                        </Table>
                    </div>
                )
            }


        </div>
    )
}