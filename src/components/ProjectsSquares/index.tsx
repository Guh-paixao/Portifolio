
type ProjectSquareProps = {
    title?: string;
    subTitle?: string;
    image?: string;
    link?: string;
    date?: string;
    placeholder?: boolean;
}


export default function ProjectSquare({ title, subTitle, image, link, date, placeholder }: ProjectSquareProps) {
    return (
        <div className={`flex flex-col h-40 w-72 max-xl:w-52 max-xl:h-32 ${placeholder ? 'bg-transparent' : 'bg-black'}`}>
            <div className={`flex flex-col flex-1 border-2 bg-cover ${placeholder ? 'border-white dark:border-slate-400' : 'border-white'}`} style={{ backgroundImage: `url(${image})` }}>
                <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-1 flex-col justify-center items-center">
                    <div className="flex flex-1 flex-col justify-center items-center select-none">
                        <h1 className={`font-poppins font-semibold max-xl:text-2xl text-3xl text-white ${!placeholder ? 'text-white' : 'text-slate-400'}`}>{title ? title : '...'}</h1>
                        <h2 className={`font-poppins font-light max-xl:text-base text-lg text-slate-200 ${!placeholder ? 'text-white' : 'text-slate-400'}`}>{subTitle ? subTitle : 'Em Breve'}</h2>
                    </div>
                    <div className="flex mb-2">
                        <span className="font-poppins font-normal  max-xl:text-sm text-base text-slate-300">{date}</span>
                    </div>
                </a>
            </div>
        </div>
    )
}