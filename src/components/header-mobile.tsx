"use client";
import Link from "next/link";
import { Menu, User, Heart, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

const navigation = [
  { label: "New Arrivals", href: "/categories/new-arrivals" },
  { label: "Best Sellers", href: "/categories/best-sellers" },
  { label: "Men", href: "/categories/men" },
  { label: "Women", href: "/categories/women" },
];

const HeaderMobile = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger
          render={
            <Button
              className={"rounded-xs hover:bg-foreground/10"}
              variant={"ghost"}
              size={"icon"}
              aria-label="Menu"
            >
              <Menu />
            </Button>
          }
        />
        <SheetContent showCloseButton={false}>
          <SheetHeader className={"flex flex-row items-center justify-between"}>
            <SheetTitle
              className={
                "text-2xl text-foreground font-semibold tracking-tighter"
              }
            >
              M O N E T
            </SheetTitle>
            <SheetClose
              render={
                <Button
                  className={"rounded-xs hover:bg-foreground/10"}
                  variant={"ghost"}
                  size={"icon"}
                  aria-label="X"
                >
                  <X />
                </Button>
              }
            />
            {/* <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription> */}
          </SheetHeader>
          <nav className="flex flex-col gap-2 px-4">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-4 py-4 hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <hr />
          <div className="px-4">
            <Link
              href={""}
              className="flex items-center gap-4 rounded-md px-4 py-4 hover:bg-muted"
            >
              <Heart />
              Wishlist
            </Link>
            <Link
              href={""}
              className="flex items-center gap-4 rounded-md px-4 py-4 hover:bg-muted"
            >
              <User />
              Account
            </Link>
          </div>
          {/* <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose render={<Button variant="outline">Close</Button>} />
          </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default HeaderMobile;
