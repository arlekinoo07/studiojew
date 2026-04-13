import Image from "next/image"

export default function Block1() {
    return(
        <>
            <div className="relative -z-10 bg-white">
                <Image src="/backCategory.png" alt="back" priority width={1920} height={594} className="h-[300px] w-full object-cover sm:h-auto"></Image>
            </div>
        </>
    );
}
