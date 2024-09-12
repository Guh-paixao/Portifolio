'use client'

import { useRef, useEffect } from "react";
import gsap from "gsap";


export default function IntroFrame() {

    const mainTextRef = useRef(null);
    const subTextRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(mainTextRef.current, { duration: 3, opacity: 1 })
            .to(subTextRef.current, { duration: 3.2, opacity: 1 }, "-=1.5")
            .to(mainTextRef.current, { duration: 2, opacity: 0, display: "none" }, "+=1")
            .to(subTextRef.current, { duration: 2.2, opacity: 0, display: "none" }, "-=1.5")
    })

    return (
        <main className="flex flex-1 justify-center items-center">
            <div className="flex flex-1 gap-2 justify-center items-center">
                <h1 ref={mainTextRef} className="font-poppins font-light text-2xl text-black dark:text-white opacity-0">Seja Bem-Vindo</h1>
                <h3 ref={subTextRef} className="font-poppins font-medium text-xl text-slate-600 dark:text-slate-400 opacity-0">ao meu Portfolio...</h3>
            </div>
        </main>
    )
}