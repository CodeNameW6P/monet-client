"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import ProductTable from "@/components/comp-products/product-table";
import ProductDialog from "@/components/comp-products/product-dialog";
import type { Product } from "@/components/comp-products/product-table";
import DeleteProductDialog from "@/components/comp-products/product-delete-dialog";

export default function ProductsPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setDialogOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  const handleDeleteProduct = (product: Product) => {
    setProductToDelete(product);
  };

  const handleProductCreated = () => {
    setRefreshKey((current) => current + 1);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Products</h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage your Monet products and inventory.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddProduct}
          className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black/80"
        >
          <Plus className="h-4 w-4" />
          Add Product
        </button>
      </div>

      {/* Products */}
      <ProductTable
        key={refreshKey}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />

      {/* Add Product */}
      <ProductDialog
        open={dialogOpen}
        product={selectedProduct}
        onClose={() => setDialogOpen(false)}
        onSaved={() => setRefreshKey((current) => current + 1)}
      />

      <DeleteProductDialog
        product={productToDelete}
        onClose={() => setProductToDelete(null)}
        onDeleted={() => {
          setProductToDelete(null);
          setRefreshKey((current) => current + 1);
        }}
      />
    </div>
  );
}
