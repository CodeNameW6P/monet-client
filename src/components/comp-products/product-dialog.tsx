"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, X } from "lucide-react";

import type { Product } from "./product-table";

interface VariantInput {
  id?: string;
  size: string;
  stock: string;
}

interface ProductDialogProps {
  open: boolean;
  product: Product | null;
  onClose: () => void;
  onSaved: () => void;
}

export default function ProductDialog({
  open,
  product,
  onClose,
  onSaved,
}: ProductDialogProps) {
  const isEditing = product !== null;

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [badge, setBadge] = useState("");
  const [price, setPrice] = useState("");
  const [slashedPrice, setSlashedPrice] = useState("");
  const [images, setImages] = useState<string[]>([""]);

  const [variants, setVariants] = useState<VariantInput[]>([
    {
      size: "",
      stock: "",
    },
  ]);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /*
   * Populate the form when editing a product.
   * Reset it when creating a new product.
   */
  useEffect(() => {
    if (!open) return;

    setError(null);

    if (product) {
      setName(product.name);
      setSlug(product.slug);
      setCategory(product.category);
      setDescription(product.description);
      setBadge(product.badge ?? "");
      setPrice(String(product.price));
      setSlashedPrice(
        product.slashedPrice !== null ? String(product.slashedPrice) : "",
      );

      setImages(product.images.length > 0 ? product.images : [""]);

      setVariants(
        product.variants.length > 0
          ? product.variants.map((variant) => ({
              id: variant.id,
              size: String(variant.size),
              stock: String(variant.stock),
            }))
          : [
              {
                size: "",
                stock: "",
              },
            ],
      );
    } else {
      resetForm();
    }
  }, [open, product]);

  const resetForm = () => {
    setName("");
    setSlug("");
    setCategory("");
    setDescription("");
    setBadge("");
    setPrice("");
    setSlashedPrice("");
    setImages([""]);

    setVariants([
      {
        size: "",
        stock: "",
      },
    ]);

    setError(null);
  };

  const handleClose = () => {
    if (submitting) return;

    onClose();
  };

  // -------------------------
  // Images
  // -------------------------

  const handleImageChange = (index: number, value: string) => {
    setImages((current) =>
      current.map((image, imageIndex) =>
        imageIndex === index ? value : image,
      ),
    );
  };

  const addImage = () => {
    setImages((current) => [...current, ""]);
  };

  const removeImage = (index: number) => {
    setImages((current) => {
      if (current.length === 1) {
        return [""];
      }

      return current.filter((_, imageIndex) => imageIndex !== index);
    });
  };

  // -------------------------
  // Variants
  // -------------------------

  const addVariant = () => {
    setVariants((current) => [
      ...current,
      {
        size: "",
        stock: "",
      },
    ]);
  };

  const removeVariant = (index: number) => {
    setVariants((current) => {
      if (current.length === 1) {
        return [
          {
            size: "",
            stock: "",
          },
        ];
      }

      return current.filter((_, variantIndex) => variantIndex !== index);
    });
  };

  const updateVariant = (
    index: number,
    field: keyof VariantInput,
    value: string,
  ) => {
    setVariants((current) =>
      current.map((variant, variantIndex) =>
        variantIndex === index
          ? {
              ...variant,
              [field]: value,
            }
          : variant,
      ),
    );
  };

  // -------------------------
  // Submit
  // -------------------------

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setSubmitting(true);
      setError(null);

      const cleanImages = images.map((image) => image.trim()).filter(Boolean);

      if (cleanImages.length === 0) {
        setError("At least one product image is required.");
        return;
      }

      if (
        !name.trim() ||
        !slug.trim() ||
        !category.trim() ||
        !description.trim()
      ) {
        setError("Please fill in all required product fields.");
        return;
      }

      const cleanVariants = variants.map((variant) => ({
        id: variant.id,
        size: Number(variant.size),
        stock: Number(variant.stock),
      }));

      if (
        cleanVariants.some(
          (variant) =>
            !Number.isInteger(variant.size) ||
            variant.size <= 0 ||
            !Number.isInteger(variant.stock) ||
            variant.stock < 0,
        )
      ) {
        setError("All sizes and stock values must be valid.");
        return;
      }

      // Prevent duplicate sizes in the form.
      const sizes = cleanVariants.map((variant) => variant.size);

      if (new Set(sizes).size !== sizes.length) {
        setError("Each product size can only appear once.");
        return;
      }

      const productPayload = {
        name: name.trim(),
        slug: slug.trim(),
        category: category.trim(),
        description: description.trim(),
        badge: badge.trim() || null,
        price: Number(price),
        slashedPrice: slashedPrice ? Number(slashedPrice) : null,
        images: cleanImages,
      };

      // =====================================================
      // CREATE
      // =====================================================

      if (!isEditing) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...productPayload,
              variants: cleanVariants.map(({ size, stock }) => ({
                size,
                stock,
              })),
            }),
          },
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.error || "Failed to create product.");
        }

        onClose();
        onSaved();
        return;
      }

      // =====================================================
      // UPDATE PRODUCT
      // =====================================================

      const productResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${product.id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productPayload),
        },
      );

      const productData = await productResponse.json();

      if (!productResponse.ok) {
        throw new Error(productData?.error || "Failed to update product.");
      }

      // =====================================================
      // UPDATE EXISTING / CREATE NEW VARIANTS
      // =====================================================

      const currentVariantIds = new Set(
        cleanVariants.map((variant) => variant.id).filter(Boolean),
      );

      // Delete variants that were removed from the form.
      const deletedVariants = product.variants.filter(
        (variant) => !currentVariantIds.has(variant.id),
      );

      await Promise.all(
        deletedVariants.map(async (variant) => {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/products/${product.id}/variants/${variant.id}`,
            {
              method: "DELETE",
              credentials: "include",
            },
          );

          if (!response.ok) {
            const data = await response.json();

            throw new Error(
              data?.error || `Failed to delete size ${variant.size}.`,
            );
          }
        }),
      );

      // Update existing variants and create new ones.
      await Promise.all(
        cleanVariants.map(async (variant) => {
          // Existing variant
          if (variant.id) {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/products/${product.id}/variants/${variant.id}`,
              {
                method: "PUT",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  size: variant.size,
                  stock: variant.stock,
                }),
              },
            );

            if (!response.ok) {
              const data = await response.json();

              throw new Error(
                data?.error || `Failed to update size ${variant.size}.`,
              );
            }

            return;
          }

          // New variant
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/products/${product.id}/variants`,
            {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                size: variant.size,
                stock: variant.stock,
              }),
            },
          );

          if (!response.ok) {
            const data = await response.json();

            throw new Error(
              data?.error || `Failed to create size ${variant.size}.`,
            );
          }
        }),
      );

      onClose();
      onSaved();
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close dialog"
        onClick={handleClose}
        className="absolute inset-0 bg-black/50"
      />

      {/* Dialog */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-lg font-semibold">
              {isEditing ? "Edit Product" : "Add Product"}
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              {isEditing
                ? "Update product information and inventory."
                : "Add a new product to your Monet store."}
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            disabled={submitting}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="overflow-y-auto">
          <div className="space-y-8 p-6">
            {/* Basic Information */}
            <section>
              <h3 className="mb-4 text-sm font-semibold">Basic Information</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium">
                    Product name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Ocean Drift"
                    required
                    className="h-10 w-full rounded-lg border px-3 text-sm outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Slug
                  </label>

                  <input
                    type="text"
                    value={slug}
                    onChange={(event) => setSlug(event.target.value)}
                    placeholder="ocean-drift"
                    required
                    className="h-10 w-full rounded-lg border px-3 text-sm outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Category
                  </label>

                  <input
                    type="text"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    placeholder="Sneakers"
                    required
                    className="h-10 w-full rounded-lg border px-3 text-sm outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Badge
                  </label>

                  <input
                    type="text"
                    value={badge}
                    onChange={(event) => setBadge(event.target.value)}
                    placeholder="New"
                    className="h-10 w-full rounded-lg border px-3 text-sm outline-none focus:border-black"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium">
                    Description
                  </label>

                  <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Describe the product..."
                    rows={4}
                    required
                    className="w-full resize-none rounded-lg border px-3 py-2.5 text-sm outline-none focus:border-black"
                  />
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section>
              <h3 className="mb-4 text-sm font-semibold">Pricing</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Price
                  </label>

                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    placeholder="2490"
                    required
                    className="h-10 w-full rounded-lg border px-3 text-sm outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium">
                    Slashed price
                  </label>

                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={slashedPrice}
                    onChange={(event) => setSlashedPrice(event.target.value)}
                    placeholder="2990"
                    className="h-10 w-full rounded-lg border px-3 text-sm outline-none focus:border-black"
                  />
                </div>
              </div>
            </section>

            {/* Images */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold">Product Images</h3>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Add image URLs for the product.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={addImage}
                  className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                >
                  <Plus className="h-4 w-4" />
                  Add image
                </button>
              </div>

              <div className="space-y-3">
                {images.map((image, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="url"
                      value={image}
                      onChange={(event) =>
                        handleImageChange(index, event.target.value)
                      }
                      placeholder="https://..."
                      required={index === 0}
                      className="h-10 flex-1 rounded-lg border px-3 text-sm outline-none focus:border-black"
                    />

                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Variants */}
            <section>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold">Sizes & Stock</h3>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Set the available sizes and their stock.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={addVariant}
                  className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                >
                  <Plus className="h-4 w-4" />
                  Add size
                </button>
              </div>

              <div className="space-y-3">
                {variants.map((variant, index) => (
                  <div
                    key={variant.id ?? `new-${index}`}
                    className="grid grid-cols-[1fr_1fr_auto] gap-3"
                  >
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={variant.size}
                      onChange={(event) =>
                        updateVariant(index, "size", event.target.value)
                      }
                      placeholder="Size"
                      required
                      className="h-10 rounded-lg border px-3 text-sm outline-none focus:border-black"
                    />

                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={variant.stock}
                      onChange={(event) =>
                        updateVariant(index, "stock", event.target.value)
                      }
                      placeholder="Stock"
                      required
                      className="h-10 rounded-lg border px-3 text-sm outline-none focus:border-black"
                    />

                    <button
                      type="button"
                      onClick={() => removeVariant(index)}
                      className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Error */}
            {error && (
              <div className="rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                {error}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 border-t bg-muted/20 px-6 py-4">
            <button
              type="button"
              onClick={handleClose}
              disabled={submitting}
              className="rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting
                ? isEditing
                  ? "Saving..."
                  : "Creating..."
                : isEditing
                  ? "Save Changes"
                  : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
