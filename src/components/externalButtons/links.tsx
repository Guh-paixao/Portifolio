
import NavMenu from "../navMenu";
import { Button } from "../ui/button";


export default function LinksButton() {
    return (
        <>
            <div className="flex w-14 flex-col gap-32 visible max-xl:hidden">
                <Button variant='link' className="-rotate-90" title="GitHub" asChild>
                    <a target="_blank" href="https://github.com/Guh-paixao" rel="noopener noreferrer" className="font-poppins tracking-[5px] font-medium">GITHUB</a>
                </Button>
                <Button variant='link' className="-rotate-90" title="Instagram" asChild>
                    <a target="_blank" href="https://www.instagram.com/_gus.dev/" rel="noopener noreferrer" className="font-poppins tracking-[5px] font-medium">INSTAGRAM</a>
                </Button>
                <Button variant='link' className="-rotate-90" title="LinkedIn" asChild>
                    <a target="_blank" href="https://linkedin.com/in/gustavo-borges14" rel="noopener noreferrer" className="font-poppins tracking-[5px] font-medium">LINKEDIN</a>
                </Button>
            </div>

            <div className="max-xl:flex w-14 h-full justify-center items-center flex-col hidden">
                <NavMenu />
            </div>
        </>
    )
}