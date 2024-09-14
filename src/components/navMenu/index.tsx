import Link from "next/link";
import { Button } from "../ui/button";


export default function NavMenu() {
    return (
        <nav className="flex flex-col items-start">
            <Button variant='link' className="font-poppins font-medium">
                <Link href='/'>INÍCIO</Link>
            </Button>
            <Button variant='link' className="font-poppins font-medium">
                <Link href='/projects'>PROJETOS</Link>
            </Button>
            <Button variant='link' className="font-poppins font-medium">
                <Link href='/skills'>HABILIDADES</Link>
            </Button>
            <Button variant='link' className="font-poppins font-medium">
                <Link href='/about'>SOBRE</Link>
            </Button>
        </nav>
    )
}