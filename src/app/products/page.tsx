import ProductCard from "@/components/product-card";
import { ProductFilterSidebar } from "@/components/product-filter-sidebar";
import { ProductToolbar } from "@/components/product-toolbar";
import { mockProducts } from "@/lib/fake-products";

export default function ProductsPage() {
  return (
    <main>
      {/* Page heading */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Explore the collection
          </p>

          <h1 className="text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-6xl">
            Shop All
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Discover sneakers and everyday footwear built for your style,
            comfort, and movement.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
          <ProductToolbar productCount={mockProducts.length} />
          <div className="mt-8 flex gap-8">
            {/* Product grid */}
            <div className="min-w-0 flex-1">
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-6 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
                {mockProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
