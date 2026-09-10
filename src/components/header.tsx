import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Heart, ShoppingCart, User } from "lucide-react";

const Header: React.FC = () => {
  return (
    <>
      <header className="sticky top-0 z-50 shadow-md bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link
            href="/homepage"
            // className="text-4xl text-foreground font-comfortaa tracking-widest"
          >
            <Image
              src="/logo-color.png"
              alt="Monet Logo"
              width={200}
              height={160}
            />
          </Link>

          {/* Desktop Actions */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Button
                className={"rounded-xs hover:bg-foreground/10"}
                variant={"ghost"}
                size={"icon"}
                aria-label="Wishlist"
              >
                <Heart />
              </Button>
              <span className="absolute -top-1 -right-1 flex px-0.5 items-center justify-center rounded-xs bg-purple-500 text-xs font-semibold text-white">
                0
              </span>
            </div>
            <div className="relative">
              <Link href="/cart">
                <Button
                  className={"rounded-xs hover:bg-foreground/10"}
                  variant={"ghost"}
                  size={"icon"}
                  aria-label="Cart"
                >
                  <ShoppingCart />
                </Button>
              </Link>
              <span className="absolute -top-1 -right-1 flex px-0.5 items-center justify-center rounded-xs bg-red-500 text-xs font-semibold text-white">
                0
              </span>
            </div>
            <Button
              className={"rounded-xs hover:bg-foreground/10"}
              variant={"ghost"}
              size={"icon"}
              aria-label="User"
            >
              <User />
            </Button>
          </div>

          {/* Mobile Actions */}
          {/* <div className="flex items-center gap-2 md:hidden">
            <div className="relative">
              <Button
                className={"rounded-xs hover:bg-foreground/10"}
                variant={"ghost"}
                size={"icon"}
                aria-label="Cart"
              >
                <ShoppingCart />
              </Button>
              <span className="absolute -top-1 -right-1 flex px-0.5 items-center justify-center rounded-xs bg-red-500 text-xs font-semibold text-white">
                0
              </span>
            </div>
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
