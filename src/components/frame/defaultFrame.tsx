import { ReactNode } from "react"
import LinksButton from "@/components/externalButtons/links"
import Frame from "@/components/frame"
import { ModeToggle } from "@/components/theme/toggleTheme"

export default function Layout(children: { children: ReactNode }) {
    return (
        <main className="flex bg-white dark:bg-black">
            <div className="flex flex-1 flex-col">
                <div className="flex self-end mr-14 py-1">
                    <span className="font-poppins pointer-events-none text-dark dark:text-white">「幸福は自分自身に依存する。」</span>
                </div>
                <div className="flex flex-row flex-1 justify-center items-center">
                    <ModeToggle />
                    <Frame>
                        {children.children}
                    </Frame>
                    <LinksButton />
                </div>
                <div className="flex mx-9 py-2 justify-between items-center">
                    <span className="font-poppins text-xs opacity-75 text-slate-800 dark:text-slate-400">© TODOS OS DIREITOS RESERVADOS <span className="text-slate-400">/ Inspired by Keita Yamata</span></span>
                    <span className="font-poppins text-xs mr-5 opacity-75">VERSION 1.0</span>
                </div>
            </div>
        </main>
    )
}