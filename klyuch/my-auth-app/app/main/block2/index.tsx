import Image from "next/image";
import Link from "next/link";

export default function Block2() {
    return(
        <>
            <div className="bg-white px-4 pt-[32px] text-black sm:px-6 lg:px-[72px] xl:px-[188px]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[26px] text-black sm:text-[32px]">БЕСТСЕЛЛЕРЫ</p>
                    <Link href="/category">
                        <button className="h-[44px] w-full border-2 border-black text-[16px] text-black duration-300 hover:bg-black hover:text-white sm:w-[278px] sm:text-[24px]">ПОСМОТРЕТЬ ВСЁ</button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 gap-10 pb-10 pt-[32px] sm:pt-[46px] md:grid-cols-2 xl:grid-cols-3 xl:gap-[56px]">
                        <div className="flex flex-col gap-[23px]">
                            <Image src="/tovar1MainB2.png" alt="back1" priority width={458} height={652} className="h-auto w-full"></Image>
                            <div className="flex flex-col gap-[13px] pl-[12px] sm:pl-[24px]">
                                <div className="flex flex-col gap-[3px]">
                                    <p className="text-[20px] font-medium sm:text-[24px]">КРИВАЯ РЕКА </p>
                                    <p className="text-[16px] sm:text-[18px]">ПЛАТИНА 850 ПРОБЫ</p>
                                </div>
                                <p className="text-[16px] sm:text-[18px]">22990 руб.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[23px]">
                            <Image src="/tovar2MainB2.png" alt="back1" priority width={492} height={652} className="h-auto w-full"></Image>
                            <div className="flex flex-col gap-[13px] pl-[12px] sm:pl-[24px]">
                                <div className="flex flex-col gap-[3px]">
                                    <p className="text-[20px] font-medium sm:text-[24px]">ПАДЕНИЕ КОМЕТЫ </p>
                                    <p className="text-[16px] sm:text-[18px]">СЕРЕБРО 925 ПРОБЫ</p>
                                </div>
                                <p className="text-[16px] sm:text-[18px]">9490 руб.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[23px]">
                            <Image src="/tovar3MainB2.png" alt="back1" priority width={458} height={652} className="h-auto w-full"></Image>
                            <div className="flex flex-col gap-[13px] pl-[12px] sm:pl-[24px]">
                                <div className="flex flex-col gap-[3px]">
                                    <p className="text-[20px] font-medium sm:text-[24px]">СИМВОЛ ИСТИНЫ  </p>
                                    <p className="text-[16px] sm:text-[18px]">СЕРЕБРО 925 ПРОБЫ</p>
                                </div>
                                <p className="text-[16px] sm:text-[18px]">8700 руб.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[23px]">
                            <Image src="/tovar4MainB2.png" alt="back1" priority width={458} height={652} className="h-auto w-full"></Image>
                            <div className="flex flex-col gap-[13px] pl-[12px] sm:pl-[24px]">
                                <div className="flex flex-col gap-[3px]">
                                    <p className="text-[20px] font-medium sm:text-[24px]">ХРУПКОЕ СЕРДЦЕ </p>
                                    <p className="text-[16px] sm:text-[18px]">АЛМАЗЫ С СЕРЕБРОМ 925 ПРОБЫ</p>
                                </div>
                                <p className="text-[16px] sm:text-[18px]">46000 руб.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[23px]">
                            <Image src="/tovar5MainB2.png" alt="back1" priority width={492} height={652} className="h-auto w-full"></Image>
                            <div className="flex flex-col gap-[13px] pl-[12px] sm:pl-[24px]">
                                <div className="flex flex-col gap-[3px]">
                                    <p className="text-[20px] font-medium sm:text-[24px]">ШЕПОТ ИМПЕРАТИРИЦЫ </p>
                                    <p className="text-[16px] sm:text-[18px]">БЕЛОЕ ЗОЛОТО С РУБИНОМ </p>
                                </div>
                                <p className="text-[16px] sm:text-[18px]">78990 руб.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[23px]">
                            <Image src="/tovar6MainB2.png" alt="back1" priority width={458} height={652} className="h-auto w-full"></Image>
                            <div className="flex flex-col gap-[13px] pl-[12px] sm:pl-[24px]">
                                <div className="flex flex-col gap-[3px]">
                                    <p className="text-[20px] font-medium sm:text-[24px]">СЕВЕРНОЕ СИЯНИЕ  </p>
                                    <p className="text-[16px] sm:text-[18px]">БЛАГОРОДНЫЙ ОПАЛ С ЗОЛОТОМ</p>
                                </div>
                                <p className="text-[16px] sm:text-[18px]">529 100 руб.</p>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
}
