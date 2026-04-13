import Image from "next/image"
import Link from "next/link";

export default function Footer() {
    return(
        <>
            <div className="bg-black h-[641px] mt-[37px] text-white flex flex-col justify-between py-[40px]">
                <div className="flex gap-2 items-center pl-32 pt-38">
                    <div>
                        <Image src="/logo.png" alt="photo4" priority width={42} height={39}></Image>
                    </div>
                    <p className="text-[32px] font-bold">Studio<span className="font-normal">jew</span></p>
                </div>
                <div className="flex gap-[280px] px-[128px] pt-[40px]">
                    <div className="flex flex-col gap-[20px]">
                        <p className="text-[24px] font-bold">СОЦИАЛЬНЫЕ</p>
                        <p className="text-[15px] font-medium whitespace-pre-line">{`Следите за studiojew в социальных сетях, чтобы получать\n последние новости вдохновлять закулисные образы и наряды`}</p>
                    </div>
                    <div className="flex gap-[200px]">
                        <div className="flex flex-col gap-[20px]">
                            <p className="text-[24px] font-bold">СПРАВКА</p>
                            <div className="flex flex-col gap-[12px] text-[15px] font-bold">
                                <p className="cursor-pointer">Центр поддержки </p>
                                <p className="cursor-pointer">Портал возвратов </p>
                                <p className="cursor-pointer">Доставка и возвраты</p>
                                <p className="cursor-pointer">Гарантия</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <p className="text-[24px] font-bold">О КОМПАНИИ</p>
                            <div className="flex flex-col gap-[12px] text-[15px] font-bold">
                                <Link href="/category">
                                    <p className="cursor-pointer">Отзывы</p>
                                </Link>
                                <p className="cursor-pointer">О компании</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[30px] text-[15px] font-bold items-center justify-center pt-[140px]">
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