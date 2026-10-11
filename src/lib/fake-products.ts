import type { Product } from "@/components/product-card";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Colors of Spring",
    category: "Casual Sneakers",
    price: 2990,
    slug: "colors-of-spring",
    images: [
      "/images/products/s1.png",
      "/images/products/s2.png",
      "/images/products/s3.png",
      "/images/products/s4.png",
      "/images/products/s5.png",
      "/images/products/s6.png",
    ],
    badge: "300x",
    description: "A burst of color in every step. Let your style bloom.",
  },
  {
    id: "2",
    name: "Ocean Drift",
    category: "Casual Sneakers",
    price: 3100,
    slug: "ocean-drift",
    images: [
      "/images/products/p1.png",
      "/images/products/p2.png",
      "/images/products/p3.png",
      "/images/products/p4.png",
      "/images/products/p5.png",
      "/images/products/p6.png",
    ],
    badge: "150x",
    description: "Inspired by the Bay of Bengal, for the untamed",
  },
];
