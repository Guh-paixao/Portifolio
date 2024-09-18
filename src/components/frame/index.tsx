import { ReactNode, useRef, useEffect } from "react";

interface FrameProps {
    children: ReactNode;
}

export default function Frame({ children }: FrameProps) {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (divRef.current) {
            divRef.current.scrollTop = 0;
        }
    }, []);

    return (
        <>
            <div className="flex flex-1 visible max-xl:hidden flex-row w-full border-[1px] border-black dark:border-white overflow-hidden" style={{ height: 'calc(100vh - 4rem)' }}>
                {children}
            </div>
            <div ref={divRef} className="max-xl:flex h-full max-xl:visible flex-1 hidden p-6 flex-row max-xl:flex-col-reverse w-full border-[1px] border-black dark:border-white overflow-auto">
                {children}
            </div>
        </>
    )
}