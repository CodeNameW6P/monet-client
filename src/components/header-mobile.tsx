"use client";
import Link from "next/link";
import { Menu, User, Heart } from "lucide-react";
import {
  Sheet,
  //   SheetClose,
  SheetContent,
  //   SheetDescription,
  //   SheetFooter,
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
            <Button variant={"ghost"} size={"icon"} aria-label="Menu">
              <Menu />
            </Button>
          }
        />
        <SheetContent>
          <SheetHeader>
            <SheetTitle className={"text-2xl font-semibold"}>MONET</SheetTitle>
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
