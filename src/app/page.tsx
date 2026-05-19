import HeroSection from "@/components/sections/HeroSection";
import PositioningSection from "@/components/sections/PositioningSection";
import ModelsSection from "@/components/sections/ModelsSection";
import CustomDesignSection from "@/components/sections/CustomDesignSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import RoiCalculatorSection from "@/components/sections/RoiCalculatorSection";
import InstallationSection from "@/components/sections/InstallationSection";
import GallerySection from "@/components/sections/GallerySection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import ManufacturingPartnerSection from "@/components/sections/ManufacturingPartnerSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="home">
      <HeroSection />
      <PositioningSection />
      <div className="section-divider" />
      <ModelsSection />
      <CustomDesignSection />
      <div className="section-divider" />
      <UseCasesSection />
      <RoiCalculatorSection />
      <div className="section-divider" />
      <InstallationSection />
      <GallerySection />
      <div className="section-divider" />
      <FaqSection />
      <ContactSection />
      <ManufacturingPartnerSection />
      <Footer />
    </main>
  );
}
