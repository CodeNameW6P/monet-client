import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockProducts } from "@/lib/fake-products";

export default function CartPage() {
  const cartItems = [
    {
      product: mockProducts[0],
      size: "10",
      quantity: 1,
    },
    {
      product: mockProducts[1],
      size: "9",
      quantity: 2,
    },
  ];

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        {/* Header */}
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Your shopping bag
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Shopping Cart
          </h1>
        </div>

        {/* Cart */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
          {/* Cart items */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <article
                key={`${item.product.id}-${item.size}`}
                className="flex gap-4 border-b pb-6 sm:gap-6"
              >
                {/* Product image */}
                <Link
                  href={`/product/${item.product.id}`}
                  className="relative size-28 shrink-0 overflow-hidden rounded-lg bg-muted sm:size-36"
                >
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </Link>

                {/* Product information */}
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link
                        href={`/product/${item.product.id}`}
                        className="font-semibold tracking-tight hover:text-foreground/70"
                      >
                        {item.product.name}
                      </Link>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.product.category}
                      </p>

                      <p className="mt-2 text-sm text-muted-foreground">
                        Size:{" "}
                        <span className="font-medium text-foreground">
                          {item.size}
                        </span>
                      </p>
                    </div>

                    <p className="shrink-0 font-semibold">
                      BDT{" "}
                      {(item.product.price * item.quantity).toLocaleString(
                        "en-BD",
                      )}
                    </p>
                  </div>

                  {/* Quantity + remove */}
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="flex h-9 items-center rounded-md border">
                      <button
                        type="button"
                        className="flex h-full w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Minus className="size-3.5" />
                      </button>

                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        className="flex h-full w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Plus className="size-3.5" />
                      </button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="mr-2 size-4" />
                      Remove
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Order summary */}
          <aside className="h-fit rounded-xl border p-6">
            <h2 className="text-lg font-semibold">Order Summary</h2>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>

                <span>BDT 30,000</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>

                <span>Free</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>

                  <span className="text-lg font-bold">BDT 30,000</span>
                </div>
              </div>
            </div>

            <Link href="/checkout">
              <Button className="mt-6 h-12 w-full">Proceed to Checkout</Button>
            </Link>

            <Link
              href="/products"
              className="mt-4 block text-center text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
