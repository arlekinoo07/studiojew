"use client";

import { ChevronDown } from 'lucide-react';
import Image from 'next/image'
import Link from "next/link";


export default function Header() {
    return(
        <>
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white px-4 py-4 text-black sm:px-6 lg:px-16 xl:px-50">
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8.25">
                    <Link href="/">
                        <div className="flex ">
                            <p className="text-[24px] font-bold sm:text-[28px] lg:text-[33px]">studio<span className="font-normal">jew</span></p>
                            <div className="mt-2 h-1.25 w-1.25 rounded-full border border-black sm:mt-3"></div>
                        </div>
                    </Link>
                    <p className="cursor-pointer text-[18px] underline underline-offset-6 sm:text-[20px] lg:text-[22px]">Заказы</p>
                    <Link href="/profil">
                        <p className="cursor-pointer text-[18px] duration-300 hover:underline underline-offset-6 sm:text-[20px] lg:text-[22px]">Профиль</p>
                    </Link>
                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <Image src="/profilBlackHeader.png" alt="profil" priority width={33} height={33} className="h-7 w-7 cursor-pointer sm:h-[33px] sm:w-[33px]"></Image>
                    <ChevronDown/>
                </div>
            </div>
        </>
    );
}
