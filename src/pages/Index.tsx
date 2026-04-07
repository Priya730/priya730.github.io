import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import { GSoCSection, BuildingSection, WritingSection, TalksSection, FooterSection } from "@/components/ContentSections";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <GSoCSection />
      <BuildingSection />
      <WritingSection />
      <TalksSection />
      <FooterSection />
    </>
  );
};

export default Index;
