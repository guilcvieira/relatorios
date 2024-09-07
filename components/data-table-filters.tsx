
import React from "react";
import { channels } from "@/app/ranking-dos-comentarios/channels";
import { Channel } from "@/types";
import { DateRange } from "react-day-picker";
import { DataRangePicker } from "./data-range-picker";
import { ChannelButton } from "./ui/channel-button";
import { Input } from "./ui/input";

export type DataTableFiltersProps = {
    table: any
    filterBy: string
    selectedChannels?: Channel[]
    setSelectedChannels?: (channels: Channel[]) => void
    selectedDateRange?: DateRange
    setSelectedDateRange?: (dateRange: DateRange) => void
    filterAlias: string
}

export const DataTableFilters: React.FC<DataTableFiltersProps> = ({
    table,
    filterBy,
    selectedChannels,
    setSelectedChannels,
    selectedDateRange,
    setSelectedDateRange,
    filterAlias,
}) => {

    const toggleChannel = (channel: Channel) => {
        if (selectedChannels) {
            if (selectedChannels && setSelectedChannels) {
                if (selectedChannels.find((ch) => ch.slug === channel.slug)) {
                    setSelectedChannels(selectedChannels.filter((ch) => ch.slug !== channel.slug))
                } else {
                    setSelectedChannels([...selectedChannels, channel])
                }
            }
        }
    }

    return (
        <div className="flex flex-row justify-between items-center py-2 bg-transparent">
            <div className="flex items-center">
                <Input
                    placeholder={`Filtrar por ${filterAlias}`}
                    value={(table.getColumn(filterBy)?.getFilterValue() as string) || ""}
                    onChange={event => table.getColumn(filterBy)?.setFilterValue(event.target.value)}
                    className="w-[500px]"
                />
            </div>
            <div className="flex justify-end items-center gap-4">
                <DataRangePicker
                    selectedDateRange={selectedDateRange}
                    setSelectedDateRange={setSelectedDateRange}
                />

                <div className="flex flex-row items-center gap-1">
                    {channels.map((channel) => (
                        <ChannelButton
                            key={channel.slug}
                            isSelected={selectedChannels ? selectedChannels.find((ch) => ch.slug === channel.slug) ? true : false : false}
                            setIsSelected={() => { toggleChannel(channel) }}
                        >
                            {channel.slug}
                        </ChannelButton>
                    )
                    )}
                </div>
            </div>

        </div>
    )
}