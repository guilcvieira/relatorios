'use client'

import { useState } from 'react'
import Papa from 'papaparse'  // Opcional: para lidar com a conversão de CSV de forma mais fácil

export function useCSV(data: any, filename: string) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const exportCSV = async () => {
        setLoading(true)
        setError(null)
        try {

            // Converter os dados para CSV. Se `data` já for uma string CSV, pode pular essa parte.
            const csvData = Papa.unparse(data)

            // Cria um Blob a partir do CSV
            const blob = new Blob([csvData], { type: 'text/csvcharset=utf-8' })

            // Cria uma URL temporária para o arquivo CSV
            const url = window.URL.createObjectURL(blob)

            // Cria um link temporário para download
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', `${filename}.xlsx`)

            // Clica no link para iniciar o download
            document.body.appendChild(link)
            link.click()

            // Remove o link temporário
            document.body.removeChild(link)

            setLoading(false)

        } catch (err: any) {
            setError(err.message)
        }

    }

    return { exportCSV, loading, error }
}
