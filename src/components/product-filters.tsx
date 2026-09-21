import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function ProductFilters() {
  return (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">
          Category
        </h3>

        <div className="space-y-3">
          {["sneakers", "sports", "casual", "running"].map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-3 text-sm"
            >
              <Checkbox />

              <span className="capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Gender */}
      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">
          Gender
        </h3>

        <div className="space-y-3">
          {["men", "women"].map((gender) => (
            <label
              key={gender}
              className="flex cursor-pointer items-center gap-3 text-sm"
            >
              <Checkbox />

              <span className="capitalize">{gender}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Size */}
      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Size</h3>

        <div className="grid grid-cols-3 gap-2">
          {["7", "8", "9", "10", "11"].map((size) => (
            <label
              key={size}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-md border p-2 text-sm transition-colors hover:bg-muted"
            >
              <Checkbox />
              <span>{size}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price */}
      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">
          Price
        </h3>

        <div className="flex items-center gap-2">
          <Input type="number" placeholder="Min" className="h-10" />

          <span className="text-muted-foreground">—</span>

          <Input type="number" placeholder="Max" className="h-10" />
        </div>
      </div>

      <Button variant="outline" className="w-full">
        Clear all filters
      </Button>
    </div>
  );
}
