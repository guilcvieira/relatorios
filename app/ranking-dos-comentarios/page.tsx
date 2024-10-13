'use client'

import { Button } from '@/components/ui/button'
import { useCSV } from '@/hooks/useCSV'
import { fetchRankingComentarios } from '@/services/rankings'
import { Channel, Comment } from '@/types'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { DateRange } from 'react-day-picker'
import { DataTable } from '../../components/data-table'
import { channels } from './channels'
import { columns } from './columns'
import Breadcrumb from '@/components/breadcrumb'
import ExportButton from '@/components/export-button'

const RankingComentarios: React.FC = () => {
    const [data, setData] = React.useState<Comment[]>([])
    const [exportData, setExportData] = React.useState<Comment[]>([])

    const [selectedChannels, setSelectedChannels] = React.useState<Channel[]>([])
    const [selectedDateRange, setSelectedDateRange] = React.useState<DateRange>()

    const [isLoading, setIsLoading] = React.useState<boolean>(true)

    const filters = {
        channels: selectedChannels,
        dateRange: selectedDateRange,
    }

    async function getData(data: Comment[]): Promise<Comment[]> {
        data.map((cur) => {
            cur.com_titulo = `${cur.com_codigo} - ${cur.com_titulo}`
        })

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

    React.useEffect(() => {
        //Seleciona todos os canais por padrão
        setSelectedChannels(channels)

        return () => {
            setSelectedChannels([])
        }
    }, [])

    React.useEffect(() => {
        fetchRankingComentarios()
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
                <Breadcrumb title="Ranking dos Comentários" />

                <ExportButton exportData={exportData} fileName='ranking-comentarios' />
            </div>

            <div className="w-full">
                <DataTable
                    filterBy='com_titulo'
                    filters={filters}
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