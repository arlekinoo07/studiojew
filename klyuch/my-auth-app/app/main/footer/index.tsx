import Image from "next/image"
import Link from "next/link";

export default function Footer() {
    return(
        <>
            <div className="mt-[37px] flex flex-col gap-10 bg-black px-4 py-[40px] text-white sm:px-8 lg:min-h-[641px] lg:justify-between lg:px-[128px]">
                <div className="flex items-center gap-2 pt-4 sm:pt-10 lg:pt-20">
                    <div>
                        <Image src="/logo.png" alt="photo4" priority width={42} height={39}></Image>
                    </div>
                    <p className="text-[26px] font-bold sm:text-[32px]">Studio<span className="font-normal">jew</span></p>
                </div>
                <div className="flex flex-col gap-10 pt-[20px] lg:flex-row lg:justify-between">
                    <div className="flex max-w-[420px] flex-col gap-[20px]">
                        <p className="text-[22px] font-bold sm:text-[24px]">СОЦИАЛЬНЫЕ</p>
                        <p className="whitespace-pre-line text-[15px] font-medium">{`Следите за studiojew в социальных сетях, чтобы получать\n последние новости вдохновлять закулисные образы и наряды`}</p>
                    </div>
                    <div className="flex flex-col gap-10 sm:flex-row sm:gap-16 lg:gap-[120px]">
                        <div className="flex flex-col gap-[20px]">
                            <p className="text-[22px] font-bold sm:text-[24px]">СПРАВКА</p>
                            <div className="flex flex-col gap-[12px] text-[15px] font-bold">
                                <p className="cursor-pointer">Центр поддержки </p>
                                <p className="cursor-pointer">Портал возвратов </p>
                                <p className="cursor-pointer">Доставка и возвраты</p>
                                <p className="cursor-pointer">Гарантия</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <p className="text-[22px] font-bold sm:text-[24px]">О КОМПАНИИ</p>
                            <div className="flex flex-col gap-[12px] text-[15px] font-bold">
                                <Link href="/category">
                                    <p className="cursor-pointer">Отзывы</p>
                                </Link>
                                <p className="cursor-pointer">О компании</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4 pt-4 text-[15px] font-bold sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-[30px] lg:pt-[80px]">
                    <Link href="/">
                        <p className="cursor-pointer">StudioJew 2026</p>
                    </Link>
                    <p className="cursor-pointer">Полтика конфиденциальности</p>
                    <p className="cursor-pointer">Право на отказ</p>
                </div>
            </div>
        </>
    );
}
