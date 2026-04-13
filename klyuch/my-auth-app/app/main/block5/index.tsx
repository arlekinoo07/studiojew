import Image from "next/image";

export default function Block5() {
    return(
        <>
            <div className="bg-white px-4 pb-[56px] sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-[52px]">
                    <Image src="/photo1MainB4.png" alt="photo1" priority width={408} height={408} className="h-auto w-full"></Image>
                    <Image src="/photo2MainB4.png" alt="photo2" priority width={408} height={408} className="h-auto w-full"></Image>
                    <Image src="/photo3MainB4.png" alt="photo3" priority width={408} height={408} className="h-auto w-full"></Image>
                    <Image src="/photo4MainB4.png" alt="photo4" priority width={408} height={408} className="h-auto w-full"></Image>
                    <Image src="/photo5MainB4.png" alt="photo5" priority width={408} height={408} className="h-auto w-full"></Image>
                    <Image src="/photo6MainB4.png" alt="photo6" priority width={408} height={408} className="h-auto w-full"></Image>
                    <Image src="/photo7MainB4.png" alt="photo7" priority width={408} height={408} className="h-auto w-full"></Image>
                    <Image src="/photo8MainB4.png" alt="photo8" priority width={408} height={408} className="h-auto w-full"></Image>
                </div>
            </div>
        </>
    );
}
