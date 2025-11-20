import { Button } from "@/components/ui/button";
import { Chrome, Github } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary via-purple-light to-cyan-light p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="relative z-10 space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold px-4">
              Ready to Organize Your AI Knowledge?
            </h2>
            <p className="text-base md:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto px-4">
              Join 50,000+ users who never lose important ChatGPT conversations again
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-lg"
              >
                <Chrome className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Install Free Extension
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
              >
                <Github className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                View on GitHub
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};
