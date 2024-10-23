import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu"

interface IDataTableColumnsSelectorProps {
    table: any
}

const DataTableColumnsSelector: React.FC<IDataTableColumnsSelectorProps> = ({ table }) => {
    return (
        <div className="items-center self-end">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="ml-auto">
                        Colunas
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {table
                        .getAllColumns()
                        .filter(
                            (column: any) => column.getCanHide()
                        )
                        .map((column: any) => {
                            return (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="capitalize"
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) =>
                                        column.toggleVisibility(!!value)
                                    }
                                >
                                    {column.id}
                                </DropdownMenuCheckboxItem>
                            )
                        })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default DataTableColumnsSelector