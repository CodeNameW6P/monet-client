"use client";
import { useEffect, useState } from "react";
import { AlertTriangle, Loader2, X } from "lucide-react";
import type { Product } from "./product-table";

interface DeleteProductDialogProps {
  product: Product | null;
  onClose: () => void;
  onDeleted: () => void;
}

export default function DeleteProductDialog({
  product,
  onClose,
  onDeleted,
}: DeleteProductDialogProps) {
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
  }, [product]);

  if (!product) return null;

  const handleDelete = async () => {
    try {
      setDeleting(true);
      setError(null);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${product.id}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || "Failed to delete product.");
      }

      onDeleted();
    } catch (err) {
      console.error(err);

      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close dialog"
        disabled={deleting}
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />

      {/* Confirmation dialog */}
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="delete-product-title"
        className="relative z-10 w-full max-w-md rounded-xl border bg-white p-6 shadow-xl"
      >
        <div className="mb-5 flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>

          <button
            type="button"
            aria-label="Close dialog"
            disabled={deleting}
            onClick={onClose}
            className="rounded-md p-2 text-muted-foreground hover:bg-muted"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <h2 id="delete-product-title" className="text-lg font-semibold">
          Delete product?
        </h2>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Are you sure you want to delete{" "}
          <span className="font-medium text-foreground">{product.name}</span>?
          This action cannot be undone.
        </p>

        {error && (
          <div
            role="alert"
            className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            disabled={deleting}
            onClick={onClose}
            className="rounded-lg border px-4 py-2.5 text-sm font-medium hover:bg-muted disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={deleting}
            onClick={handleDelete}
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {deleting && <Loader2 className="h-4 w-4 animate-spin" />}

            {deleting ? "Deleting..." : "Delete Product"}
          </button>
        </div>
      </div>
    </div>
  );
}
