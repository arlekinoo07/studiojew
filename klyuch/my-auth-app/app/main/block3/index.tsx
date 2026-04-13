import Image from "next/image";

export default function Block3() {
    return(
        <>
            <div className="flex flex-col items-center justify-center gap-[24px] bg-white px-4 pb-10 pt-[72px] sm:gap-[40px] sm:px-6 lg:gap-[80px] lg:pt-[136px]">
                <div className="flex flex-col items-center justify-center gap-[24px] lg:flex-row lg:gap-[80px]">
                    <Image src="/photo1MainB3.png" alt="photo1" priority width={704} height={880} className="h-auto w-full max-w-[704px]"></Image>
                    <Image src="/photo2MainB3.png" alt="photo2" priority width={677} height={880} className="h-auto w-full max-w-[677px]"></Image>
                </div>
                <div className="flex flex-col items-center justify-center gap-[24px] lg:flex-row lg:gap-[80px]">
                    <Image src="/photo3MainB3.png" alt="photo3" priority width={701} height={880} className="h-auto w-full max-w-[701px]"></Image>
                    <Image src="/photo4MainB3.png" alt="photo4" priority width={677} height={880} className="h-auto w-full max-w-[677px]"></Image>
                </div>
            </div>
        </>
    );
}
