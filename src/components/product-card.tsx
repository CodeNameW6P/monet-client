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
  badge?: string;
  originalPrice?: number;
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
        <Link className={"absolute inset-0"} href={`/products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
            {product.badge}
          </span>
        )}

        <Button
          variant="secondary"
          size="icon"
          className="absolute right-3 top-3 size-9 rounded-full bg-white/90 shadow-sm backdrop-blur-sm hover:bg-white"
          aria-label={`Add ${product.name} to wishlist`}
        >
          <Heart />
        </Button>
      </div>

      <div className="mt-4 space-y-1">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold transition-colors group-hover:text-foreground/80">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-muted-foreground">{product.category}</p>

        <div className="mt-2 flex items-center gap-2">
          <span className="font-semibold">
            BDT {product.price.toLocaleString("en-BD")}
          </span>

          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice.toLocaleString("en-BD")}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
