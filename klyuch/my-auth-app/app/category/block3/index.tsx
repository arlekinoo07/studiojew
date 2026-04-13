

'use client'

import { useState } from 'react'
import { Star, ChevronLeft } from 'lucide-react'
import Image from 'next/image'

const reviews = [
  { id: 1, text: "Очень красивое кольцо!\nКачество топ",
     name: "Анна М.", 
     rating: 5, 
     img: "/reportCategory.png" },
  { id: 2, 
    text: "Доставка быстрая,\nвсё понравилось", 
    name: "Игорь С.", 
    rating: 4, 
    img: "/reportCategory.png" },
  { id: 3, 
    text: "Выглядит дороже,\nчем стоит", 
    name: "Мария Л.", 
    rating: 5, 
    img: "/reportCategory.png" },
  { id: 4, 
    text: "Размер подошёл идеально", 
    name: "Олег К.", 
    rating: 5, 
    img: "/reportCategory.png" },
  { id: 5, 
    text: "Буду заказывать\n ещё", 
    name: "Дмитрий В.", 
    rating: 5, 
    img: "/reportCategory.png" },
  { id: 6, 
    text: "Упаковка шикарная", 
    name: "Екатерина Н.", 
    rating: 5, 
    img: "/reportCategory.png" },
  { id: 7, 
    text: "Хороший подарок", 
    name: "Сергей П.", 
    rating: 4, 
    img: "/reportCategory.png" },
  { id: 8, 
    text: "Очень доволен покупкой", 
    name: "Алексей Р.", 
    rating: 5, 
    img: "/reportCategory.png" },
  { id: 9, 
    text: "Качество приятно удивило", 
    name: "Виктор Т.", 
    rating: 5, 
    img: "/reportCategory.png" },
  { id: 10, 
    text: "Супер сервис", 
    name: "Юлия Д.", 
    rating: 5, 
    img: "/reportCategory.png" },
]

export default function Block3() {
  const [page, setPage] = useState(0)

  const itemsPerPage = 5
  const totalPages = 2

  const next = () => {
    setPage((prev) => (prev + 1) % totalPages)
  }

  const prev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const cardWidth = 220
  const gap = 26
  const slideWidth = cardWidth + gap

  return (
    <div className='flex flex-col gap-[36px] bg-white px-4 py-[72px] text-black sm:px-6 lg:gap-[60px] lg:py-[120px]'>

      <div className='flex flex-col items-center gap-[10px]'>
        <p className='text-center text-[28px] sm:text-[36px] lg:text-[48px]'>ОТЗЫВЫ СООБЩЕСТВА</p>

        <div className='flex flex-wrap items-center justify-center gap-[8px] text-center'>
          {[...Array(5)].map((_, i) => (
            <Star key={i} className='fill-black size-[26px]' />
          ))}
          <div className='flex items-center gap-[4px]'>
            <p className='text-[16px]'>4,79</p>
            <Star className='fill-black size-[18px]' />
          </div>
          <p>(67 отзывов)</p>
        </div>
      </div>

      <div className='hidden items-center justify-center gap-[40px] lg:flex'>

        <ChevronLeft
          onClick={prev}
          className='size-[70px] cursor-pointer'
        />

        <div className='overflow-hidden w-[1200px]'>
          
          <div
            className='flex gap-[26px] transition-transform duration-500 ease-in-out'
            style={{
              transform: `translateX(-${page * itemsPerPage * slideWidth}px)`
            }}
          >
            {reviews.map((review) => (
              <div key={review.id} className='flex-shrink-0'>

                <Image
                  src={review.img}
                  alt="review"
                  width={216}
                  height={212}
                />

                <div className='bg-[#F9F9F9] w-[216px] py-[40px] flex flex-col gap-[16px]'>
                  <p className='whitespace-pre-line text-[17px] pl-[28px]'>
                    {review.text}
                  </p>

                  <div className='flex flex-col items-center gap-[24px]'>
                    <div className='flex gap-[5px]'>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className='fill-black size-[26px]' />
                      ))}
                    </div>

                    <p>{review.name}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        <ChevronLeft
          onClick={next}
          className='size-[70px] rotate-180 cursor-pointer'
        />

      </div>

      <div className='flex gap-4 overflow-x-auto pb-2 lg:hidden'>
        {reviews.map((review) => (
          <div key={review.id} className='min-w-[216px] flex-shrink-0'>
            <Image
              src={review.img}
              alt="review"
              width={216}
              height={212}
              className='w-full'
            />
            <div className='flex flex-col gap-[16px] bg-[#F9F9F9] py-[32px]'>
              <p className='whitespace-pre-line px-[20px] text-[16px]'>
                {review.text}
              </p>
              <div className='flex flex-col items-center gap-[16px]'>
                <div className='flex gap-[5px]'>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className='fill-black size-[22px]' />
                  ))}
                </div>
                <p>{review.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
