import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-foreground">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-12 md:px-6 lg:grid-cols-2 lg:py-16">
          {/* Content */}
          <div className="relative z-10 flex flex-col items-start text-background">
            <span className="mb-4 inline-flex items-center rounded-xs bg-accent px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent-foreground">
              New Season
            </span>

            <h1 className="max-w-2xl text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Move
              <br />
              Different
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-background/70 sm:text-lg">
              Everyday sneakers built for wherever life takes you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-accent font-semibold text-accent-foreground hover:bg-accent/80"
              >
                <Link href="/products" className="flex items-center gap-1">
                  Shop Now
                  <ArrowRight />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground"
              >
                <Link href="/categories/sneakers">Explore Sneakers</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-10 min-h-[350px] lg:mt-0 lg:min-h-[600px]">
            {/* Decorative accent */}
            <div className="absolute left-1/2 top-1/2 size-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl sm:size-[400px]" />

            <div className="relative z-10 flex h-full items-center justify-center">
              <Image
                src="/images/1-street-runner.avif"
                alt="Featured sneaker"
                width={800}
                height={600}
                priority
                className="h-auto w-full max-w-[700px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-accent" />
      </section>
    </>
  );
};

export default Hero;
