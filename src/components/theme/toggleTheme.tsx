"use client"

import * as React from "react"
import { SunMoon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

import XWhite from "@/assets/images/SVGs/X_White.svg";
import XBlack from "@/assets/images/SVGs/X_Black.svg";

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <div className="flex flex-col items-center">
            <div className="absolute top-8">
                <div className="dark:flex flex-col gap-2 select-none hidden dark:visible">
                    <Image src={XWhite} alt="Xs" width={16} height={16} className={`pointer-events-none`} />
                </div>

                <div className="flex flex-col gap-2 select-none visible dark:hidden">
                    <Image src={XBlack} alt="Xs" width={16} height={16} className={`pointer-events-none`} />
                </div>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="mx-0" variant="outline" size="icon">
                        <SunMoon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:text-white text-black transition-all" />
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
