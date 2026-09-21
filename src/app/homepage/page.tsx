import Hero from "@/components/hero";
import PromoBanner from "@/components/promo-banner";
import { StoreBenefits } from "@/components/store-benefits";
import { mockProducts } from "@/lib/fake-products";

const HomePage: React.FC = () => {
  return (
    <>
      <main>
        <Hero />
        {/* <CategorySection /> */}
        {/* <NewArrivals /> */}
        <PromoBanner
          product={mockProducts[0]}
          bannerImage="/images/repeat_1.png"
        />
        <PromoBanner
          product={mockProducts[1]}
          bannerImage="/images/repeat_2.tif"
        />
        {/* <BestSellers /> */}
        <StoreBenefits />
      </main>
    </>
  );
};

export default HomePage;
