export default function Block4() {
  const marqueeItems = Array.from({ length: 6 }, () => "Присоединяйтесь к сообществу. Telegram @studiojew");

  return (
    <div className="relative flex h-[160px] items-center overflow-hidden bg-white text-black sm:h-[220px] lg:h-[260px]">
      <div className="marquee-track flex w-max items-center">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <p key={index} className="shrink-0 whitespace-nowrap pr-[24px] text-[16px] font-bold sm:pr-[32px] sm:text-[20px] lg:pr-[40px] lg:text-[24px]">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
