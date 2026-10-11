import ProductCard, { type Product } from "@/components/product-card";

async function getProducts(): Promise<Product[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured");
  }

  const response = await fetch(`${apiUrl}/products`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main>
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

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-10 px-4 py-10 sm:gap-6 md:grid-cols-3 md:px-6 md:py-14 lg:gap-x-8 lg:gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <p className="mx-auto max-w-7xl px-4 pb-12 text-center text-muted-foreground">
            No products available right now. Check back soon!
          </p>
        )}
      </section>
    </main>
  );
}
