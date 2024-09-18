'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import ErrorAnim from '@/assets/anim/404.json';
import { Button } from '@/components/ui/button';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function NotFound() {
    return (
        <div className='flex flex-col flex-1 xl:ml-48 2xl:ml-52 justify-center items-center gap-8'>
            <div className='flex h-48'>
                <Lottie
                    loop
                    autoplay
                    animationData={ErrorAnim}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <h2 className='font-poppins font-light text-dark dark:text-white'>Parece que você se perdeu...</h2>
                <Button variant='default'>
                    <Link href="/" className='font-poppins font-semibold'>Voltar pro Início</Link>
                </Button>
            </div>
        </div>
    );
}