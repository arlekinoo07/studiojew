"use client";

import { ChevronDown } from 'lucide-react';
import Image from 'next/image'
import Link from "next/link";


export default function Header() {
    return(
        <>
            <div className="flex w-full flex-wrap items-center justify-between gap-4 bg-white px-4 py-4 text-black sm:px-6 lg:h-[106px] lg:px-[80px] xl:px-[200px]">
                <div className="flex flex-wrap items-center justify-center gap-[18px] sm:gap-[24px] lg:gap-[33px]">
                    <Link href="/">
                        <div className="flex ">
                            <p className="text-[24px] font-bold sm:text-[28px] lg:text-[33px]">studio<span className="font-normal">jew</span></p>
                            <div className="mt-[8px] h-[5px] w-[5px] rounded-full border border-black sm:mt-[10px] lg:mt-[12px]"></div>
                        </div>
                    </Link>
                    {/* <Link href="/bag">
                        <p className="hover:underline text-[22px] cursor-pointer duration-300 underline-offset-6">Заказы</p>
                    </Link> */}
                    <p className="cursor-pointer text-[18px] underline underline-offset-6 sm:text-[20px] lg:text-[22px]">Профиль</p>
                </div>
                <div className='flex items-center justify-center gap-[8px]'>
                    <Image src="/profilBlackHeader.png" alt="profil" priority width={33} height={33} className="h-7 w-7 cursor-pointer sm:h-[33px] sm:w-[33px]"></Image>
                    <ChevronDown/>
                </div>
            </div>
        </>
    );
}
