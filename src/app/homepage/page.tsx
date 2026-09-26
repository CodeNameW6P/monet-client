import Hero from "@/components/hero";
import PromoBanner1 from "@/components/promo-banner-1";
import PromoBanner2 from "@/components/promo-banner-2";
import { StoreBenefits } from "@/components/store-benefits";
import { Testimonials } from "@/components/testimonials";
import { mockProducts } from "@/lib/fake-products";

const HomePage: React.FC = () => {
  return (
    <>
      <main>
        <Hero />
        {/* <CategorySection /> */}
        {/* <NewArrivals /> */}
        <PromoBanner1
          product={mockProducts[0]}
          bannerImage="/images/repeat_1.png"
        />
        <PromoBanner2
          product={mockProducts[1]}
          bannerImage="/images/bg-waves.png"
        />
        {/* <BestSellers /> */}
        <Testimonials />
      </main>
    </>
  );
};

export default HomePage;
