'use client';

import { useRef, ReactNode, useEffect } from "react";
import gsap from "gsap";
import DefaultFrame from "./defaultFrame";
import IntroFrame from "./introFrame";
import Starfield from "react-starfield";
import { clarity } from 'react-microsoft-clarity';




export default function Layout(children: { children: ReactNode }) {

    const introRef = useRef(null);
    const defaultRef = useRef(null);

    useEffect(() => {
        clarity.init('o58wv8t8ya');
        const tl = gsap.timeline();
        tl.to(defaultRef.current, { display: "none" })
            .to(introRef.current, { duration: 3.7, opacity: 1 })
            .to(introRef.current, { duration: 2, opacity: 0, display: "none" })
            .to(defaultRef.current, { duration: 2, opacity: 1, display: 'flex' });
    }, []);

    return (
        <main className="relative h-dvh bg-white dark:bg-black">
            <div className="flex flex-1 h-dvh opacity-0" ref={introRef}>
                <IntroFrame />
            </div>

            <div className="flex flex-1 opacity-0 h-dvh" ref={defaultRef}>
                <DefaultFrame>
                    {children.children}
                    <Starfield
                        starCount={2600}
                        starColor={[255, 255, 255]}
                        speedFactor={0.02}
                        backgroundColor="black"
                    />
                </DefaultFrame>
            </div>
        </main>
    )
}