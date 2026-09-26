import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/components/product-card";

type PromoBannerProps = {
  product: Product;
  bannerImage: string;
};

const PromoBanner2: React.FC<PromoBannerProps> = ({ product, bannerImage }) => {
  return (
    <section className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative min-h-105 overflow-hidden rounded-md bg-foreground sm:min-h-120">
          <Image
            src={bannerImage}
            alt="Featured footwear collection"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/65 to-black/20" />
          <div className="relative z-10 grid min-h-105 grid-cols-1 items-center gap-8 px-6 py-12 sm:min-h-120 sm:px-10 md:grid-cols-2 md:gap-12 md:px-14">
            <div className="max-w-xl text-white">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {product.badge}
              </p>
              <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                {product.name}
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                {product.description}
              </p>
              <div className="mt-8">
                <Button
                  // asChild
                  size="lg"
                  className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
                >
                  <Link
                    // href={`/products/${product.id}`}
                    href="/campaign"
                    className="flex items-center gap-1"
                  >
                    Get Yours Now <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="w-full max-w-70 rounded-xl bg-white/50 p-3 shadow-2xl backdrop-blur-sm sm:max-w-80 md:ml-auto">
              <article className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <Link
                    className={"absolute inset-0"}
                    // href={`/products/${product.id}`}
                    href="/campaign"
                  >
                    <Image
                      src={product.image[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  {product.badge && (
                    <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="mt-2 space-y-1">
                  <Link
                    // href={`/products/${product.id}`}
                    href="/campaign"
                  >
                    <h3 className="text-lg font-semibold transition-colors group-hover:text-foreground/80">
                      {product.name}
                    </h3>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner2;
