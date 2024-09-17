import { Button } from "../ui/button";



export default function LinksMobile() {
    return (
        <div className="max-xl:flex hidden w-14 flex-col justify-start items-start gap-2 visible max-xl:visible">
            <Button variant='link' className="" title="GitHub" asChild>
                <a target="_blank" href="https://github.com/Guh-paixao" rel="noopener noreferrer" className="font-poppins text-xs tracking-[5px] font-medium">GITHUB</a>
            </Button>
            <Button variant='link' className="" title="Instagram" asChild>
                <a target="_blank" href="https://instagram.com/_gus_paixao" rel="noopener noreferrer" className="font-poppins text-xs tracking-[5px] font-medium">INSTAGRAM</a>
            </Button>
            <Button variant='link' className="" title="LinkedIn" asChild>
                <a target="_blank" href="https://linkedin.com/in/gustavo-borges14" rel="noopener noreferrer" className="font-poppins text-xs tracking-[5px] font-medium">LINKEDIN</a>
            </Button>
        </div>
    )
}