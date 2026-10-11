import Hero from "@/components/hero";
import PromoBanner1 from "@/components/promo-banner-1";
import PromoBanner2 from "@/components/promo-banner-2";
import { mockProducts } from "@/lib/fake-products";
import BrandBanner from "@/components/brand-banner";

const HomePage: React.FC = () => {
  return (
    <>
      <main>
        <Hero />
        <PromoBanner1
          product={mockProducts[0]}
          bannerImage="/images/repeat_1.png"
        />
        <PromoBanner2
          product={mockProducts[1]}
          bannerImage="/images/bg-waves.png"
        />
        <BrandBanner />
      </main>
    </>
  );
};

export default HomePage;
