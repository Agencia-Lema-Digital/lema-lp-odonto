import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MethodologySection from "@/components/MethodologySection";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";
import { FormDialogProvider } from "@/components/FormDialogContext";

const Index = () => (
  <FormDialogProvider>
    <TopBar />
    <HeroSection />
    <MethodologySection />
    <BenefitsSection />
    <SocialProofSection />
    <AboutSection />
    <FooterSection />
  </FormDialogProvider>
);

export default Index;
