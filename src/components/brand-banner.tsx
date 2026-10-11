import Image from "next/image";

export default function BrandBanner() {
  return (
    <section className="w-full bg-[#F9F7ED]">
      <div className="relative w-full aspect-auto h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src="/images/walk-banner.png"
          alt="Monet — Walk Your Way"
          fill
          priority={false}
          sizes="100vw"
          className="object-contain"
        />
      </div>
    </section>
  );
}
