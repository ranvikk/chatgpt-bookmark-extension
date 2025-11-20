import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome } from "lucide-react";

export const Hero = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    demoSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 opacity-50" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 md:space-y-8 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-2 md:mb-4 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Never lose a ChatGPT conversation again
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-tight animate-fade-in px-4">
          Bookmark & Organize
          <br />
          Your ChatGPT Conversations
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in px-4">
          Save valuable AI insights instantly. Organize, search, and export your ChatGPT bookmarks with ease.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 animate-fade-in px-4">
          <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-cyan-light hover:opacity-90 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-lg hover:shadow-xl transition-all">
            <Chrome className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            <span className="flex-1 sm:flex-none">Add to Chrome - It's Free</span>
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-5 md:py-6 border-2 hover:bg-secondary"
            onClick={scrollToDemo}
          >
            Watch Demo
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 pt-6 md:pt-8 text-xs sm:text-sm text-muted-foreground animate-fade-in px-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">★</div>
            <span className="whitespace-nowrap">4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">✓</div>
            <span className="whitespace-nowrap">50,000+ Active Users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">⚡</div>
            <span className="whitespace-nowrap">100% Free Forever</span>
          </div>
        </div>
      </div>
    </section>
  );
};
