"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header: React.FC = () => {
  const cartItemCount = 0;

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
            className="text-base font-medium transition-colors hover:text-foreground/60 lg:text-lg xl:text-xl"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-base font-medium transition-colors hover:text-foreground/60 lg:text-lg xl:text-xl"
          >
            Shop
          </Link>

          <Link
            href="/about"
            className="text-base font-medium transition-colors hover:text-foreground/60 lg:text-lg xl:text-xl"
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
              <Link href="/cart" aria-label="Shopping cart">
                <ShoppingCart className="size-5" />
              </Link>
            </Button>

            {cartItemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex items-center justify-center rounded-xs bg-red-500 px-1 text-xs font-semibold text-white">
                {cartItemCount > 99 ? "99+" : cartItemCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
