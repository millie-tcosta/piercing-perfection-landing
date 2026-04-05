import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PiercingCatalog from "@/components/PiercingCatalog";
import MaterialsSection from "@/components/MaterialsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PiercingCatalog />
      <MaterialsSection />
      <PortfolioSection />
      <ScheduleSection />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
