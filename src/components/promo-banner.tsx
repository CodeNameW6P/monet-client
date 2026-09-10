import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard, { Product } from "@/components/product-card";

type PromoBannerProps = {
  product: Product;
};

const PromoBanner: React.FC<PromoBannerProps> = ({ product }) => {
  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative min-h-105 overflow-hidden rounded-2xl bg-foreground sm:min-h-120">
          {/* Background image */}
          <Image
            src="/images/promo-banner.jpeg"
            alt="Featured footwear collection"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/65 to-black/20" />

          {/* Content */}
          <div className="relative z-10 grid min-h-105 grid-cols-1 items-center gap-8 px-6 py-12 sm:min-h-120 sm:px-10 md:grid-cols-2 md:gap-12 md:px-14">
            {/* Left side */}
            <div className="max-w-xl text-white">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Limited Drop
              </p>

              <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                Colors of
                <br />
                Dhaka
              </h2>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                Fresh styles designed for everyday movement. Find your next
                favorite pair without breaking the bank.
              </p>

              <div className="mt-8">
                <Button
                  // asChild
                  size="lg"
                  className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
                >
                  <Link href={`/products/${product.id}`}>
                    Buy Now
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side */}
            <div className="w-full max-w-70 rounded-xl bg-white/50 p-3 shadow-2xl backdrop-blur-sm sm:max-w-80 md:ml-auto">
              <ProductCard product={product} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
