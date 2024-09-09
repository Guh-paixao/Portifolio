import Image from "next/image";
import ArrowWhite from '@/assets/images/SVGs/arrow_white.svg';
import ArrowBlack from '@/assets/images/SVGs/arrow_black.svg';


export default function ContactIndicator() {
    return (
        <div className="flex mr-8">
            <div className="dark:flex justify-center items-center dark:visible hidden">
                <span className="text-black dark:text-white font-poppins text-sm tracking-[5px] font-medium -rotate-90">CONTATO</span>
                <Image src={ArrowWhite} alt="Arrow" width={60} height={60} className={`pointer-events-none -ml-8`} />
            </div>

            <div className="flex justify-center items-center visible dark:hidden">
                <span className="text-black dark:text-white font-poppins text-sm tracking-[5px] font-medium -rotate-90">CONTATO</span>
                <Image src={ArrowBlack} alt="Arrow" width={60} height={60} className={`pointer-events-none -ml-8`} />
            </div>
        </div>
    )
}