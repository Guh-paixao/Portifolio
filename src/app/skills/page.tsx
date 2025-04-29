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
        tl.to(skillTwoRef.current, { opacity: 1, x: 10, duration: 0.3 })
        tl.to(skillThreeRef.current, { opacity: 1, x: 10, duration: 0.4 })
        tl.to(textOneRef.current, { opacity: 1, y: 10, duration: 0.2 })
        tl.to(textTwoRef.current, { opacity: 1, y: 10, duration: 0.2 })
    }, [])

    return (
        <div className="flex flex-1 xl:ml-48 2xl:ml-52 ">
            <div className="flex flex-col justify-center items-start max-xl:gap-6 gap-8">
                <div className="flex flex-row max-xl:gap-16 gap-20 items-start">
                    <div ref={skillOneRef} className="flex flex-col justify-start items-start max-xl:gap-4 gap-2 opacity-0">
                        <SkillsTags name="React" />
                        <SkillsTags name="React Native" />
                        <SkillsTags name="Tailwind CSS" />
                        <SkillsTags name="JavaScript" />
                        <SkillsTags name="TypeScript" />
                        <SkillsTags name="React Query" />
                        <SkillsTags name="..." />
                    </div>
                    <div ref={skillTwoRef} className="flex flex-col justify-start items-start  max-xl:gap-4  gap-2 opacity-0">
                        <SkillsTags name="HTML" />
                        <SkillsTags name="Java/Spring Boot" />
                        <SkillsTags name="Node.js" />
                        <SkillsTags name="SQL / NoSQL" />
                        <SkillsTags name="Python" />
                        <SkillsTags name="Machine Learning" />
                        <SkillsTags name="..." />
                    </div>
                    <div ref={skillThreeRef} className="flex max-xl:hidden flex-col justify-start items-start gap-2 opacity-0">
                        <SkillsTags name="UI/UX Design" />
                        <SkillsTags name="Angular" />
                        <SkillsTags name="Figma" />
                        <SkillsTags name="Godot Engine" />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p ref={textOneRef} className="flex font-poppins leading-loose max-xl:w-11/12 xl:w-9/12 2xl:w-8/12 text-justify text-pretty text-black dark:text-white opacity-0">Sou desenvolvedor Full-Stack e designer UX/UI, apaixonado por criar interfaces web e mobile que unem funcionalidade e estética. Tenho experiência com React, React Native, Tailwind, Java (Spring Boot) e Node.js (Express), sempre com foco em proporcionar experiências de usuário eficientes e marcantes. <br /> <br /> Minha abordagem é orientada ao usuário, buscando aliar tecnologia moderna e design intuitivo para construir soluções que realmente agregam valor.</p>
                </div>
            </div>
        </div>
    )
}
