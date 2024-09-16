'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Image from "next/image";
import ArrowWhite from '@/assets/images/SVGs/arrow_white.svg';
import ArrowBlack from '@/assets/images/SVGs/arrow_black.svg';

export default function ContactIndicator() {
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseEnter = () => {
            if (contactRef.current) {
                gsap.to(contactRef.current, { x: 8, duration: 0.5 });
            }
        };

        const handleMouseLeave = () => {
            if (contactRef.current) {
                gsap.to(contactRef.current, { x: 0, duration: 0.5 });
            }
        };

        const element = contactRef.current;
        if (element) {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (element) {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return (
        <div ref={contactRef} className="flex h-40 self-center mr-4">
            <div className="dark:flex justify-center items-center dark:visible hidden">
                <span className="text-black dark:text-white font-poppins text-sm tracking-[5px] font-medium -rotate-90">CONTATO</span>
                <Image src={ArrowWhite} alt="Arrow" width={40} height={40} className="pointer-events-none -ml-8" />
            </div>

            <div className="flex justify-center items-center visible dark:hidden">
                <span className="text-black dark:text-white font-poppins text-sm tracking-[5px] font-medium -rotate-90">CONTATO</span>
                <Image src={ArrowBlack} alt="Arrow" width={40} height={40} className="pointer-events-none -ml-8" />
            </div>
        </div>
    );
}