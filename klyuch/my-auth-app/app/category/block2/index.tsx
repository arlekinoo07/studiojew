"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

type CategoryKey = "all" | "platinum" | "white_gold" | "silver_988" | "silver_925" | "diamonds" | "opal" | "pearl";

export default function Block2() {
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState<CategoryKey>("all");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const products: Record<Exclude<CategoryKey, "all">, { img: string; name: string; desc: string; price: string }[]> = {
        platinum: [
            { img: "/tovar11Category.png", name: "КВАРДО", desc: "ПЛАТИНА 850 ПРОБЫ", price: "19890" },
            { img: "/tovar21Category.png", name: "КРИВАЯ РЕКА", desc: "ПЛАТИНА 850 ПРОБЫ", price: "22990" },
        ],
        white_gold: [
            { img: "/tovar12Category.png", name: "ИМПЕРИЯ", desc: "БЕЛОЕ ЗОЛОТО С ИЗУМРУДОМ", price: "57490" },
            { img: "/tovar31Category.png", name: "ШЕПОТ ИМПЕРАТРИЦЫ", desc: "БЕЛОЕ ЗОЛОТО С РУБИНОМ", price: "78990" },
        ],
        silver_988: [
            { img: "/tovar13Category.png", name: "РЕБРО", desc: "СЕРЕБРО 988 ПРОБЫ", price: "12990" },
        ],
        silver_925: [
            { img: "/tovar22Category.png", name: "ПАДЕНИЕ КОМЕТЫ", desc: "СЕРЕБРО 925 ПРОБЫ", price: "9490" },
            { img: "/tovar23Category.png", name: "СИМВОЛ ИСТИНЫ", desc: "СЕРЕБРО 925 ПРОБЫ", price: "8700" },
        ],
        diamonds: [
            { img: "/tovar24Category.png", name: "ХРУПКОЕ СЕРДЦЕ", desc: "АЛМАЗЫ С СЕРЕБРОМ 925", price: "46000" },
        ],
        opal: [
            { img: "/tovar32Category.png", name: "СЕВЕРНОЕ СИЯНИЕ", desc: "БЛАГОРОДНЫЙ ОПАЛ", price: "529100" },
        ],
        pearl: [
            { img: "/tovar14Category.png", name: "ВЕРСАЛЬ", desc: "ЖЕМЧУГ", price: "5990" },
        ],
    };

    const categories: { key: Exclude<CategoryKey, "all">; label: string }[] = [
        { key: "platinum", label: "Платина" },
        { key: "white_gold", label: "Белое золото" },
        { key: "silver_988", label: "Серебро 988" },
        { key: "silver_925", label: "Серебро 925" },
        { key: "diamonds", label: "Алмазы" },
        { key: "opal", label: "Благородный опал" },
        { key: "pearl", label: "Жемчуг" },
    ];

    const allProducts = Object.values(products).flat();
    const minPriceValue = minPrice ? Number(minPrice) : null;
    const maxPriceValue = maxPrice ? Number(maxPrice) : null;

    const displayedProducts = (category === "all" ? allProducts : products[category] || []).filter((item) => {
        const price = Number(item.price);

        if (minPriceValue !== null && price < minPriceValue) {
            return false;
        }

        if (maxPriceValue !== null && price > maxPriceValue) {
            return false;
        }

        return true;
    });

    return (
        <div className={`${isOpen ? "bg-white" : "bg-white"} text-black transition-all duration-300`}>
            
            <ChevronDown
                className={`ml-auto mr-[16px] size-[64px] cursor-pointer transition-transform sm:mr-[24px] sm:size-[84px] lg:mr-[40px] lg:size-[120px] ${isOpen ? "rotate-180" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            />

            {isOpen && (
                <div className="px-4 pb-[32px] pt-[16px] sm:px-6 sm:pb-[48px]">
                    <div className="flex flex-wrap justify-center gap-[12px] sm:gap-[16px]">
                        {categories.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => setCategory(item.key)}
                                className={`rounded border px-[14px] py-[8px] text-[14px] transition cursor-pointer sm:px-[16px] sm:text-[16px] ${
                                    category === item.key ? "bg-black text-white" : "hover:bg-white"
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => setCategory("all")}
                            className={`rounded border px-[14px] py-[8px] text-[14px] transition cursor-pointer sm:px-[16px] sm:text-[16px] ${
                                category === "all" ? "bg-black text-white" : "hover:bg-white"
                            }`}
                        >
                            Все
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-center gap-[12px] pt-[16px] sm:gap-[16px]">
                        <input
                            type="number"
                            inputMode="numeric"
                            min="0"
                            placeholder="Цена от"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            className="w-full max-w-[220px] rounded border px-[16px] py-[8px] outline-none"
                        />
                        <input
                            type="number"
                            inputMode="numeric"
                            min="0"
                            placeholder="Цена до"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="w-full max-w-[220px] rounded border px-[16px] py-[8px] outline-none"
                        />
                        <button
                            onClick={() => {
                                setMinPrice("");
                                setMaxPrice("");
                            }}
                            className={`rounded border px-[16px] py-[8px] transition cursor-pointer ${
                                !minPrice && !maxPrice ? "bg-black text-white" : "hover:bg-white"
                            }`}
                        >
                            Сбросить цену
                        </button>
                    </div>
                </div>
            )}

            <div className="flex flex-wrap justify-center gap-[20px] px-4 pb-[40px] sm:px-6">
                {displayedProducts.map((item, index) => (
                    <div key={index} className="w-full max-w-[463px]">
                        <Image
                            src={item.img}
                            alt="product"
                            width={463}
                            height={607}
                            priority
                            className="h-auto w-full"
                        />
                        <div className="flex flex-col gap-[16px] pl-[12px] pt-[24px] sm:pl-[32px]">
                            <div>
                                <p className="text-[20px] font-medium sm:text-[24px]">{item.name}</p>
                                <p className="text-[16px] font-light sm:text-[18px]">{item.desc}</p>
                            </div>
                            <p className="text-[16px] font-light sm:text-[18px]">{item.price} руб.</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
