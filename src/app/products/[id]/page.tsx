"use client";
import { useState } from "react";
import Image from "next/image";
import { mockProducts } from "@/lib/fake-products";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import ProductCard from "@/components/product-card";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const product = mockProducts.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-lg font-semibold text-muted-foreground">
          Product not found.
        </p>
      </main>
    );
  }
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <p className="text-sm text-muted-foreground">Home / Shop / Product</p>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Product images */}
          <div>
            <div className="space-y-4">
              {/* Main image */}
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                <Image
                  src={product.image[currentImageIndex]}
                  alt={product.name}
                  fill
                  // priority
                  // sizes="(max-width: 1024px) 100vw, 50vw"
                  // width={314}
                  // height={314}
                  className="object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((thumbnail) => (
                  <button
                    key={thumbnail}
                    type="button"
                    className="relative aspect-square overflow-hidden rounded-lg border bg-muted transition-colors hover:border-foreground"
                    onClick={() => setCurrentImageIndex(thumbnail - 1)}
                  >
                    <Image
                      src={product.image[thumbnail - 1] || product.image[0]}
                      alt={`${product.name} view ${thumbnail}`}
                      fill
                      // sizes="(max-width: 640px) 25vw, 12vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product information */}
          <div className="flex flex-col">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {product.category}
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-2xl font-semibold">
                BDT {product.price.toLocaleString("en-BD")}
              </span>

              {product.originalPrice && (
                <span className="text-base text-muted-foreground line-through">
                  BDT {product.originalPrice.toLocaleString("en-BD")}
                </span>
              )}
            </div>

            <div className="my-8 h-px bg-border" />

            <p className="leading-relaxed text-muted-foreground">
              A comfortable and stylish everyday shoe designed for movement,
              comfort, and everyday wear. Built with a versatile design that
              works just as well for everyday outings as it does for active
              days.
            </p>

            {/* Size */}
            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold">Size</h2>

                <button
                  type="button"
                  className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                >
                  Size guide
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {["7", "8", "9", "10", "11"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className="flex h-11 items-center justify-center rounded-md border text-sm font-medium transition-colors hover:border-foreground hover:bg-muted"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <h2 className="mb-3 text-sm font-semibold">Quantity</h2>

              <div className="flex h-11 w-32 items-center rounded-md border">
                <button
                  type="button"
                  className="flex h-full w-10 items-center justify-center text-lg text-muted-foreground hover:text-foreground"
                >
                  −
                </button>

                <span className="flex-1 text-center text-sm font-medium">
                  1
                </span>

                <button
                  type="button"
                  className="flex h-full w-10 items-center justify-center text-lg text-muted-foreground hover:text-foreground"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3">
              <Button className="h-12 w-full">Add to Cart</Button>

              <Button variant="outline" className="h-12 w-full">
                <Heart className="mr-2 size-4" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
        {/* Product details */}
        <div className="mt-16 border-t pt-12 md:mt-20 md:pt-16">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Description */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold tracking-tight">
                Product Details
              </h2>

              <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Designed for everyday comfort and effortless style, this shoe
                  combines a versatile silhouette with a comfortable
                  construction. Whether you're heading out for the day or
                  keeping things casual, it's built to fit naturally into your
                  everyday wardrobe.
                </p>

                <p>
                  The clean design makes it easy to pair with a wide range of
                  outfits, while the cushioned construction provides comfort
                  throughout the day.
                </p>
              </div>

              {/* Features */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold">Key Features</h3>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Comfortable everyday construction",
                    "Lightweight design",
                    "Durable outsole",
                    "Versatile styling",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span className="size-1.5 shrink-0 rounded-full bg-foreground" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Shipping & returns */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Shipping & Returns
              </h2>

              <div className="mt-5 divide-y rounded-lg border">
                <div className="p-4">
                  <h3 className="text-sm font-medium">Free Shipping</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Free delivery on orders over BDT 5,000.
                  </p>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-medium">Easy Returns</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Returns accepted within 7 days of delivery.
                  </p>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-medium">Delivery</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Typical delivery takes 2 to 5 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Related products */}
        <div className="mt-20 border-t pt-12 md:mt-24 md:pt-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                You may also like
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Related Products
              </h2>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
            {mockProducts.slice(0, 4).map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
