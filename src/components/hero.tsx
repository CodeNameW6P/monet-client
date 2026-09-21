import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Countdown from "./countdown";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-foreground">
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/drljdua7o/video/upload/v1789992440/bgvid.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-5 bg-black/60" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center justify-center px-4 py-12 md:px-6 lg:py-16">
        <div className="flex w-full flex-col items-center text-center text-background">
          <Image
            src="/images/monet-logo-w-on-trans.png"
            alt="Monet Logo"
            width={400}
            height={50}
          />

          {/* Heading */}
          <h1 className="flex max-w-4xl flex-col items-center text-5xl font-bold uppercase sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Step Into
          </h1>
          <Image src="/monet.png" alt="মোনে" width={700} height={400} />
          <h1 className="font-bold uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Break the Crowd
          </h1>
          {/* Description */}
          <p className="text-background/70 text-base sm:text-lg md:text-2xl mt-8">
            This isn't for everyone - and we never wanted it to be.
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
