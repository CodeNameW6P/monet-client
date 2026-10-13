import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-white">
        <div className="relative min-h-[70vh]">
          <Image
            src="/images/11-11.png"
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

              <h1 className="text-5xl uppercase leading-[0.9] sm:text-6xl md:text-8xl font-kaushan-script">
                This wasn't
                <br />
                supposed to exist.
              </h1>

              <p className="mt-8 max-w-xl text-2xl leading-relaxed text-white font-lobster">
                At MONET, our goal isn't to mass-produce footwear for the
                masses. We create limited quantities of affordable, art-inspired
                sneakers for those who dare to express themselves differently.
                Every design is an opportunity to wear something original, stand
                apart, and carry a piece of art into everyday life. *Less mass
                production. More individuality.*
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

            <h2 className="text-4xl uppercase leading-tight sm:text-5xl font-kaushan-script">
              So we left.
              <br />
              No noise
              <br />
              No explanations.
            </h2>
          </div>

          <div className="space-y-5 text-foreground text-2xl font-lobster">
            <p>
              What followed wasn't a business plan. It was a quiet act of
              defiance.
            </p>

            <p>
              For those who never quite fell into formation, who questioned the
              lines drawn for them, and refused to make themselves smaller just
              to fit.
            </p>

            <p>
              MONET is for those who were never meant to blend into the
              background — those who find their place not by following the
              crowd, but by daring to be different.
            </p>
          </div>
        </div>
      </section>

      {/* Dhaka Section */}
      <section className="bg-muted px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
          {/* <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/fahad.jpg"
              alt="The streets of Dhaka"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div> */}

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Inspired by Dhaka
            </p>

            <h2 className="text-4xl uppercase leading-[0.95] sm:text-5xl md:text-6xl font-kaushan-script">
              This isn't for everyone
              <br />
              and we never wanted it to be.
            </h2>

            <p className="mt-8 max-w-xl leading-relaxed text-muted-foreground font-lobster text-2xl">
              MONET is more than a business — it's a passion, an act of
              arrogance, the audacity to create something different in a world
              that keeps producing more of the same. We choose limited runs over
              mass production, personal taste over passing trends, and meaning
              over margins. We're here to create things that feel real, rooted
              in our culture, and true to ourselves. Not for everyone. Just for
              those who get it.
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

            <h2 className="text-4xl uppercase leading-tight sm:text-5xl font-kaushan-script">
              It doesn't move quietly.
              <br />
              It's a perspective.
            </h2>

            <p className="mt-8 max-w-xl leading-relaxed text-muted-foreground font-lobster text-2xl">
              We came from a world where mornings began before sunrise, where
              every minute was accounted for, every step had a purpose, and
              standing in line was simply part of the routine. We learned
              discipline, followed the rhythm, and did what was expected. But
              somewhere between the early morning PT and the endless call to
              make fall-in, we began to question whether fitting in was ever the
              point. MONET was born from that quiet rebellion — a desire to
              break formation, think differently, and create something that was
              entirely our own.
            </p>
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
