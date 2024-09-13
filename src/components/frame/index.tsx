import { ReactNode } from "react";

interface FrameProps {
    children: ReactNode;
}


export default function Frame({ children }: FrameProps) {
    return (
        <div className="flex flex-1 w-full border-[1px] border-black dark:border-white" style={{ height: 'calc(100vh - 4rem)' }}>
            {children}
        </div>
    )
}