import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Countdown from "./countdown";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-foreground">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/vids/bgvid.mp4" type="video/mp4" />
      </video>

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center justify-center px-4 py-12 md:px-6 lg:py-16">
        <div className="flex w-full flex-col items-center text-center text-background">
          <Image
            className="mb-6"
            src="/images/monet-logo.png"
            alt="monet-logo"
            width={400}
            height={200}
          />

          {/* Badge */}
          <span className="mb-6 inline-flex items-center rounded-xs bg-accent px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent-foreground">
            Grand Opening
          </span>

          {/* Heading */}
          <h1 className="flex max-w-4xl flex-col items-center text-5xl font-bold uppercase leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Step Into
            <br />
            <Image src="/monet.png" alt="Step Into" width={800} height={400} />
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-relaxed text-background/70 sm:text-lg">
            A new way to move is almost here. Discover everyday sneakers
            designed to move differently.
          </p>

          {/* Countdown */}
          <div className="mt-10">
            <Countdown />
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Button
              size="lg"
              className="bg-accent font-semibold text-accent-foreground hover:bg-accent/80"
            >
              <Link href="/products" className="flex items-center gap-1">
                Discover MONET
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 z-20 h-1 w-full bg-accent" />
    </section>
  );
};

export default Hero;
