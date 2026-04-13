import Image from "next/image"
import Link from "next/link";

export default function Header1() {
    return(
        <>
            <div className="absolute top-0 z-10 flex w-full flex-wrap items-center justify-between gap-4 border-b border-white px-4 py-4 text-white sm:px-6 lg:px-10">
                <Link href="/">
                    <div className="flex cursor-pointer">
                        <p className="text-[24px] text-white sm:text-[28px] lg:text-[32px]">studiojew</p>
                        <div className="mt-2 h-[5px] w-[5px] rounded-full border border-white sm:mt-3"></div>
                    </div>
                </Link>
                <div className="order-3 flex w-full flex-wrap justify-center gap-4 text-[13px] font-semibold sm:order-2 sm:w-auto sm:text-[16px] lg:order-none lg:gap-[23px] lg:text-[20px]">
                    <p className="cursor-pointer transition duration-300 hover:scale-110">НОВЫЕ ФУНКЦИИ</p>
                    <p className="cursor-pointer transition duration-300 hover:scale-110">БЕСТСЕЛЛЕРЫ</p>
                    <p className="cursor-pointer transition duration-300 hover:scale-110">ПРОДАЖА</p>
                    <Link href="/category">
                        <p className="cursor-pointer transition duration-300 hover:scale-110">КАТЕГОРИИ</p>
                    </Link>
                </div>
                <div className="flex items-center justify-center gap-3 sm:gap-[20px]">
                    <Link href="/profil">
                        <Image src="/profilHeader.png" alt="profil" priority width={33} height={33} className="h-7 w-7 cursor-pointer sm:h-[33px] sm:w-[33px]"></Image>
                    </Link>
                    <Image src="/searchHeader.png" alt="profil" priority width={32} height={32} className="h-7 w-7 cursor-pointer sm:h-[32px] sm:w-[32px]"></Image>
                    <Link href="/bag">
                        <Image src="/bagHeader.png" alt="profil" priority width={29} height={32} className="h-7 w-6 cursor-pointer sm:h-[32px] sm:w-[29px]"></Image>
                    </Link>
                </div>
            </div>
        </>
    );
}
