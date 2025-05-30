import { ModeToggle } from "@/components/theme/toggleTheme";
import { ReactNode } from "react";
import Frame from "..";
import NavMenu from "@/components/navMenu";
import ContactIndicator from "../contactIndicator";
import LinksButton from "@/components/externalButtons/links";
import { appVersion } from "@/version";



export default function DefaultFrame({ children }: { children: ReactNode }) {

    return (
        <div className="flex flex-1 h-dvh flex-col overflow-auto">
            <div className="flex self-end mr-14 py-1">
                <span className="font-poppins pointer-events-none text-base max-xl:text-sm text-dark dark:text-white">「幸福は自分自身に依存する。」</span>
            </div>
            <div className="flex flex-row h-dvh overflow-auto flex-1 justify-center items-center">
                <ModeToggle />
                <Frame>
                    {children}
                    <div className="flex mr-24 items-center visible max-xl:hidden">
                        <NavMenu />
                    </div>
                    <div className="flex visible max-xl:hidden">
                        <ContactIndicator />
                    </div>
                </Frame>
                <LinksButton />
            </div>
            <div className="flex mx-9 py-2 justify-between items-center">
                <span className="font-poppins text-xs opacity-75 text-slate-800 dark:text-slate-400">© TODOS OS DIREITOS RESERVADOS <span className="text-slate-400">/ Inspired by Keita Yamata Portfólio</span></span>
                <span className="font-poppins text-xs mr-5 opacity-50 text-center text-slate-800 dark:text-slate-400">VERSION {appVersion}</span>
            </div>
        </div>
    )
}