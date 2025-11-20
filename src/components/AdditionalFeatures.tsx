import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Folders, 
  Palette, 
  Layers, 
  Globe, 
  Keyboard, 
  Lock,
  Sparkles,
  FileText,
  Cloud
} from "lucide-react";

const additionalFeatures = [
  {
    icon: Folders,
    title: "Nested Folders & Subfolders",
    description: "Create unlimited hierarchical folder structures",
    badge: "Free"
  },
  {
    icon: Palette,
    title: "Color Coding System",
    description: "Visual organization with custom color categories",
    badge: "Free"
  },
  {
    icon: Layers,
    title: "Drag & Drop Interface",
    description: "Effortlessly reorganize bookmarks with intuitive drag-and-drop",
    badge: "Free"
  },
  {
    icon: Globe,
    title: "Multi-AI Support",
    description: "Works with ChatGPT, Claude, Gemini, and more",
    badge: "Pro"
  },
  {
    icon: Keyboard,
    title: "Keyboard Shortcuts",
    description: "Quick actions with customizable hotkeys (Ctrl+B to bookmark)",
    badge: "Free"
  },
  {
    icon: Sparkles,
    title: "AI-Powered Tags",
    description: "Automatic tag suggestions based on conversation content",
    badge: "Pro"
  },
  {
    icon: Cloud,
    title: "Cloud Sync (Optional)",
    description: "Sync bookmarks across devices with end-to-end encryption",
    badge: "Pro"
  }
];

export const AdditionalFeatures = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            UpcomingPowerful Features, Zero Complexity
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build your personal AI knowledge library
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <Badge 
                      variant={feature.badge === "Pro" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
