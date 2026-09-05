import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function CheckoutPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
        {/* Header */}
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Complete your order
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Checkout
          </h1>
        </div>

        {/* Checkout layout */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
          {/* Checkout form */}
          <div className="space-y-10">
            {/* Contact information */}
            <div>
              <h2 className="text-lg font-semibold">Contact Information</h2>

              <div className="mt-5">
                <Label htmlFor="email">Email address</Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 h-11"
                />
              </div>

              <p className="mt-2 text-xs text-muted-foreground">
                We'll use this email to send you your order confirmation.
              </p>
            </div>

            <Separator />

            {/* Shipping information */}
            <div>
              <h2 className="text-lg font-semibold">Shipping Information</h2>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="first-name">First name</Label>

                  <Input
                    id="first-name"
                    placeholder="John"
                    className="mt-2 h-11"
                  />
                </div>

                <div>
                  <Label htmlFor="last-name">Last name</Label>

                  <Input
                    id="last-name"
                    placeholder="Doe"
                    className="mt-2 h-11"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="phone">Phone number</Label>

                  <Input
                    id="phone"
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    className="mt-2 h-11"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="address">Delivery address</Label>

                  <Textarea
                    id="address"
                    placeholder="House / apartment, street address"
                    className="mt-2 min-h-24 resize-none"
                  />
                </div>

                <div>
                  <Label htmlFor="city">City</Label>

                  <Input id="city" placeholder="Dhaka" className="mt-2 h-11" />
                </div>

                <div>
                  <Label htmlFor="postal-code">Postal code</Label>

                  <Input
                    id="postal-code"
                    placeholder="1200"
                    className="mt-2 h-11"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Payment method */}
            <div>
              <h2 className="text-lg font-semibold">Payment Method</h2>

              <RadioGroup defaultValue="cod" className="mt-5 space-y-3">
                <label
                  htmlFor="cod"
                  className="flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <RadioGroupItem value="cod" id="cod" />

                  <div>
                    <p className="text-sm font-medium">Cash on Delivery</p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Pay when your order arrives.
                    </p>
                  </div>
                </label>

                <label
                  htmlFor="online"
                  className="flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <RadioGroupItem value="online" id="online" />

                  <div>
                    <p className="text-sm font-medium">Online Payment</p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Pay securely using an online payment method.
                    </p>
                  </div>
                </label>
              </RadioGroup>
            </div>
          </div>

          {/* Order summary */}
          <aside className="h-fit rounded-xl border p-6 lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold">Your Order</h2>

            {/* Products */}
            <div className="mt-6 space-y-5">
              <div className="flex justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">Product Name</p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Size 10 × 1
                  </p>
                </div>

                <span className="text-sm">BDT 12,000</span>
              </div>

              <div className="flex justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">Another Product</p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Size 9 × 2
                  </p>
                </div>

                <span className="text-sm">BDT 18,000</span>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Totals */}
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>

                <span>BDT 30,000</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>

                <span>Free</span>
              </div>

              <Separator />

              <div className="flex justify-between">
                <span className="font-semibold">Total</span>

                <span className="text-lg font-bold">BDT 30,000</span>
              </div>
            </div>

            <Button className="mt-6 h-12 w-full">Place Order</Button>

            <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
              By placing your order, you agree to our terms and conditions.
            </p>

            <Link
              href="/cart"
              className="mt-4 block text-center text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Return to Cart
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
