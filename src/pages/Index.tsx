import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import GoldenRules from "@/components/GoldenRules";
import CleaningRoutine from "@/components/CleaningRoutine";
import ProhibitedActivities from "@/components/ProhibitedActivities";
import BiologicalTimelines from "@/components/BiologicalTimelines";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <GoldenRules />
      <CleaningRoutine />
      <ProhibitedActivities />
      <BiologicalTimelines />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
