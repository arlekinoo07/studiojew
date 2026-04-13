import Image from "next/image";
import { MoveRight } from 'lucide-react';
import Link from "next/link";

export default function Block1() {
    return(
        <>
            <div className="relative flex flex-col items-center justify-center bg-black">
                <div className="grid w-full grid-cols-1 md:grid-cols-2">
                    <Image src="/back1MainB1.png" alt="back1" priority width={960} height={595} className="h-[360px] w-full object-cover md:h-auto"></Image>
                    <Image src="/back2MainB1.png" alt="back2" priority width={960} height={595} className="hidden h-full w-full object-cover md:block"></Image>
                </div>
                <div className="absolute inset-x-0 top-[150px] z-10 flex flex-col items-center justify-center gap-6 px-4 text-center sm:top-[190px] md:top-[220px]">
                    <div className="flex flex-col items-center justify-center gap-[9px]">
                        <p className="text-[16px] font-semibold text-white sm:text-[18px] lg:text-[20px]">СКИДКИ НА ПЕРВУЮ ПОКУПКУ</p>
                        <p className="text-[13px] text-white sm:text-[15px]">-30% НА ПЕРВОЕ ИЗДЕЛИЕ </p>
                    </div>
                    <Link href="/category">
                        <button className="flex h-[48px] w-[220px] items-center justify-center gap-[8px] border border-white bg-white text-[13px] text-black duration-300 hover:bg-transparent hover:text-white sm:h-[51px] sm:w-[264px] sm:text-[14px]">СДЕЛАЙ СВОЙ ВЫБОР<MoveRight/></button>
                    </Link>
                </div>
            </div>
        </>
    );
}
