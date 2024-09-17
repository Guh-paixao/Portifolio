'use client'

import { useRef, useEffect } from "react"
import gsap from "gsap"
import LinksMobile from "../externalButtons/linksMobile"


export default function Presentation() {
    const textRef = useRef(null)
    const titlesRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to(textRef.current, { opacity: 1, y: 10, duration: 0.5 })
        tl.to(titlesRef.current, { opacity: 1, y: 10, duration: 1, })
        tl.to(linksRef.current, { opacity: 1, y: 10, duration: 1.2, })
    }, [])

    return (
        <div className="flex flex-col max-xl:gap-8 gap-16">
            <div className="flex flex-col gap-4 opacity-0" ref={titlesRef}>
                <h4 className="font-poppins max-xl:text-xs text-sm font-extralight text-slate-800 dark:text-slate-200 tracking-[.25em]">See You Space Cowboy...</h4>
                <h1 className="font-poppins max-xl:text-xl text-3xl font-light text-dark dark:text-white tracking-[.10em]">Eu sou/I’Am <br /><span className="relative max-xl:text-3xl truncate text-4xl w-[max-content] font-semibold font-poppins before:absolute before:inset-0 before:animate-typewriter before:bg-white dark:before:bg-black after:absolute after:inset-0 after:w-[0.120em] after:animate-caret after:bg-black dark:after:bg-white">Gustavo Paixão</span></h1>
            </div>

            <div ref={linksRef} className="max-xl:flex hidden opacity-0 max-xl:visible">
                <LinksMobile />
            </div>

            <div className="flex opacity-0" ref={textRef}>
                <p className="font-poppins text-dark dark:text-white text-pretty w-3/6 max-xl:w-9/12 leading-loose max-xl:text-justify">
                    Sou um designer e programador front-end, formado em Engenharia da Computação pela UFPA. Minha especialidade é criar interfaces digitais que aliam estética e funcionalidade, sempre focado em proporcionar experiências intuitivas e eficazes. Resido no Brasil e aplico minha expertise técnica e criativa no desenvolvimento de soluções digitais de alta qualidade.
                </p>
            </div>
        </div>
    )
}