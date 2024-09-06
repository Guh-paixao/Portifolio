import Layout from "@/components/frame/defaultFrame"


export default function Home() {
  return (
    <Layout>
      <div className="flex flex-1 mx-48  items-center">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h4 className="font-poppins font-extralight text-slate-200 tracking-[.25em]">See You Space Cowboy...</h4>
            <h1 className="font-poppins text-4xl font-light text-white tracking-[.10em]">Eu sou/I’Am <br /><span className="font-bold text-5xl font-poppins tracking-[.20em]">Gustavo Paixão|</span></h1>
          </div>
          <div>
            <p className="font-poppins text-white text-pretty w-3/6 leading-loose">
              Sou um designer e programador front-end, formado em Engenharia da Computação pela UFPA. Minha especialidade é criar interfaces digitais que aliam estética e funcionalidade, sempre focado em proporcionar experiências intuitivas e eficazes. Resido no Brasil e aplico minha expertise técnica e criativa no desenvolvimento de soluções digitais de alta qualidade.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}