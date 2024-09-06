import Frame from "@/components/frame"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Home() {
  return (
    <main className="flex bg-black">
      <div className="flex flex-row flex-1 justify-center items-center">
        <Frame />
        <div className="flex w-14 flex-col gap-32">
          <Button variant='link' className="-rotate-90" asChild>
            <Link className="font-poppins tracking-[4px]" href="/login">GITHUB</Link>
          </Button>
          <Button variant='link' className="-rotate-90" asChild>
            <Link className="font-poppins tracking-[4px]" href="/login">INSTAGRAM</Link>
          </Button>
          <Button variant='link' className="-rotate-90" asChild>
            <Link className="font-poppins tracking-[4px]" href="/login">LINKEDIM</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}