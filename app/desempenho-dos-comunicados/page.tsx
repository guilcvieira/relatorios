'use client'

import Breadcrumb from '@/components/breadcrumb'
import { DataRangePicker } from '@/components/data-range-picker'
import { ChannelButton } from '@/components/ui/channel-button'
import { Channel } from '@/types'
import React from 'react'
import { DateRange } from 'react-day-picker'
import { channels } from '../ranking-dos-comentarios/channels'

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import UnitiesSelectBox from '@/components/unities-select-box'
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import { CopyIcon } from 'lucide-react'
import { NotFoundCard } from '@/components/not-found-card'

type Checked = DropdownMenuCheckboxItemProps["checked"]

const DesempenhoComunicadosPage: React.FC = () => {
    const [selectDateRange, setSelectDateRange] = React.useState<DateRange>()
    const [selectedChannels, setSelectedChannels] = React.useState<Channel[]>([])

    const [showPanel, setShowPanel] = React.useState<Checked>(false)

    const unities = [
        "Unidade 1",
        "Unidade 2",
        "Unidade 3",
        "Unidade 4",
        "Unidade 5",
        "Unidade 6",
        "Unidade 7",
        "Unidade 8",
        "Unidade 9",
        "Unidade 10",
    ]
    const [selectedUnities, setSelectedUnities] = React.useState<Array<string>>([])

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

    React.useEffect(() => {
        console.log(selectDateRange)
    }, [selectDateRange])


    return (
        <div className="w-full pb-12">
            <div className="w-full p-8 flex justify-between items-center border-b border-border/25">
                <Breadcrumb title="Relatórios" />

                <div className="flex items-center justify-end gap-4 bg-transparent">
                    <DataRangePicker
                        selectedDateRange={selectDateRange}
                        setSelectedDateRange={setSelectDateRange}
                    />

                    <UnitiesSelectBox
                        unities={unities}
                        selectedUnities={selectedUnities}
                        setSelectedUnities={setSelectedUnities}
                    />

                    <div className="flex flex-row items-center gap-1">
                        {channels.map((channel) => (
                            <ChannelButton
                                key={channel.slug}
                                isSelected={selectedChannels ? selectedChannels.find((ch) => ch.slug === channel.slug) ? true : false : false}
                                setIsSelected={() => toggleChannel(channel)}
                            >
                                {channel.slug}
                            </ChannelButton>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col gap-12 p-8">
                <div className="w-full border-b border-border/25 pb-2">
                    <h2 className="text-lg font-semibold text-muted-foreground flex gap-2 items-center">
                        Desempenho dos Comunicados <QuestionMarkCircledIcon className="w-5 h-5 text-muted-foreground" />
                    </h2>
                    <span className="text-xs text-muted-foreground/50">
                        06/08/2024 - 06/08/2024 00:00:00
                    </span>
                </div>

                {/* Bloco 1 */}
                <div className='flex flex-col gap-4 pb-12 border-b border-border'>
                    <div className="w-full lg:w-1/2 bg-primary text-white rounded px-4 py-2">
                        Total de Comunicados
                    </div>

                    <div className="grid lg:grid-cols-2 gap-4">

                        <div className='flex flex-col gap-4'>


                            <div className="w-full flex items-center justify-between">
                                <h3 className="text-muted-foreground font-semibold">
                                    Comunicados por canal
                                </h3>

                                <button className="rounded px-3 py-1 border border-border hover:bg-primary hover:text-white transition-colors ">
                                    <CopyIcon className="w-4 h-4" />
                                </button>
                            </div>

                            <NotFoundCard />
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="w-full flex items-center justify-between">
                                <h3 className="text-muted-foreground font-semibold">
                                    Pilares da Comunicação
                                </h3>

                                <button className="rounded px-3 py-1 border border-border hover:bg-primary hover:text-white transition-colors ">
                                    <CopyIcon className="w-4 h-4" />
                                </button>
                            </div>
                            <NotFoundCard />
                        </div>
                    </div>
                </div>

                {/* Bloco 2 */}
                <div className="grid lg:grid-cols-5 gap-4">
                    <div className="flex flex-col gap-4 col-span-2">
                        <h3 className="text-muted-foreground font-semibold">
                            Reações
                        </h3>
                        <NotFoundCard />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-muted-foreground font-semibold">
                            Cliques (Links)
                        </h3>
                        <NotFoundCard />
                    </div>

                    <div className="flex flex-col gap-4 col-span-2">
                        <h3 className="text-muted-foreground font-semibold">
                            Comentários
                        </h3>
                        <NotFoundCard />
                    </div>

                </div>

                {/* Bloco 3 */}
                <div className="flex flex-col gap-4">
                    <div className="w-full flex items-center justify-between">
                        <h3 className="text-muted-foreground font-semibold">
                            Análise detalhada por gênero
                        </h3>

                        <button className="rounded px-3 py-1 border border-border hover:bg-primary hover:text-white transition-colors ">
                            <CopyIcon className="w-4 h-4" />
                        </button>
                    </div>
                    <NotFoundCard />
                </div>

                {/* Bloco 4 */}
                <div className="flex flex-col gap-4">
                    <div className="w-full flex items-center justify-between">
                        <h3 className="text-muted-foreground font-semibold">
                            Editorias
                        </h3>

                        <button className="rounded px-3 py-1 border border-border hover:bg-primary hover:text-white transition-colors ">
                            <CopyIcon className="w-4 h-4" />
                        </button>
                    </div>
                    <NotFoundCard />
                </div>

                {/* Bloco 5 */}
                <div className="flex flex-col gap-4">
                    <div className="w-full flex items-center justify-between">
                        <h3 className="text-muted-foreground font-semibold">
                            Top 10 - Comunicados
                            <p className="text-xs font-normal text-muted-foreground/50">
                                Somente comunicados para mais de 50 pessoas
                            </p>
                        </h3>
                        <button className="rounded px-3 py-1 border border-border hover:bg-primary hover:text-white transition-colors ">
                            <CopyIcon className="w-4 h-4" />
                        </button>
                    </div>

                    <NotFoundCard />
                </div>

                {/* Bloco 6 */}
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="w-full flex items-center justify-between">
                            <h3 className="text-muted-foreground font-semibold">
                                Top 10 - Comunicados mais comentados
                            </h3>

                            <button className="rounded px-3 py-1 border border-border hover:bg-primary hover:text-white transition-colors ">
                                <CopyIcon className="w-4 h-4" />
                            </button>
                        </div>
                        <NotFoundCard />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="w-full flex items-center justify-between">
                            <h3 className="text-muted-foreground font-semibold">
                                Top 10 - Colaboradores
                            </h3>

                            <button className="rounded px-3 py-1 border border-border hover:bg-primary hover:text-white transition-colors ">
                                <CopyIcon className="w-4 h-4" />
                            </button>
                        </div>
                        <NotFoundCard />
                    </div>
                </div>

                {/* Bloco 7 */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-muted-foreground font-semibold">
                        Top 10 - Produção de Conteúdo
                    </h3>
                    <NotFoundCard />
                </div>

                {/* Bloco 8 */}
                <div className="flex flex-col gap-4">
                    <div className="w-full flex items-center justify-between">
                        <h3 className="text-muted-foreground font-semibold">
                            Top 10 - Unidades
                        </h3>

                        <button className="rounded px-3 py-1 border border-border hover:bg-primary hover:text-white transition-colors ">
                            <CopyIcon className="w-4 h-4" />
                        </button>
                    </div>
                    <NotFoundCard />
                </div>
            </div>

            <span className="px-8 text-xs text-muted-foreground/50">
                06/08/2024 - 06/08/2024 00:00:00
            </span>
        </div>
    )
}

export default DesempenhoComunicadosPage