import CategoryCard from "./category-card";
import Link from "next/link";

const categories = [
  {
    name: "Men",
    href: "/categories/men",
    image: "/images/categories/men.jpg",
  },
  {
    name: "Women",
    href: "/categories/women",
    image: "/images/categories/women.jpg",
  },
  {
    name: "Sneakers",
    href: "/categories/sneakers",
    image: "/images/categories/sneakers.jpg",
  },
  {
    name: "Sports",
    href: "/categories/sports",
    image: "/images/categories/sports.jpg",
  },
  {
    name: "Casual",
    href: "/categories/casual",
    image: "/images/categories/casual.jpg",
  },
];

const CategorySection: React.FC = () => {
  return (
    <>
      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Heading */}
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Find your style
              </p>

              <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl md:text-5xl">
                Shop by Category
              </h2>
            </div>

            <Link
              href="/products"
              className="hidden text-sm font-semibold underline-offset-4 hover:underline sm:block"
            >
              View all
            </Link>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
            <CategoryCard
              {...categories[0]}
              className="h-64 md:col-span-2 md:h-80"
            />

            <CategoryCard
              {...categories[1]}
              className="h-64 md:col-span-2 md:h-80"
            />

            <CategoryCard
              {...categories[2]}
              className="col-span-2 h-64 md:col-span-2 md:h-80"
            />

            <CategoryCard
              {...categories[3]}
              className="col-span-1 h-64 md:col-span-3 md:h-96"
            />

            <CategoryCard
              {...categories[4]}
              className="col-span-1 h-64 md:col-span-3 md:h-96"
            />
          </div>

          {/* Mobile view all */}
          <div className="mt-6 sm:hidden">
            <Link
              href="/products"
              className="text-sm font-semibold underline-offset-4 hover:underline"
            >
              View all products →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategorySection;
