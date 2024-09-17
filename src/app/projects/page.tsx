'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ProjectsCarousel } from "@/components/carousel";


export default function Projects() {

    const carouselRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to(carouselRef.current, { opacity: 1, x: 10, duration: 0.5 })
    }, [])

    return (
        <div className="flex flex-row max-xl:flex-col-reverse flex-1 xl:ml-48 2xl:ml-52 max-xl:items-start items-center  gap-14 max-xl:gap-16">
            <div className="flex flex-col gap-4">
                <p className="font-poppins text-pretty text-justify w-6/6 xl:w-72 2xl:w-80">Sempre pretendo explorar novas tendências e tecnologias para garantir que minhas soluções sejam não apenas atraentes, mas também funcionais e alinhadas com as necessidades do mercado.</p>
                <p className="font-poppins text-pretty text-justify w-6/6 xl:w-72 2xl:w-80">Além disso, nos meus projetos futuros, vou focar em criar interfaces móveis e web usando o Figma. Pretendo desenvolver designs intuitivos e modernos, garantindo uma ótima experiência para o usuário. Com um enfoque em design responsivo e prototipagem ágil, buscarei trazer inovação e eficiência para cada projeto.</p>
            </div>
            <div className="flex max-xl:justify-center opacity-0" ref={carouselRef} >
                <ProjectsCarousel />
            </div >
        </div>
    )
}