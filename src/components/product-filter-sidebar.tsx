import { ProductFilters } from "./product-filters";

export function ProductFilterSidebar() {
  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <div className="sticky top-24">
        <div className="mb-6 flex items-center justify-between border-b pb-4">
          <h2 className="font-semibold">Filters</h2>
        </div>

        <ProductFilters />
      </div>
    </aside>
  );
}
