'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import dev from '@/assets/images/PNGs/dev.jpg'
import xPhoto from '@/assets/images/SVGs/x_photo.svg'
import gsap from "gsap";

export default function About() {

    const portraitRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to(portraitRef.current, { opacity: 1, x: 10, duration: 0.5 })
        tl.to(textRef.current, { opacity: 1, x: -10, duration: 1, })
    }, [])

    return (
        <div className="flex flex-1 ml-48 2xl:ml-52 items-center">
            <div className="flex flex-row items-start gap-10 2xl:gap-14">
                <div ref={portraitRef} className="flex flex-col opacity-0 bg-white 2xl:w-[230px] h-72 mt-2 border-t-4 items-center justify-center select-none p-4 pt-4 2xl:gap-4 gap-2 border-zinc-600 border-2 dark:border-0">
                    <Image src={dev} alt="Developer" width={210} />
                    <div className="flex flex-row items-center justify-center 2xl:gap-8 xl:gap-10">
                        <a href="https://instagram.com/_gus_paixao" target="_blank" rel="noopener noreferrer">
                            <span className="flex font-rougeScript text-lg 2xl:pl-8 xl:pl-10 text-black -rotate-6 opacity-80">@_gus_paixao</span>
                        </a>
                        <Image src={xPhoto} alt="X" width={30} className="opacity-80 pointer-events-none" />
                    </div>
                </div>
                <div ref={textRef} className="flex opacity-0">
                    <p className="font-poppins text-justify text-dark dark:text-white text-base 2xl:text-lg text-pretty w-80 xl:w-72 2xl:w-80 leading-loose">
                        Sou um desenvolvedor apaixonado por criar experiências únicas, tanto na web quanto no mundo dos jogos. Com uma formação em Engenharia da Computação, sempre fui movido pela curiosidade e pela vontade de transformar ideias em realidade. <br />
                        <span className="flex mt-4"> Nos últimos tempos, tenho me dedicado ao desenvolvimento de jogos, onde encontrei uma forma de unir minha paixão por programação com a criatividade do design. Meu sonho é publicar um jogo de sucesso na Steam, algo que reflita todo o esforço e a imaginação que coloco em cada projeto.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}