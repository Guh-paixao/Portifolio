import { ReactNode } from "react";

interface FrameProps {
    children: ReactNode;
}


export default function Frame({ children }: FrameProps) {
    return (
        <div className="flex flex-1 h-screen w-full border-[1px] border-black dark:border-white">
            {children}
        </div>
    )
}