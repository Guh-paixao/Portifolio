'use client';

import Link from 'next/link'
import Lottie from 'lottie-react';
import ErrorAnim from '@/assets/anim/404.json';
import { Button } from '@/components/ui/button';

export default function NotFound() {


    return (
        <div className='flex flex-col flex-1 xl:ml-48 2xl:ml-52 justify-center items-center gap-8'>
            <div className='flex h-48'>
                <Lottie
                    loop
                    autoplay
                    animationData={ErrorAnim}
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <div className='flex flex-col gap-4 justify-center items-center'>
                <h2 className='font-poppins font-light'>Parece que você se perdeu...</h2>
                <Button variant='default'>
                    <Link href="/" className='font-poppins font-semibold'>Voltar pro Início</Link>
                </Button>
            </div>
        </div>
    )
}