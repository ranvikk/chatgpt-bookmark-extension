import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  { 
    step: "Chat", 
    icon: "💬", 
    color: "from-blue-500 to-cyan-500", 
    description: "Have conversations with ChatGPT",
    detail: "Ask questions and get AI-powered responses"
  },
  { 
    step: "Bookmark", 
    icon: "🔖", 
    color: "from-purple-500 to-pink-500", 
    description: "Save important responses",
    detail: "One-click to save any conversation instantly"
  },
  { 
    step: "Organize", 
    icon: "📁", 
    color: "from-orange-500 to-red-500", 
    description: "Tag and categorize bookmarks",
    detail: "Use folders, tags, and colors for easy sorting"
  },
  { 
    step: "Access", 
    icon: "⚡", 
    color: "from-green-500 to-emerald-500", 
    description: "Find and export anytime",
    detail: "Search, filter, and export in multiple formats"
  }
];

export const Workflow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('workflow-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="workflow-section" className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple 4-Step Workflow
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            From conversation to organized knowledge in seconds
          </p>
        </div>

        {/* Desktop/Tablet View */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 lg:gap-8 mb-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <Card 
                className={`flex flex-col items-center text-center p-4 lg:p-6 transition-all duration-500 cursor-pointer border-2 ${
                  activeStep === index 
                    ? 'border-primary shadow-2xl scale-105 bg-card' 
                    : 'border-border hover:border-primary/50 hover:shadow-lg'
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl lg:text-4xl shadow-lg transform transition-transform duration-300 ${
                  activeStep === index ? 'scale-110 animate-pulse' : ''
                }`}>
                  {item.icon}
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeStep === index ? 'bg-primary animate-ping' : 'bg-muted-foreground/30'
                    }`} />
                    <h3 className="text-xl lg:text-2xl font-bold">{item.step}</h3>
                  </div>
                  <p className="text-sm lg:text-base text-muted-foreground leading-snug">{item.description}</p>
                  {activeStep === index && (
                    <p className="text-xs lg:text-sm text-primary font-medium animate-fade-in">
                      {item.detail}
                    </p>
                  )}
                </div>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="absolute top-8 lg:top-10 -right-2 lg:-right-4 z-10">
                  <ArrowRight className={`w-6 h-6 lg:w-8 lg:h-8 transition-colors duration-300 ${
                    activeStep === index ? 'text-primary animate-pulse' : 'text-muted-foreground/30'
                  }`} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {steps.map((item, index) => (
            <Card 
              key={index}
              className={`transition-all duration-500 border-2 ${
                activeStep === index 
                  ? 'border-primary shadow-xl scale-[1.02] bg-card' 
                  : 'border-border'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className="flex items-start gap-4 p-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0 transition-transform duration-300 ${
                  activeStep === index ? 'scale-110' : ''
                }`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeStep === index ? 'bg-primary animate-ping' : 'bg-muted-foreground/30'
                    }`} />
                    <h3 className="text-lg font-bold">{item.step}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{item.description}</p>
                  {activeStep === index && (
                    <p className="text-xs text-primary font-medium animate-fade-in">
                      {item.detail}
                    </p>
                  )}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex justify-center pb-2">
                  <ArrowRight className={`w-6 h-6 rotate-90 transition-colors duration-300 ${
                    activeStep === index ? 'text-primary' : 'text-muted-foreground/30'
                  }`} />
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeStep === index ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
