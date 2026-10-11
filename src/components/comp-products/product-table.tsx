"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PackageOpen } from "lucide-react";
import ProductActions from "./product-actions";

interface ProductTableProps {
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export interface ProductVariant {
  id: string;
  size: number;
  stock: number;
  productId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  badge: string | null;
  price: number;
  slashedPrice: number | null;
  images: string[];
  createdAt: string;
  updatedAt: string;
  variants: ProductVariant[];
}

export default function ProductTable({ onEdit, onDelete }: ProductTableProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products`,
          {
            credentials: "include",
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }

        const data: Product[] = await response.json();

        setProducts(data);
      } catch (error) {
        console.error(error);
        setError("Couldn't load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl border bg-white">
        <div className="flex h-64 items-center justify-center">
          <p className="text-sm text-muted-foreground">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border bg-white">
        <div className="flex h-64 items-center justify-center">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="rounded-xl border bg-white">
        <div className="flex h-64 flex-col items-center justify-center gap-3">
          <PackageOpen className="h-8 w-8 text-muted-foreground" />

          <div className="text-center">
            <p className="font-medium">No products yet</p>
            <p className="text-sm text-muted-foreground">
              Create your first Monet product to get started.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/30">
              <th className="px-6 py-4 text-left font-medium">Product</th>

              <th className="px-6 py-4 text-left font-medium">Category</th>

              <th className="px-6 py-4 text-left font-medium">Price</th>

              <th className="px-6 py-4 text-left font-medium">Stock</th>

              <th className="px-6 py-4 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => {
              const totalStock = product.variants.reduce(
                (total, variant) => total + variant.stock,
                0,
              );

              const image = product.images[0];

              return (
                <tr
                  key={product.id}
                  className="border-b last:border-b-0 hover:bg-muted/20"
                >
                  {/* Product */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border bg-muted">
                        {image ? (
                          <Image
                            src={image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                            No image
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="font-medium">{product.name}</p>

                        <p className="truncate text-xs text-muted-foreground">
                          {product.slug}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4 text-muted-foreground">
                    {product.category}
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium">
                        ৳{product.price.toLocaleString()}
                      </span>

                      {product.slashedPrice && (
                        <span className="text-xs text-muted-foreground line-through">
                          ৳{product.slashedPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Stock */}
                  <td className="px-6 py-4">
                    <span
                      className={
                        totalStock === 0
                          ? "font-medium text-destructive"
                          : totalStock <= 5
                            ? "font-medium text-orange-600"
                            : "text-muted-foreground"
                      }
                    >
                      {totalStock}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-right">
                    <ProductActions
                      product={product}
                      onEdit={onEdit}
                      onDelete={onDelete}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
