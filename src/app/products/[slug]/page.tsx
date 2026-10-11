"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ProductCard, { type Product } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCart } from "@/components/comp-cart/cart-provider";

type ProductVariant = {
  id: string;
  size: number;
  stock: number;
  productId: string;
};

type ProductDetails = Product & {
  variants: ProductVariant[];
};

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const { addToCart, setIsCartOpen } = useCart();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        setError("The API URL is not configured.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        setNotFound(false);

        const [productResponse, productsResponse] = await Promise.all([
          fetch(`${apiUrl}/products/slug/${encodeURIComponent(slug)}`, {
            cache: "no-store",
            signal: controller.signal,
          }),
          fetch(`${apiUrl}/products`, {
            cache: "no-store",
            signal: controller.signal,
          }),
        ]);

        if (productResponse.status === 404) {
          setNotFound(true);
          setProduct(null);
          return;
        }

        if (!productResponse.ok) {
          throw new Error("Could not load this product.");
        }

        if (!productsResponse.ok) {
          throw new Error("Could not load related products.");
        }

        const productData: ProductDetails = await productResponse.json();

        const productsData: Product[] = await productsResponse.json();

        setProduct(productData);
        setRelatedProducts(
          productsData.filter((item) => item.id !== productData.id).slice(0, 4),
        );
        setCurrentImageIndex(0);
        setSelectedSize(null);
        setQuantity(1);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        console.error("Error fetching product:", err);
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong while loading the product.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, [slug]);

  if (loading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <p className="text-muted-foreground">Loading product...</p>
      </main>
    );
  }

  if (notFound || (!product && !error)) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <p className="mt-2 text-muted-foreground">
            This product may have been removed or the link may be incorrect.
          </p>
          <Button className="mt-6">
            <Link href="/products">Shop all products</Link>
          </Button>
        </div>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Unable to load product</h1>
          <p className="mt-2 text-muted-foreground">
            {error ?? "Please try again later."}
          </p>
        </div>
      </main>
    );
  }

  const images = product.images ?? [];
  const variants = [...(product.variants ?? [])].sort(
    (a, b) => a.size - b.size,
  );
  const selectedVariant = variants.find(
    (variant) => variant.size === selectedSize,
  );

  const availableStock = selectedVariant?.stock ?? 0;
  const canAddToCart =
    selectedVariant !== undefined &&
    availableStock > 0 &&
    quantity <= availableStock;

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Product images */}
          <div className="space-y-4">
            <div className="relative aspect-square max-w-5xl overflow-hidden rounded-xl bg-muted">
              <Image
                src={
                  "https://res.cloudinary.com/ekaqppbl/image/upload/v1791646497/size-guide.png"
                }
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* <div className="relative aspect-square max-w-5xl overflow-hidden rounded-xl bg-muted">
              {images.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setIsImageOpen(true)}
                  className="absolute inset-0 h-full w-full cursor-zoom-in"
                  aria-label="View larger product image"
                >
                  <Image
                    // src={images[currentImageIndex] || images[0]}
                    src={images[0]}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </button>
              ) : (
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  No product image available
                </div>
              )}
            </div> */}

            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    aria-label={`View image ${index + 1}`}
                    aria-pressed={currentImageIndex === index}
                    className={`relative aspect-square overflow-hidden rounded-lg border bg-muted transition-colors hover:border-foreground ${
                      currentImageIndex === index
                        ? "border-foreground"
                        : "border-border"
                    }`}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setIsImageOpen(true);
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 25vw, 12vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product information */}
          <div className="flex flex-col">
            {/* <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {product.category}
            </p> */}

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl font-kaushan-script">
              {product.name}
            </h1>

            {/* {product.badge && (
              <span className="mt-3 w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                {product.badge}
              </span>
            )} */}

            <div className="mt-5 flex items-center gap-3">
              <span className="text-xl font-semibold">
                BDT {Number(product.price).toLocaleString("en-BD")}
              </span>

              {/* {product.slashedPrice != null && (
                <span className="text-base text-muted-foreground line-through">
                  BDT {Number(product.slashedPrice).toLocaleString("en-BD")}
                </span>
              )} */}
            </div>

            <div className="my-8 h-px bg-border" />

            {/* <p className="whitespace-pre-line leading-relaxed text-muted-foreground">
              {product.description}
            </p> */}

            {/* Available sizes */}
            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold">Size</h2>
              </div>

              {variants.length > 0 ? (
                <div className="grid grid-cols-5 gap-2">
                  {variants.map((variant) => {
                    const outOfStock = variant.stock <= 0;
                    const isSelected = selectedSize === variant.size;

                    return (
                      <button
                        key={variant.id}
                        type="button"
                        disabled={outOfStock}
                        aria-pressed={isSelected}
                        title={
                          outOfStock
                            ? "Out of stock"
                            : `${variant.stock} available`
                        }
                        className={`flex h-11 items-center justify-center rounded-md border text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                          isSelected
                            ? "border-foreground bg-foreground text-background"
                            : "hover:border-foreground hover:bg-muted"
                        }`}
                        onClick={() => {
                          setSelectedSize(variant.size);
                          setQuantity(1);
                        }}
                      >
                        {variant.size}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No sizes have been added for this product yet.
                </p>
              )}

              {selectedVariant && (
                <p className="mt-2 text-xs text-muted-foreground">
                  {availableStock > 0
                    ? `${availableStock} available in size ${selectedSize}`
                    : "Out of stock"}
                </p>
              )}
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <h2 className="mb-3 text-sm font-semibold">Quantity</h2>

              <div className="flex h-11 w-32 items-center rounded-md border">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                  className="flex h-full w-10 items-center justify-center text-lg text-muted-foreground hover:text-foreground disabled:opacity-40"
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                >
                  -
                </button>

                <span className="flex-1 text-center text-sm font-medium">
                  {quantity}
                </span>

                <button
                  type="button"
                  aria-label="Increase quantity"
                  disabled={!selectedVariant || quantity >= availableStock}
                  className="flex h-full w-10 items-center justify-center text-lg text-muted-foreground hover:text-foreground disabled:opacity-40"
                  onClick={() =>
                    setQuantity((current) =>
                      Math.min(availableStock, current + 1),
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3">
              <Button
                className="h-12 w-full"
                disabled={!canAddToCart}
                onClick={() => {
                  if (!selectedVariant || !canAddToCart) return;

                  addToCart({
                    productId: product.id,
                    slug: product.slug,
                    name: product.name,
                    image: images[0] ?? "",
                    price: Number(product.price),
                    size: selectedVariant.size,
                    quantity,
                    stock: selectedVariant.stock,
                  });

                  setIsCartOpen(true);
                }}
              >
                {!selectedVariant
                  ? "Select a Size"
                  : availableStock <= 0
                    ? "Out of Stock"
                    : "Add to Cart"}
              </Button>

              {/* <Button variant="outline" className="h-12 w-full">
                <Heart className="mr-2 size-4" />
                Add to Wishlist
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
        <DialogContent className="max-h-[95vh] w-[95vw] max-w-6xl overflow-hidden border-none bg-background/95 p-2 sm:p-4">
          <DialogTitle className="sr-only">
            {product.name} — enlarged image
          </DialogTitle>

          <div className="relative flex max-h-[85vh] min-h-[200px] items-center justify-center">
            {images.length > 0 && (
              <Image
                src={images[currentImageIndex] || images[0]}
                alt={`${product.name} — enlarged view`}
                width={1600}
                height={1600}
                sizes="95vw"
                className="max-h-[85vh] w-auto max-w-full rounded-md object-contain"
              />
            )}
          </div>

          {images.length > 1 && (
            <div className="flex items-center justify-center gap-4 pb-1">
              <Button
                variant="outline"
                size="sm"
                disabled={currentImageIndex === 0}
                onClick={() => setCurrentImageIndex((index) => index - 1)}
              >
                Previous
              </Button>

              <span className="text-sm text-muted-foreground">
                {currentImageIndex + 1} / {images.length}
              </span>

              <Button
                variant="outline"
                size="sm"
                disabled={currentImageIndex === images.length - 1}
                onClick={() => setCurrentImageIndex((index) => index + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
