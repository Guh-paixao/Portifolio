"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

import Xs from "@/assets/images/SVGs/X.svg";

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <div className="flex flex-col items-center">
            <div className="absolute top-8">
                <div className="flex flex-col gap-2 select-none">
                    <Image src={Xs} alt="Xs" width={16} height={16} className="pointer-events-none" />
                    <Image src={Xs} alt="Xs" width={16} height={16} className="pointer-events-none" />
                    <Image src={Xs} alt="Xs" width={16} height={16} className="pointer-events-none" />
                    <Image src={Xs} alt="Xs" width={16} height={16} className="pointer-events-none" />
                </div>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="mx-0" variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Mudar Tema</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                        Claro
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Escuro
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                        Sistema
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
