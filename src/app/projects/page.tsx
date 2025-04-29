'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import RepositoryList from "@/components/RepositoryList";


export default function Projects() {

    const carouselRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to(carouselRef.current, { opacity: 1, y: 10, duration: 0.5 })
        tl.to(textRef.current, { opacity: 1, y: 10, duration: 0.8 })

    }, [])

    return (
        <div className="flex flex-row max-xl:flex-col-reverse flex-1 xl:ml-48 2xl:ml-52 max-xl:items-start items-center max-xl:justify-center gap-14 max-xl:gap-20">
            <div className="flex flex-col gap-4" ref={textRef}>
                <p className="font-poppins text-black dark:text-white text-pretty text-justify w-11/12 xl:w-72 2xl:w-80 leading-loose">Pretendo explorar novas tendências e tecnologias para garantir que minhas soluções sejam não apenas atraentes, mas também funcionais e alinhadas com as necessidades do mercado.</p>
                <p className="font-poppins text-black dark:text-white text-pretty text-justify w-11/12 xl:w-72 2xl:w-80 leading-loose">Além disso, nos meus projetos futuros, vou focar em criar interfaces móveis e web usando o Figma. Pretendo desenvolver designs intuitivos e modernos, garantindo uma ótima experiência para o usuário. <span className="max-xl:hidden visible">Com um enfoque em design responsivo e prototipagem ágil, buscarei trazer inovação e eficiência para cada projeto.</span></p>
            </div>
            <div className="flex max-xl:justify-center opacity-0" ref={carouselRef} >
                <RepositoryList />
            </div >
        </div>
    )
}