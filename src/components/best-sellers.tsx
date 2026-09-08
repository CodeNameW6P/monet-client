import Link from "next/link";
import ProductCard, { Product } from "@/components/product-card";
import { mockProducts } from "@/lib/fake-products";

// export const bestSellerProducts: Product[] = [
//   {
//     id: 5,
//     name: "Street Runner",
//     category: "Lifestyle Sneakers",
//     price: 4500,
//     image: "/images/products/5-street-runner.avif",
//     badge: "bestseller",
//   },
//   {
//     id: 6,
//     name: "Urban Flex",
//     category: "Casual Sneakers",
//     price: 3900,
//     image: "/images/products/6-urban-flex.avif",
//     badge: "bestseller",
//   },
//   {
//     id: 7,
//     name: "Court Classic",
//     category: "Everyday Sneakers",
//     price: 5200,
//     image: "/images/products/7-court-classic.avif",
//   },
//   {
//     id: 8,
//     name: "Motion X",
//     category: "Sports Sneakers",
//     price: 5800,
//     image: "/images/products/8-motion-x.avif",
//     originalPrice: 6800,
//     badge: "sale",
//   },
// ];

const BestSellers: React.FC = () => {
  return (
    <>
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Heading */}
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Loved by everyone
              </p>

              <h2 className="text-3xl font-bold uppercase sm:text-4xl md:text-5xl">
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
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {mockProducts.map((product) => (
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
    </>
  );
};

export default BestSellers;
