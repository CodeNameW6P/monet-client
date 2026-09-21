"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import { ProductFilters } from "./product-filters";

export function ProductFilterSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" className="w-full">
          Filters
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[85%] sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <div className="mt-6 overflow-y-auto pb-6">
          <ProductFilters />
        </div>
      </SheetContent>
    </Sheet>
  );
}
