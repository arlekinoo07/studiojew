"use client";

import Image from 'next/image'

export default function Header() {
    return(
        <>
            <div className="flex flex-col items-center bg-[#F2F2F2] px-4 py-10 text-black sm:px-6 sm:py-16 lg:py-20">
                <div className="flex w-full max-w-[1139px] flex-col gap-10">
                    <p className="text-[24px] font-semibold">Профиль</p>
                    <div className='flex flex-col gap-10'>
                        <div className="flex flex-col gap-5.5 rounded-[7px] bg-white px-6 py-8 sm:px-8 lg:px-10">
                            <p className="text-[#9C9C9C] text-[16px] font-medium">Название</p>
                            <div className="flex flex-col gap-1">
                                <p className="text-[#9C9C9C] text-[16px] font-medium">Электронная почта</p>
                                <p className="text-[14px]">artemkliuch@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 rounded-[7px] bg-white px-6 py-8 sm:px-8 lg:px-10'>
                            <div className='flex gap-5'>
                                <p className='text-[15px] font-semibold'>Адреса</p>
                                <p className='text-[15px] font-semibold text-[#9C9C9C] cursor-pointer hover:underline underline-offset-4'>+ Добавить</p>
                            </div>
                            <div className='flex gap-2 items-center h-13.25 bg-[#F2F2F2] rounded-[7px] border border-[#E2E2E2] px-2'>
                                <div>
                                    <Image src="/info.png" alt="info" priority width={15} height={15} className="cursor-pointer"></Image>
                                </div>
                                <p>Адрес не добавлен</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
