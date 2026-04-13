"use client";
export default function Header() {
    return(
        <>
            <div className="flex flex-col items-center justify-center gap-2 bg-[#F2F2F2] px-4 pb-3 sm:px-6">
                <div className="h-px w-full max-w-[1131px] bg-[#9C9C9C]"></div>
                <div className="flex w-full max-w-[1131px] flex-col gap-3 text-[15px] font-medium text-[#9C9C9C] sm:flex-row sm:gap-20">
                    <p className="cursor-pointer">Право на отказ </p>
                    <p className="cursor-pointer">Политика конфиденциальности </p>
                </div>
            </div>
        </>
    );
}
