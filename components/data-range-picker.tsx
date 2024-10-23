"use client"

import { Calendar } from "@/components/ui/calendar"
import { addDays, format, set } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Calendar as CalendarIcon } from "lucide-react"
import React from "react"
import { DateRange } from "react-day-picker"

import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { IDataRangePickerProps } from "@/types"

export const DataRangePicker: React.FC<IDataRangePickerProps> = ({ className, selectedDateRange, setSelectedDateRange }) => {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: undefined,
        to: undefined
    })

    const [selectedPeriod, setSelectedPeriod] = React.useState<string | undefined>()

    React.useEffect(() => {
        if (setSelectedDateRange && date) {
            setSelectedDateRange(date)
        }
    }, [date])

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn("justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        {
                            date && date?.from && <span className="font-semibold">Periodo - &nbsp;</span>
                        }

                        {date && date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "dd/MM/yyyy", { locale: ptBR })} - {format(date.to, "dd/MM/yyyy", { locale: ptBR })}
                                </>
                            ) : (
                                format(date.from, "dd/MM/yyyy", { locale: ptBR })
                            )
                        ) : (
                            <span className="font-semibold">Período</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="flex flex-col space-y-2 w-auto p-0" align="center">
                    <div className="p-4">
                        <Select
                            value={selectedPeriod}
                            onValueChange={value => {
                                setSelectedPeriod(value)
                                setDate({
                                    from: addDays(new Date(), -value),
                                    to: set(new Date(), { hours: 0, minutes: 0, seconds: 0 })

                                })
                            }}
                        >
                            <SelectTrigger className={cn("rounded-md border border-border")}>
                                <SelectValue placeholder="Selecionar Período" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectItem value="0">Hoje</SelectItem>
                                <SelectItem value="15">Últimos 15 Dias</SelectItem>
                                <SelectItem value="30">Últimos 30 Dias</SelectItem>
                                <SelectItem value="90">Últimos 90 Dias</SelectItem>
                                <SelectItem value="180">Últimos 180 Dias</SelectItem>
                                <SelectItem value="365">Últimos 365 Dias</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Calendar
                        locale={ptBR}
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={(value) => {
                            console.log(value)
                            return setDate(value)
                        }}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}