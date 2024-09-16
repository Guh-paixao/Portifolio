'use client'

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export default function NavMenu() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col max-xl:flex-row-reverse items-start max-xl:items-center max-xl:-rotate-90 max-xl:gap-8">
            <Button variant='link' className={`font-poppins font-medium ${pathname === '/' ? 'underline' : 'no-underline'}`}>
                <Link href='/'>INÍCIO</Link>
            </Button>
            <Button variant='link' className={`font-poppins font-medium ${pathname === '/projects' ? 'underline' : 'no-underline'}`}>
                <Link href='/projects'>PROJETOS</Link>
            </Button>
            <Button variant='link' className={`font-poppins font-medium ${pathname === '/skills' ? 'underline' : 'no-underline'}`}>
                <Link href='/skills'>HABILIDADES</Link>
            </Button>
            <Button variant='link' className={`font-poppins font-medium ${pathname === '/about' ? 'underline' : 'no-underline'}`}>
                <Link href='/about'>SOBRE</Link>
            </Button>
        </nav>
    )
}