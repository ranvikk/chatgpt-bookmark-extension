import { Bookmark, FolderOpen, Search, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Bookmark,
    title: "One-Click Bookmarking",
    description: "Save any ChatGPT response instantly with a single click. Never lose important insights again.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: FolderOpen,
    title: "Smart Organization",
    description: "Organize bookmarks into folders, add custom tags and notes for easy retrieval.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Search,
    title: "Lightning Search",
    description: "Find any bookmark in seconds with powerful search across all your saved responses.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Download,
    title: "Multi-Format Export",
    description: "Export your bookmarks as JSON, PDF, or Markdown. Your data, your way.",
    gradient: "from-green-500 to-emerald-500"
  }
];

export const Features = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Manage AI Insights</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Powerful features designed to help you capture and organize valuable ChatGPT conversations
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-5 md:p-6 lg:p-8">
                  <div className={`inline-flex p-2 md:p-3 rounded-xl md:rounded-2xl bg-gradient-to-br ${feature.gradient} mb-3 md:mb-4`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
