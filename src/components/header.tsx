import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const Header: React.FC = () => {
  return (
    <>
      <header className="sticky top-0 z-50 shadow-md bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 items-center justify-between max-w-7xl px-4">
          <Link href="/homepage">
            <Image
              src="/images/monet-logo-text-b-on-trans.png"
              alt="Monet Logo"
              width={160}
              height={50}
            />
          </Link>
          <div className="flex items-center gap-2">
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
