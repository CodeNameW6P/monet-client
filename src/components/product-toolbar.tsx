import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductFilterSheet } from "./product-filter-sheet";

type ProductToolbarProps = {
  productCount: number;
};

export function ProductToolbar({ productCount }: ProductToolbarProps) {
  return (
    <div className="border-b pb-6">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{productCount}</span>{" "}
          products
        </p>

        {/* Desktop sort */}
        <div className="hidden sm:block">
          <Select defaultValue="default">
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="default">Recommended</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Search + filters */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

          <Input placeholder="Search products..." className="h-11 pl-9" />
        </div>

        {/* Mobile filters + sort */}
        <div className="flex gap-3 lg:hidden">
          <div className="flex-1">
            <ProductFilterSheet />
          </div>

          <div className="flex-1 sm:hidden">
            <Select defaultValue="default">
              <SelectTrigger className="h-11 w-full">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="default">Recommended</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
