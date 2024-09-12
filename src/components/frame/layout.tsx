'use client';

import { useRef, ReactNode, useEffect } from "react";
import gsap from "gsap";
import DefaultFrame from "./defaultFrame";
import IntroFrame from "./introFrame";

export default function Layout(children: { children: ReactNode }) {

    const introRef = useRef(null);
    const defaultRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(defaultRef.current, { display: "none" })
            .to(introRef.current, { duration: 4, opacity: 1 }) // Mostrar IntroFrame
            .to(introRef.current, { duration: 2, opacity: 0, display: "none" }) // Esconder IntroFrame
            .to(defaultRef.current, { duration: 2, opacity: 1, display: 'flex' }); // Mostrar DefaultFrame
    }, []);

    return (
        <main className="relative bg-white dark:bg-black">
            <div className="flex flex-1 h-screen opacity-0" ref={introRef}>
                <IntroFrame />
            </div>

            <div className="flex flex-1 h-screen opacity-0" ref={defaultRef}>
                <DefaultFrame>
                    {children.children}
                </DefaultFrame>
            </div>
        </main>
    )
}