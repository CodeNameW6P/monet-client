import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { mockProducts } from "@/lib/fake-products";

export function NewArrivals() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Fresh on the shelves
            </p>

            <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">
              New Arrivals
            </h2>
          </div>

          <Link
            href="/products?sort=newest"
            className="hidden text-sm font-semibold underline-offset-4 hover:underline sm:block"
          >
            View all
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/products?sort=newest"
            className="text-sm font-semibold underline-offset-4 hover:underline"
          >
            View all new arrivals →
          </Link>
        </div>
      </div>
    </section>
  );
}
