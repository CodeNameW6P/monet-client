import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: "new" | "sale" | "bestseller";
  originalPrice?: number;
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group">
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-3 top-3 rounded-full bg-white/90 shadow-sm backdrop-blur-sm hover:bg-white"
          aria-label={`Add ${product.name} to wishlist`}
        >
          <Heart />
        </Button>
      </div>

      {/* Product information */}
      <div className="mt-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-base font-semibold tracking-tight transition-colors group-hover:text-muted-foreground">
            {product.name}
          </h3>
        </Link>

        <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>

        <div className="mt-3 flex items-center gap-2">
          <span className="font-semibold">
            ৳{product.price.toLocaleString("en-BD")}
          </span>

          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ৳{product.originalPrice.toLocaleString("en-BD")}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
