"use client"

import { CheckIcon, ChevronsUpDown } from "lucide-react"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { ChainID } from "@/lib/chains/chain"
import { getIconByChainId } from "@/lib/chains/icon"
import { useCore } from "../provider"
import { cn } from "@/lib/utils"

const formatChainLabel = (key: string) => {
    return key
        .toLowerCase()
        .split('_')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
}

export default function ChainSelector() {
    const { selectedChain, setSelectedChain } = useCore()
    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    className="justify-between shadow-none border-none cursor-pointer"
                    role="combobox"
                    aria-expanded={open}
                >
                    <img src={getIconByChainId(selectedChain)} className="h-[1.2rem] w-[1.2rem]" />
                    <ChevronsUpDown />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="border-0 p-0">
                <Command className="**:data-[slot=command-input-wrapper]:h-11 bg-white">
                    <CommandInput placeholder="Search framework..." />
                    <CommandList className="p-1">
                        <CommandEmpty>Unsupported Chain</CommandEmpty>
                        <CommandGroup>
                            {Object.entries(ChainID).map(([key, value]) => (
                                <CommandItem
                                    className="cursor-pointer"
                                    key={value}
                                    value={value}
                                    onSelect={() => {
                                        setSelectedChain(value)
                                        setOpen(false)
                                    }}
                                >
                                    {formatChainLabel(key)}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto",
                                            value === selectedChain ? "opacity-100" : "opacity-0",
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
