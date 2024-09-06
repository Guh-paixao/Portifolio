
import Link from "next/link";
import { Button } from "../ui/button";


export default function LinksButton() {
    return (
        <div className="flex w-14 flex-col gap-32">
            <Button variant='link' className="-rotate-90" asChild>
                <Link className="font-poppins tracking-[4px] font-medium" href="https://github.com/Guh-paixao">GITHUB</Link>
            </Button>
            <Button variant='link' className="-rotate-90" asChild>
                <Link className="font-poppins tracking-[4px] font-medium" href="https://instagram.com/_gus_paixao">INSTAGRAM</Link>
            </Button>
            <Button variant='link' className="-rotate-90" asChild>
                <Link className="font-poppins tracking-[4px] font-medium" href="https://linkedin.com/in/gustavo-borges14">LINKEDIN</Link>
            </Button>
        </div>
    )
}