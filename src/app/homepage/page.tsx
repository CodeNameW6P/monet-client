import { BestSellers } from "@/components/best-sellers";
import CategorySection from "@/components/category-section";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import { NewArrivals } from "@/components/new-arrivals";
import { PromoBanner } from "@/components/promo-banner";
import { StoreBenefits } from "@/components/store-benefits";

const HomePage: React.FC = () => {
  return (
    <>
      <main>
        <Hero />
        <CategorySection />
        <NewArrivals />
        <PromoBanner />
        <BestSellers />
        <StoreBenefits />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
