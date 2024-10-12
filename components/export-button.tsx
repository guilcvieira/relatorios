import { useCSV } from "@/hooks/useCSV"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface IExportButtonProps {
    exportData: any
    fileName: string
    fields?: string[]
    className?: string
}

const ExportButton: React.FC<IExportButtonProps> = ({ exportData, fileName, fields, className }) => {
    const { exportCSV, loading, error } = useCSV(exportData, fileName)

    return (
        <div>
            <Button
                variant='default'
                className={cn('bg-primary', className)}
                disabled={loading}
                onClick={exportCSV}
            >
                {loading ? 'Exportando...' : 'Exportar XLS'}
            </Button>
            {error && <p className='text-red-500 text-sm'>{error}</p>}
        </div>
    )
}

export default ExportButton