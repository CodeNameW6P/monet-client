import Link from "next/link";
import { Button } from "./ui/button";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import HeaderMobile from "./header-mobile";

const navigation = [
  { label: "New Arrivals", href: "/categories/new-arrivals" },
  { label: "Best Sellers", href: "/categories/best-sellers" },
  { label: "Men", href: "/categories/men" },
  { label: "Women", href: "/categories/women" },
];

const Header: React.FC = () => {
  return (
    <>
      <header className="sticky top-0 z-50 shadow-md bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link
            href="/homepage"
            className="text-2xl font-semibold tracking-tight"
          >
            MONET
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <Button variant={"ghost"} size={"icon"} aria-label="Search">
              <Search />
            </Button>
            <div className="relative">
              <Button variant={"ghost"} size={"icon"} aria-label="Wishlist">
                <Heart />
              </Button>
              <span className="absolute -top-1 -right-1 flex px-0.5 items-center justify-center rounded-xs bg-purple-500 text-xs font-semibold text-white">
                0
              </span>
            </div>
            <div className="relative">
              <Button variant={"ghost"} size={"icon"} aria-label="Cart">
                <ShoppingCart />
              </Button>
              <span className="absolute -top-1 -right-1 flex px-0.5 items-center justify-center rounded-xs bg-red-500 text-xs font-semibold text-white">
                5
              </span>
            </div>
            <Button variant={"ghost"} size={"icon"} aria-label="User">
              <User />
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <Button variant={"ghost"} size={"icon"} aria-label="Search">
              <Search />
            </Button>
            <div className="relative">
              <Button variant={"ghost"} size={"icon"} aria-label="Cart">
                <ShoppingCart />
              </Button>
              <span className="absolute -top-1 -right-1 flex px-0.5 items-center justify-center rounded-xs bg-red-500 text-xs font-semibold text-white">
                5
              </span>
            </div>
            <HeaderMobile />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
