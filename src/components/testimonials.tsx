"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Arif",
    quote: "BUILT FOR THE LONG HAUL.",
    review:
      "Took these on a two-week trip and didn't pack any other pair. That's the kind of trust I have in them now. Held up through rain, uneven streets, and rushed airport sprints. Looked just as fresh on day fourteen as day one.",
    image: "/images/fahad-reviewer.jpg",
  },
  {
    name: "Miran",
    quote: "MY NEW EVERYDAY PAIR.",
    review:
      "Finally found a pair that actually works with everything. They're incredibly easy to style, comfortable to walk in, and have quickly become my go-to for everyday wear. The colour is versatile enough to work with almost everything in my wardrobe.",
    image: "/images/fahad-reviewer.jpg",
  },
  {
    name: "Rafi",
    quote: "THE COMFORT SURPRISED ME.",
    review:
      "I bought these mostly because I liked the design, but the comfort ended up being the biggest surprise. I've worn them for full days out without thinking twice about my feet. Easily one of my favourite pairs right now.",
    image: "/images/fahad-reviewer.jpg",
  },
  {
    name: "Nabil",
    quote: "THEY LOOK EVEN BETTER IRL.",
    review:
      "The pictures looked good, but the shoes genuinely look better in person. The details, materials, and overall shape feel much more premium than I expected. I've already had multiple people ask me where I got them.",
    image: "/images/fahad-reviewer.jpg",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentReview = reviews[currentIndex];

  const previousReview = () => {
    setCurrentIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1,
    );
  };

  const nextReview = () => {
    setCurrentIndex((current) =>
      current === reviews.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
          WHAT&apos;RE THEY SAYING?
        </h2>

        {/* Testimonial */}
        <div className="relative overflow-hidden border border-foreground/80">
          <div key={currentIndex} className="grid min-h-[520px] md:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[350px] md:min-h-[520px]">
              <Image
                src={currentReview.image}
                alt={`Review from ${currentReview.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Review */}
            <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">
              <div className="flex flex-1 flex-col items-center justify-center text-center">
                {/* Stars */}
                <div className="mb-8 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-6 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <h3 className="max-w-lg text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                  “{currentReview.quote}”
                </h3>

                {/* Review text */}
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/70 md:text-base">
                  {currentReview.review}
                </p>

                {/* Customer */}
                <p className="mt-10 text-sm font-semibold uppercase tracking-widest">
                  {currentReview.name}
                </p>
              </div>

              {/* Arrows */}
              <div className="mt-10 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={previousReview}
                  aria-label="Previous review"
                  className="flex size-11 items-center justify-center rounded-full bg-foreground/5 transition-colors hover:bg-foreground/10"
                >
                  <ChevronLeft className="size-5" />
                </button>

                <button
                  type="button"
                  onClick={nextReview}
                  aria-label="Next review"
                  className="flex size-11 items-center justify-center rounded-full bg-foreground/5 transition-colors hover:bg-foreground/10"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicator */}
        <div className="mt-5 flex justify-center gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-foreground"
                  : "w-1.5 bg-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
