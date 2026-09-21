import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPage: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-white">
        <div className="relative min-h-[70vh]">
          <Image
            src="/images/products/t1.jpeg"
            alt="Monet"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 py-16 md:px-10 md:py-20">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                About Monet
              </p>

              <h1 className="text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-8xl">
                This wasn't
                <br />
                supposed to exist.
              </h1>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-white sm:text-lg">
                We came from a world built on discipline, structure, and fitting
                into lines drawn by others. For a while, we played along. Then
                we realized — some people aren't made to fit in, no matter how
                hard they try.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.5em] text-black">
              Our Story
            </p>

            <h2 className="text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl">
              So we left.
              <br />
              No noise
              <br />
              No explanations.
            </h2>
          </div>

          <div className="space-y-5 text-muted-foreground">
            <p>What came after wasn't a plan. It was a response.</p>

            <p>
              For those who don't blend, don't adjust, don't shrink themselves
              to be understood.
            </p>

            <p>
              Monet is built for those who feel out of place in ordinary spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Dhaka Section */}
      <section className="bg-muted px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/fahad.jpg"
              alt="The streets of Dhaka"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Inspired by Dhaka
            </p>

            <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
              This isn't for everyone
              <br />
              and we never wanted it to be.
            </h2>

            <p className="mt-8 max-w-xl leading-relaxed text-muted-foreground">
              This isn't for everyone — and we never wanted it to be. If you're
              trying to fit in, you won't get it. If you've already stopped
              trying, you might.
            </p>

            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              That energy is part of Monet. Our designs take inspiration from
              the places we know and the streets we walk every day.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-black">
              What We Believe
            </p>

            <h2 className="text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl">
              It doesn't move quietly.
              <br />
              It's a perspective.
            </h2>
          </div>

          <div className="mt-16 grid gap-10 border-t pt-10 md:grid-cols-3">
            <div>
              <span className="text-sm font-semibold text-muted-foreground">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold uppercase">Accessible</h3>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                Good design shouldn&apos;t be exclusive. We create footwear that
                looks good and stays within reach.
              </p>
            </div>

            <div>
              <span className="text-sm font-semibold text-muted-foreground">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold uppercase">Everyday</h3>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                Built for real life — from your morning commute to wherever the
                day takes you.
              </p>
            </div>

            <div>
              <span className="text-sm font-semibold text-muted-foreground">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold uppercase">Local</h3>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our inspiration comes from home. The streets, culture, and
                energy around us are part of who we are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      {/* <section className="bg-foreground px-6 py-24 text-center text-white md:px-10 md:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Step into Monet
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-8xl">
          Your city.
          <br />
          Your story.
        </h2>

        <p className="mx-auto mt-8 max-w-lg text-white/60">
          Find a pair that moves with you.
        </p>

        <div className="mt-10">
          <Button
            // asChild
            size="lg"
            className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/products">
              Explore Collection
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section> */}
    </main>
  );
};

export default AboutPage;
