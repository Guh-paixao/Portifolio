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
        <div className="flex flex-1 ml-48 2xl:ml-52 items-center">
            <div className="flex flex-1 opacity-0" ref={carouselRef} >
                <ProjectsCarousel />
            </div >
        </div>
    )
}