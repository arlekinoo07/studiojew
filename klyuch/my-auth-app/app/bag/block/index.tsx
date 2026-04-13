"use client";
export default function Header() {
    return(
        <>
            <div className="flex justify-center bg-[#F2F2F2] px-4 pb-20 pt-16 text-black sm:px-6 lg:pt-24">
                <div className="flex w-full max-w-[900px] flex-col gap-10">
                    <p className="font-semibold text-[24px]">Заказы</p>
                    <div className="flex flex-col items-center gap-4 rounded-[7px] bg-white px-6 py-12 text-center sm:px-12 lg:px-24">
                        <p className="font-semibold text-[20px]">Пока нет заказов</p>
                        <p className="text-[18px] text-[#9C9C9C]">Купить что-нибудь для начала</p>
                    </div>
                </div>
            </div>
        </>
    );
}
