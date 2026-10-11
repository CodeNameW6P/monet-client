import Image from "next/image";
import Link from "next/link";

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  images: string[];
  badge?: string | null;
  slashedPrice?: number | null;
  description: string;
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
        <Link className="absolute inset-0" href={`/products/${product.slug}`}>
          <Image
            src={product.images[0] || "/images/placeholder.png"}
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
      </div>

      <div className="mt-4 space-y-1">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-semibold transition-colors group-hover:text-foreground/80">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-muted-foreground">{product.category}</p>

        <div className="mt-2 flex items-center gap-2">
          <span className="font-semibold">
            BDT {Number(product.price).toLocaleString("en-BD")}
          </span>

          {product.slashedPrice != null && (
            <span className="text-sm text-muted-foreground line-through">
              BDT {Number(product.slashedPrice).toLocaleString("en-BD")}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
