import type { Product } from "@/components/product-card";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Air Runner",
    category: "Running Sneakers",
    price: 5500,
    image: "/images/products/air-runner.jpg",
    badge: "new",
  },
  {
    id: 2,
    name: "Street Force",
    category: "Casual Sneakers",
    price: 4800,
    image: "/images/products/street-force.jpg",
    badge: "bestseller",
  },
  {
    id: 3,
    name: "Urban Classic",
    category: "Lifestyle",
    price: 4200,
    image: "/images/products/urban-classic.jpg",
  },
  {
    id: 4,
    name: "Velocity Pro",
    category: "Sports",
    price: 6200,
    originalPrice: 7500,
    image: "/images/products/velocity-pro.jpg",
    badge: "sale",
  },
];
