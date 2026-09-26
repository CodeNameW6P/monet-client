import type { Product } from "@/components/product-card";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Colors of Spring",
    category: "Casual Sneakers",
    price: 2990,
    image: [
      "/images/products/s1.png",
      "/images/products/s2.png",
      "/images/products/s3.png",
      "/images/products/s4.png",
      "/images/products/s5.png",
      "/images/products/s6.png",
    ],
    badge: "300x",
    description:
      "A burst of color for every step. Colors of Spring brings playful tones and effortless street style together in a sneaker made to brighten your everyday.",
  },
  {
    id: 2,
    name: "Ocean Drift",
    category: "Casual Sneakers",
    price: 3100,
    image: [
      "/images/products/p1.png",
      "/images/products/p2.png",
      "/images/products/p3.png",
      "/images/products/p4.png",
      "/images/products/p5.png",
      "/images/products/p6.png",
    ],
    badge: "150x",
    description: "Every step is effortless, like drifting away in the ocean.",
  },
];
