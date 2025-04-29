'use client'

import { useEffect, useRef } from "react";
import Image from "next/image";
import dev from '@/assets/images/PNGs/dev.jpg'
import xPhoto from '@/assets/images/SVGs/x_photo.svg'
import gsap from "gsap";
import LinksMobile from "@/components/externalButtons/linksMobile";
import { Skeleton } from "@/components/ui/skeleton";

export default function About() {

    const portraitRef = useRef(null)
    const textRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to(portraitRef.current, { opacity: 1, x: 10, duration: 0.5 })
        tl.to(linksRef.current, { opacity: 1, x: -10, duration: 0.7, })
        tl.to(textRef.current, { opacity: 1, x: -10, duration: 1, })
    }, [])

    return (
        <div className="flex flex-row max-xl:flex-col flex-1 xl:ml-48 2xl:ml-52 items-center gap-6">
            <div className="flex flex-row max-xl:flex-col items-start gap-10 2xl:gap-14">
                <div ref={portraitRef} className="flex flex-col opacity-0 bg-white max-xl:w=[195px] 2xl:w-[230px] max-xl:h-60 h-72 mt-2 border-t-4 items-center justify-center select-none p-4 pt-4 2xl:gap-4 gap-2 border-zinc-600 border-2 dark:border-0">
                    {dev ? <Image src={dev} alt="Developer" className="w-52 max-xl:w-40" />

                        :

                        <Skeleton className="w-52 max-xl:w-40 bg-slate-400 h-full" />
                    }
                    <div className="flex flex-row items-center justify-center gap-4 2xl:gap-8 xl:gap-10">
                        <a href="https://www.instagram.com/_gus.dev/" target="_blank" rel="noopener noreferrer">
                            <span className="flex font-rougeScript text-lg 2xl:pl-8 xl:pl-10 text-black -rotate-6 opacity-80">@_gus.dev</span>
                        </a>
                        <Image src={xPhoto} alt="X" className="opacity-80 max-xl:w-6 w-8 pointer-events-none" />
                    </div>
                </div>

                <div ref={linksRef} className="max-xl:flex hidden max-xl:visible opacity-0 self-start">
                    <LinksMobile />
                </div>

                <div ref={textRef} className="flex opacity-0 justify-center items-center">
                    <p className="font-poppins text-justify text-dark dark:text-white text-base 2xl:text-lg text-pretty w-11/12 xl:w-72 2xl:w-80 leading-loose">
                        Sou um desenvolvedor apaixonado por criar experiências únicas, tanto na web quanto no mundo dos jogos. Com uma formação em Engenharia da Computação, sempre fui movido pela curiosidade e pela vontade de transformar ideias em realidade. <br />
                        <span className="flex mt-4"> Nos últimos tempos, tenho me dedicado ao desenvolvimento de jogos, onde encontrei uma forma de unir minha paixão por programação com a criatividade do design. Meu sonho é publicar um jogo de sucesso na Steam, algo que reflita todo o esforço e a imaginação que coloco em cada projeto.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}