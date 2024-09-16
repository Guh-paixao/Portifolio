import { ReactNode } from "react";

interface FrameProps {
    children: ReactNode;
}


export default function Frame({ children }: FrameProps) {
    return (
        <>
            <div className="flex flex-1 visible max-xl:hidden flex-row w-full border-[1px] border-black dark:border-white overflow-hidden" style={{ height: 'calc(100vh - 4rem)' }}>
                {children}
            </div>
            <div className="max-xl:flex max-xl:visible flex-1 hidden p-6 flex-row max-xl:flex-col-reverse w-full border-[1px] border-black dark:border-white overflow-scroll" style={{ height: 'calc(100vh - 5rem)' }}>
                {children}
            </div>
        </>
    )
}