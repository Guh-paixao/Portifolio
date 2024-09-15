import Image from "next/image";

type ProjectSquareProps = {
    title: string;
    subTitle: string;
    image: any;
    link?: string;
    date: string;
}


export default function ProjectSquare({ title, subTitle, image, link, date }: ProjectSquareProps) {
    return (
        <div>
            <Image src={image} alt={title} />
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
            <p>{date}</p>
            <a href={link} target="_blank" rel="noreferrer">Ver Projeto</a>
        </div>
    )
}