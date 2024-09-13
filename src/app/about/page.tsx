import Image from "next/image";
import dev from '@/assets/images/PNGs/dev.png'
import xPhoto from '@/assets/images/SVGs/x_photo.svg'

export default function About() {
    return (
        <div className="flex flex-1 ml-48 items-center gap-8">
            <div className="flex flex-col bg-white w-[28%] h-80 border-t-4 items-center justify-center p-4 pt-4 gap-2 border-zinc-600 border-2 dark:border-0">
                <Image src={dev} alt="Developer" width={300} />
                <div className="flex flex-row items-center justify-center gap-10">
                    <span className="flex font-rougeScript pl-10 text-black -rotate-6 opacity-80">@_gus_paixao</span>
                    <Image src={xPhoto} alt="X" width={30} className="opacity-80" />
                </div>
            </div>
            <div className="flex">
                <p className="font-poppins text-justify text-pretty w-72 leading-loose">
                    Sou um desenvolvedor apaixonado por criar experiências únicas, tanto na web quanto no mundo dos jogos. Com uma formação em Engenharia da Computação, sempre fui movido pela curiosidade e pela vontade de transformar ideias em realidade. Nos últimos tempos, tenho me dedicado ao desenvolvimento de jogos, onde encontrei uma forma de unir minha paixão por programação com a criatividade do design. Meu sonho é publicar um jogo de sucesso na Steam, algo que reflita todo o esforço e a imaginação que coloco em cada projeto.
                </p>
            </div>
        </div>
    )
}