import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const OceanDriftPage: React.FC = () => {
  return (
    <main>
      <Button
        size="lg"
        className="fixed bottom-8 left-1/2 z-50 h-12 -translate-x-1/2 rounded-md bg-amber-600 px-6 font-bold shadow-2xl transition-transform hover:scale-105 hover:bg-amber-500 sm:bottom-6 sm:h-14 sm:px-8"
      >
        <Link href="/products/2">Buy Ocean Drift</Link>
      </Button>
      {/* FIXED BACKGROUND — stays behind entire campaign */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg-waves.png')",
        }}
      />

      {/* BLACK TINT — also stays fixed */}
      <div className="fixed inset-0 -z-10 bg-black/60" />

      {/* Campaign content */}
      <div>
        {/* HERO — fills entire screen */}
        <section className="relative h-[calc(100vh-72px)] text-white">
          <div className="relative h-full">
            <Image
              src="/images/products/od-cover.png"
              alt="Ocean Drift"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 py-16 md:px-10 md:py-20">
              <div className="max-w-4xl">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                  Monet / Ocean Drift
                </p>

                <h1 className="text-5xl font-bold uppercase leading-[0.88] tracking-tight sm:text-6xl md:text-8xl">
                  Made to
                  <br />
                  move different.
                </h1>

                <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                  Ocean Drift isn't made for blending in. Built for those who
                  move differently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Introduction */}
        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
            {/* Shoe Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/products/p1.png"
                alt="Ocean Drift sneaker"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.5em] text-accent">
                Meet Ocean Drift
              </p>

              <h2 className="text-4xl font-bold text-background uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                Not made
                <br />
                to disappear.
              </h2>

              <div className="mt-8 space-y-5 text-background">
                <p>
                  Ocean Drift was designed for the ones who don't want another
                  ordinary pair of sneakers.
                </p>

                <p>
                  From its distinctive silhouette to its carefully considered
                  details, every part of the shoe is built to make an
                  impression.
                </p>

                <p>
                  It's comfortable enough for everyday movement, but bold enough
                  to make sure you aren't wearing just another pair of shoes.
                </p>
              </div>

              {/* <div className="mt-10">
                <Button
                  //   asChild
                  size="lg"
                  className="mt-8 h-12 w-full bg-amber-600 hover:bg-amber-500"
                >
                  <Link href={`/products/2`}>Buy Now</Link>
                </Button>
              </div> */}
            </div>
          </div>
        </section>

        {/* Design / Attitude */}
        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="order-2 md:order-1">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                The Design
              </p>

              <h2 className="text-4xl font-bold text-background uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                For the bold.
                <br />
                Not the
                <br />
                background.
              </h2>

              <p className="mt-8 max-w-xl leading-relaxed text-background">
                Ocean Drift takes a familiar sneaker silhouette and pushes it
                somewhere louder. The proportions, layered details, and
                contrasting elements give it a presence that doesn't need
                explaining.
              </p>

              <p className="mt-5 max-w-xl leading-relaxed text-background">
                It's the kind of shoe that changes the way an outfit feels
                without asking for permission.
              </p>
            </div>

            <div className="relative order-1 aspect-square overflow-hidden rounded-2xl md:order-2">
              <Image
                src="/images/products/p6.png"
                alt="Ocean Drift side view"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Large Product Image */}
        {/* <section className="relative overflow-hidden bg-foreground text-white">
          <div className="relative min-h-[70vh]">
            <Image
              src="/images/products/ocean-drift/back.jpg"
              alt="Ocean Drift sneaker"
              fill
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6 py-20 text-center md:px-10">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                  Ocean Drift
                </p>

                <h2 className="mt-5 text-5xl font-bold uppercase leading-[0.88] tracking-tight sm:text-6xl md:text-8xl">
                  Wear the
                  <br />
                  difference.
                </h2>

                <p className="mx-auto mt-8 max-w-lg text-white/70">
                  You don't need another ordinary sneaker.
                </p>

                <div className="mt-10">
                  <Button
                    //   asChild
                    size="lg"
                    className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
                  >
                    <Link href="/products">
                      Buy Ocean Drift
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Final Product Information */}
        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center md:gap-20">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/products/p4.png"
                alt="Ocean Drift sneaker"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Ocean Drift
              </p>

              <h2 className="text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl text-background">
                Your next
                <br />
                favorite pair.
              </h2>

              <p className="mt-6 max-w-xl leading-relaxed text-background">
                Whether you're heading into the city, meeting friends, or simply
                going wherever the day takes you, Ocean Drift is built to go
                with you.
              </p>

              {/* <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  //   asChild
                  size="lg"
                  className="mt-8 h-12 w-full bg-amber-600 hover:bg-amber-500"
                >
                  <Link href={`/products/2`}>Buy Now</Link>
                </Button>
              </div> */}
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="px-6 py-20 md:px-10 md:py-28 text-background">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Built For Everyday
              </p>

              <h2 className="text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl">
                Looks aggressive.
                <br />
                Feels effortless.
              </h2>

              <p className="mt-6 max-w-2xl leading-relaxed">
                Ocean Drift brings together the visual character you want with
                the everyday comfort you need. Because a statement sneaker means
                nothing if you can't actually live in it.
              </p>
            </div>

            {/* Features */}
            <div className="mt-16 grid gap-10 border-t pt-10 md:grid-cols-3">
              <div>
                <span className="text-sm font-semibold text-muted-foreground">
                  01
                </span>

                <h3 className="mt-4 text-2xl font-bold uppercase">
                  Bold Silhouette
                </h3>

                <p className="mt-4 leading-relaxed">
                  A distinctive shape designed to stand out from the usual
                  everyday sneaker.
                </p>
              </div>

              <div>
                <span className="text-sm font-semibold text-muted-foreground">
                  02
                </span>

                <h3 className="mt-4 text-2xl font-bold uppercase">
                  Everyday Comfort
                </h3>

                <p className="mt-4 leading-relaxed">
                  Designed to keep up with your everyday movement without
                  sacrificing style.
                </p>
              </div>

              <div>
                <span className="text-sm font-semibold text-muted-foreground">
                  03
                </span>

                <h3 className="mt-4 text-2xl font-bold uppercase">
                  Made To Stand Out
                </h3>

                <p className="mt-4 leading-relaxed">
                  Strong visual details give Ocean Drift a presence wherever you
                  take it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OceanDriftPage;
