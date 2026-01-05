import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ChefStoriesSection from "@/components/ChefStoriesSection";
import TransparentPricingSection from "@/components/TransparentPricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <ChefStoriesSection />
      <TransparentPricingSection />
      <Footer />
    </div>
  );
};

export default Index;
