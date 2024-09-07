import React from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu'

import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type UnitiesSelectBoxProps = {
    unities: Array<string>
    selectedUnities: Array<string>
    setSelectedUnities: React.Dispatch<React.SetStateAction<string[]>>
}

const UnitiesSelectBox: React.FC<UnitiesSelectBoxProps> = ({ unities, selectedUnities, setSelectedUnities }) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button
                className='ring-0 focus-visible:ring-0 max-w-[400px] justify-start text-left font-normal'
                variant={
                    selectedUnities.length > 0 ? "default" : "outline"
                }>
                {
                    selectedUnities.length > 0

                        ? selectedUnities.slice(0, 3).join(", ") + (selectedUnities.length > 3 ? " ..." : "")
                        : "Unidades"
                }
                <ChevronDown className="h-4 w-4 ml-2 -mr-2" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 p-0">
            {unities.map((unity) => (
                <DropdownMenuCheckboxItem
                    key={unity}
                    checked={selectedUnities.includes(unity)}
                    className={cn(
                        'mb-1 hover:bg-primary/50 focus:bg-primary transition-colors rounded-none',
                        selectedUnities.includes(unity)
                            ? "bg-primary text-white hover:bg-primary"
                            : ""
                    )}
                    onCheckedChange={(checked) => {
                        if (checked) {
                            setSelectedUnities([...selectedUnities, unity])
                        } else {
                            setSelectedUnities(selectedUnities.filter((u) => u !== unity))
                        }
                    }}
                    onSelect={(e) => e.preventDefault()}
                >
                    {unity}
                </DropdownMenuCheckboxItem>
            ))}


        </DropdownMenuContent>
    </DropdownMenu>

)


export default UnitiesSelectBox