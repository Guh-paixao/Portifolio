'use client';

import { useRef, ReactNode, useEffect } from "react";
import gsap from "gsap";
import DefaultFrame from "./defaultFrame";
import IntroFrame from "./introFrame";
import Starfield from "react-starfield";

export default function Layout(children: { children: ReactNode }) {

    const introRef = useRef(null);
    const defaultRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(defaultRef.current, { display: "none" })
            .to(introRef.current, { duration: 3.7, opacity: 1 }) // Mostrar IntroFrame
            .to(introRef.current, { duration: 2, opacity: 0, display: "none" }) // Esconder IntroFrame
            .to(defaultRef.current, { duration: 2, opacity: 1, display: 'flex' }); // Mostrar DefaultFrame
    }, []);

    return (
        <main className="relative bg-white dark:bg-black">
            <div className="flex flex-1 h-screen opacity-0" ref={introRef}>
                <IntroFrame />
            </div>

            <div className="flex flex-1 h-screen opacity-0" ref={defaultRef}>
                <Starfield
                    starCount={3000}
                    starColor={[255, 255, 255]}
                    speedFactor={0.05}
                    backgroundColor="black"
                />
                <DefaultFrame>
                    {children.children}
                </DefaultFrame>
            </div>
        </main>
    )
}