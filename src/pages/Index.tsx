import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { Workflow } from "@/components/Workflow";
import { AdditionalFeatures } from "@/components/AdditionalFeatures";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Hero />
      <Features />
      <InteractiveDemo />
      <Workflow />
      <AdditionalFeatures />
     
      <CTA />
    </div>
  );
};

export default Index;
