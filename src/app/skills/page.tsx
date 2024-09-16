'use client'

import { useRef, useEffect } from "react";
import SkillsTags from "@/components/SkillsTag";
import gsap from "gsap";


export default function Skills() {
    const skillOneRef = useRef(null)
    const skillTwoRef = useRef(null)
    const skillThreeRef = useRef(null)
    const textOneRef = useRef(null)
    const textTwoRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to(skillOneRef.current, { opacity: 1, x: 10, duration: 0.2 })
        tl.to(skillTwoRef.current, { opacity: 1, y: 10, duration: 0.3 })
        tl.to(skillThreeRef.current, { opacity: 1, x: -10, duration: 0.4 })
        tl.to(textOneRef.current, { opacity: 1, y: 10, duration: 0.2 })
        tl.to(textTwoRef.current, { opacity: 1, y: 10, duration: 0.2 })
    }, [])

    return (
        <div className="flex flex-1 ml-48 2xl:ml-52 ">
            <div className="flex flex-col justify-center items-start gap-8">
                <div className="flex flex-row gap-20 items-center">
                    <div ref={skillOneRef} className="flex flex-col justify-start items-start gap-2 opacity-0">
                        <SkillsTags name="React" />
                        <SkillsTags name="React Native" />
                        <SkillsTags name="Tailwind CSS" />
                        <SkillsTags name="JavaScript" />
                        <SkillsTags name="TypeScript" />
                        <SkillsTags name="React Query" />
                        <SkillsTags name="..." />
                    </div>
                    <div ref={skillTwoRef} className="flex flex-col justify-start items-start gap-2 opacity-0">
                        <SkillsTags name="HTML" />
                        <SkillsTags name="Node.js" />
                        <SkillsTags name="SQL / Prisma" />
                        <SkillsTags name="Python" />
                        <SkillsTags name="Machine Learning" />
                        <SkillsTags name="C/C++/C#" />
                        <SkillsTags name="..." />
                    </div>
                    <div ref={skillThreeRef} className="flex flex-col justify-start items-start gap-2 opacity-0">
                        <SkillsTags name="UI/UX Design" />
                        <SkillsTags name="Figma" />
                        <SkillsTags name="Godot Engine" />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p ref={textOneRef} className="flex font-poppins leading-loose 2xl:w-8/12 text-justify text-pretty text-black dark:text-white opacity-0">Sou desenvolvedor fullstack e designer UX/UI, especializado em criar interfaces WEB e Mobile funcionais e atraentes. Com domínio em HTML, CSS, JavaScript, TypeScript, e frameworks como React, React Native, e Tailwind, foco em entregar experiências de usuário eficientes e visualmente impactantes. Minha abordagem é sempre centrada no usuário, combinando tecnologia de ponta com design intuitivo para criar soluções que realmente fazem a diferença.</p>
                </div>
            </div>
        </div>
    )
}