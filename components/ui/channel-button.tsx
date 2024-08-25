import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export type ChannelButtonProps = {
    isSelected: boolean
    setIsSelected: (value: boolean) => void
    children: React.ReactNode
}

export const ChannelButton: React.FC<ChannelButtonProps> = ({
    isSelected,
    setIsSelected,
    children
}) => {
    return (
        <Button
            variant="outline"
            className={cn(
                isSelected
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-primary',
                "hover:bg-primary/70 hover:text-primary-foreground"
            )}
            onClick={() => setIsSelected(!isSelected)}
        >
            {children}
        </Button>

    )
}