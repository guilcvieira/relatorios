'use client'

import Breadcrumb from '@/components/breadcrumb'
import ExportButton from '@/components/export-button'
import { fetchRankingComunicados } from '@/services/rankings'
import { IChannel, Comment } from '@/types'
import React, { useEffect } from 'react'
import { DateRange } from 'react-day-picker'
import { DataTable } from '../../components/data-table'
import { channels } from './channels'
import { columns } from './columns'

const RankingComentarios: React.FC = () => {
    const [data, setData] = React.useState<Comment[]>([])
    const [exportData, setExportData] = React.useState<Comment[]>([])

    const [selectedChannels, setSelectedChannels] = React.useState<IChannel[]>([])
    const [selectedDateRange, setSelectedDateRange] = React.useState<DateRange>()

    const [isLoading, setIsLoading] = React.useState<boolean>(true)

    const filters = {
        channels: selectedChannels,
        dateRange: selectedDateRange,
    }

    async function getData(data: Comment[]): Promise<Comment[]> {

        return data

    }

    async function getExportData(data: Comment[]): Promise<any[]> {

        const exportData = JSON.parse(JSON.stringify(data))

        exportData.map((item: any) => {
            return {
                'Cód': item.com_codigo,
                'Comunicado': item.com_titulo,
                'Comentário': item.cmt_titulo,
                'Data': item.cmt_data_comentario,
                'Colaborador': item.cmt_nome_colaborador
            }
        })

        return exportData
    }

    useEffect(() => {
        //Seleciona todos os canais por padrão\
        setSelectedChannels(
            channels.filter((channel) => channel.active === true)
        )

        return () => {
            setSelectedChannels([])
        }
    }, [])

    useEffect(() => {
        fetchRankingComunicados()
            .then((res: any) => res.json())
            .then(async data => {
                await getExportData(data).then(d => setExportData(d))
                getData(data).then(d => setData(d))
            })
            .finally(() => setIsLoading(false))

        return () => {
            setData([])
            getExportData([])
        }
    }, [])

    return (
        <div className='w-full container pb-12'>
            <div className="w-full py-8 flex justify-between items-center">
                <Breadcrumb title="Ranking dos Comunicados" />

                <ExportButton exportData={exportData} fileName='ranking-comunicados' />
            </div>

            <div className="w-full">
                <DataTable
                    filterBy='comunicado'
                    filters={filters}
                    type="full"
                    selectedChannels={selectedChannels}
                    setSelectedChannels={setSelectedChannels}
                    selectedDateRange={selectedDateRange}
                    setSelectedDateRange={setSelectedDateRange}
                    columns={columns}
                    data={data}
                    isLoading={isLoading}
                />

            </div>

        </div>
    )
}

export default RankingComentarios