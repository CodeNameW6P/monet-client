import Link from "next/link";
import { Mail, MapPin, Phone, ShoppingBag } from "lucide-react";

const shopLinks = [
  { label: "Men", href: "/categories/men" },
  { label: "Women", href: "/categories/women" },
  { label: "Sneakers", href: "/categories/sneakers" },
  { label: "Sports", href: "/categories/sports" },
  { label: "Sale", href: "/sale" },
];

const helpLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
  { label: "FAQ", href: "/faq" },
];

const accountLinks = [
  { label: "My Account", href: "/account" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Orders", href: "/account/orders" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        {/* Main footer */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tight">
              VOLT
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/60">
              Everyday footwear for everyone. Find your style, make your move,
              and keep going.
            </p>

            {/* Contact */}
            <div className="mt-8 space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-3">
                <Phone className="size-4" />
                <span>+880 1XXX-XXXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="size-4" />
                <span>hello@volt.example</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="size-4" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-background/50">
              Shop
            </h3>

            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-background/50">
              Help
            </h3>

            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-background/50">
              Account
            </h3>

            <ul className="space-y-3">
              {accountLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-2">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full border border-background/15 transition-colors hover:bg-background hover:text-foreground"
              >
                {/* <Facebook className="size-4" /> */}
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-background/15 transition-colors hover:bg-background hover:text-foreground"
              >
                {/* <Instagram className="size-4" /> */}
              </Link>

              <Link
                href="#"
                aria-label="Twitter"
                className="flex size-9 items-center justify-center rounded-full border border-background/15 transition-colors hover:bg-background hover:text-foreground"
              >
                {/* <Twitter className="size-4" /> */}
              </Link>

              <Link
                href="#"
                aria-label="Shop"
                className="flex size-9 items-center justify-center rounded-full border border-background/15 transition-colors hover:bg-background hover:text-foreground"
              >
                <ShoppingBag className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-background/10 pt-6 text-xs text-background/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VOLT. All rights reserved.</p>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-background"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-background"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
