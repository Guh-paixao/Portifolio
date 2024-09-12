'use client'

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";


export default function IntroFrame() {
    const [date] = useState(new Date());
    const mainTextRef = useRef(null);
    const subTextRef = useRef(null);
    const dateRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(mainTextRef.current, { duration: 2, opacity: 1 })
            .to(subTextRef.current, { duration: 2.5, opacity: 1 }, "-=0.5")
            .to(dateRef.current, { duration: 1, opacity: 1, y: -30 }, "-=1.0")
            .to(mainTextRef.current, { duration: 2, opacity: 0, display: "none" }, "+=0.5")
            .to(subTextRef.current, { duration: 2.2, opacity: 0, display: "none" }, "-=0.5")
            .to(dateRef.current, { duration: 1, opacity: 0, y: 0, display: "none" }, "-=0.5")
    })

    return (
        <main className="flex flex-1 justify-center items-center" >
            <div className="flex flex-1 flex-col h-screen justify-between items-center mb-4">
                <div className="flex flex-1 gap-3 justify-center items-center">
                    <h1 ref={mainTextRef} className="font-poppins font-light text-2xl text-black dark:text-white opacity-0">Seja Bem-Vindo(a)</h1>
                    <h3 ref={subTextRef} className="font-poppins font-medium text-xl text-slate-600 dark:text-slate-400 opacity-0">ao meu Portfólio...</h3>
                </div>

                <div ref={dateRef} className="flex gap-2 opacity-0 justify-center items-center">
                    <span className="font-poppins font-light text-slate-600 dark:text-slate-400">{date.toLocaleDateString('pt-BR')}</span>
                    <span className="font-poppins font-light text-slate-600 dark:text-slate-400">{`${date.getHours()}:${date.getMinutes()}`}</span>
                </div>
            </div>
        </main>
    )
}