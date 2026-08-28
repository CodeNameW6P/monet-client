import Link from "next/link";

import { Product, ProductCard } from "@/components/product-card";

export const bestSellerProducts: Product[] = [
  {
    id: 5,
    name: "Street Runner",
    category: "Lifestyle Sneakers",
    price: 4500,
    image: "/images/products/street-runner.jpg",
    badge: "bestseller",
  },
  {
    id: 6,
    name: "Urban Flex",
    category: "Casual Sneakers",
    price: 3900,
    image: "/images/products/urban-flex.jpg",
    badge: "bestseller",
  },
  {
    id: 7,
    name: "Court Classic",
    category: "Everyday Sneakers",
    price: 5200,
    image: "/images/products/court-classic.jpg",
  },
  {
    id: 8,
    name: "Motion X",
    category: "Sports Sneakers",
    price: 5800,
    image: "/images/products/motion-x.jpg",
    originalPrice: 6800,
    badge: "sale",
  },
];

export function BestSellers() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Loved by everyone
            </p>

            <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">
              Best Sellers
            </h2>
          </div>

          <Link
            href="/products?sort=popular"
            className="hidden text-sm font-semibold underline-offset-4 hover:underline sm:block"
          >
            View all
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
          {bestSellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/products?sort=popular"
            className="text-sm font-semibold underline-offset-4 hover:underline"
          >
            View all best sellers →
          </Link>
        </div>
      </div>
    </section>
  );
}
