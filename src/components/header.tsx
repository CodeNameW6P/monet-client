"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart, Menu, Minus, Plus, Trash2, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useCart } from "@/components/comp-cart/cart-provider";

const Header: React.FC = () => {
  const {
    items,
    itemCount,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  // const [cartOpen, setCartOpen] = useState(false);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-md">
      <div className="relative mx-auto flex h-18 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" aria-label="MONET Homepage" className="shrink-0">
          <Image
            src="/images/monet-logo-color-min.png"
            alt="MONET"
            width={180}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="text-base font-medium transition-colors hover:text-foreground/60 lg:text-lg xl:text-xl font-lobster"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-base font-medium transition-colors hover:text-foreground/60 lg:text-lg xl:text-xl font-lobster"
          >
            Shop
          </Link>

          <Link
            href="/about"
            className="text-base font-medium transition-colors hover:text-foreground/60 lg:text-lg xl:text-xl font-lobster"
          >
            About Us
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-1">
          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xs md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href="/products">Shop</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link href="/about">About Us</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Cart */}
          <div className="relative">
            <Button
              // asChild
              variant="ghost"
              size="icon"
              className="rounded-xs hover:bg-foreground/10"
            >
              <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
                <DialogTrigger
                // asChild
                >
                  <button
                    type="button"
                    aria-label={`Open shopping bag, ${itemCount} items`}
                    className="relative inline-flex items-center justify-center"
                  >
                    <ShoppingCart className="size-5" />

                    {itemCount > 0 && (
                      <span className="absolute -right-2 -top-2 flex items-center justify-center rounded-xs bg-red-500 px-1 text-xs font-semibold text-white">
                        {itemCount > 99 ? "99+" : itemCount}
                      </span>
                    )}
                  </button>
                </DialogTrigger>

                {/* <DialogContent className="flex max-h-[90dvh] w-[calc(100%-2rem)] max-w-xl flex-col gap-0 overflow-hidden p-0"> */}
                <DialogContent className="flex max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl md:w-2xl flex-col gap-0 overflow-hidden p-0">
                  <DialogHeader className="border-b px-5 py-4 pr-12 text-left sm:px-6">
                    <DialogTitle className="text-xl font-bold uppercase tracking-tight">
                      Your Bag ({itemCount})
                    </DialogTitle>
                    <DialogDescription>
                      Review your items before checking out.
                    </DialogDescription>
                  </DialogHeader>

                  {items.length === 0 ? (
                    <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
                      <ShoppingCart className="mb-4 size-10 text-muted-foreground" />

                      <h3 className="text-lg font-semibold">
                        Your bag is empty
                      </h3>

                      <p className="mt-2 text-sm text-muted-foreground">
                        Find something you love in the Monet collection.
                      </p>

                      <Button
                        className="mt-6"
                        onClick={() => setIsCartOpen(false)}
                      >
                        Continue Shopping
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-5 py-5 sm:px-6">
                        {items.map((item) => (
                          <div
                            key={`${item.productId}-${item.size}`}
                            className="flex gap-4"
                          >
                            <Link
                              href={`/products/${item.slug}`}
                              onClick={() => setIsCartOpen(false)}
                              className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-md bg-muted sm:w-28"
                            >
                              {item.image ? (
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fill
                                  sizes="112px"
                                  className="object-cover"
                                />
                              ) : (
                                <div className="flex h-full items-center justify-center">
                                  <ShoppingCart className="size-6 text-muted-foreground" />
                                </div>
                              )}
                            </Link>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                  <Link
                                    href={`/products/${item.slug}`}
                                    onClick={() => setIsCartOpen(false)}
                                    className="font-semibold hover:underline"
                                  >
                                    {item.name}
                                  </Link>

                                  <p className="mt-1 text-sm text-muted-foreground">
                                    Size: {item.size}
                                  </p>
                                </div>

                                <p className="shrink-0 text-sm font-semibold">
                                  BDT{" "}
                                  {(item.price * item.quantity).toLocaleString(
                                    "en-BD",
                                  )}
                                </p>
                              </div>

                              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                                <div className="flex h-9 items-center rounded-md border">
                                  <button
                                    type="button"
                                    aria-label={`Decrease ${item.name} quantity`}
                                    disabled={item.quantity <= 1}
                                    className="flex h-full w-9 items-center justify-center disabled:opacity-40"
                                    onClick={() =>
                                      updateQuantity(
                                        item.productId,
                                        item.size,
                                        item.quantity - 1,
                                      )
                                    }
                                  >
                                    <Minus className="size-3.5" />
                                  </button>

                                  <span className="w-7 text-center text-sm">
                                    {item.quantity}
                                  </span>

                                  <button
                                    type="button"
                                    aria-label={`Increase ${item.name} quantity`}
                                    disabled={item.quantity >= item.stock}
                                    className="flex h-full w-9 items-center justify-center disabled:opacity-40"
                                    onClick={() =>
                                      updateQuantity(
                                        item.productId,
                                        item.size,
                                        item.quantity + 1,
                                      )
                                    }
                                  >
                                    <Plus className="size-3.5" />
                                  </button>
                                </div>

                                <button
                                  type="button"
                                  onClick={() =>
                                    removeFromCart(item.productId, item.size)
                                  }
                                  className="inline-flex items-center gap-1 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                                >
                                  <Trash2 className="size-3.5" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="shrink-0 space-y-4 border-t bg-background px-5 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">Subtotal</span>
                          <span className="text-lg font-bold">
                            BDT {subtotal.toLocaleString("en-BD")}
                          </span>
                        </div>

                        <p className="text-xs text-muted-foreground">
                          Shipping and any applicable fees are calculated at
                          checkout.
                        </p>

                        <Button
                          className="h-12 w-full"
                          onClick={() => {
                            setIsCartOpen(false);
                            window.location.href = "/checkout";
                          }}
                        >
                          Proceed to Checkout
                        </Button>

                        <DialogClose
                        // asChild
                        >
                          <Button variant="outline" className="h-12 w-full">
                            Continue Shopping
                          </Button>
                        </DialogClose>
                      </div>
                    </>
                  )}
                </DialogContent>
              </Dialog>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
