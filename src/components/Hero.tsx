import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      
      {/* Geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-primary rotate-45 animate-spin" style={{ animationDuration: "20s" }} />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-secondary rounded-2xl animate-bounce" style={{ animationDuration: "3s" }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/50 rounded-full animate-pulse" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-card/50 backdrop-blur-xl border-2 border-primary/50 rounded-full shadow-primary">
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          <span className="text-primary font-semibold">Available for Projects</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow inline-block">
            CREATIVE
          </span>
          <br />
          <span className="text-foreground">DEVELOPER</span>
          <br />
          <span className="bg-gradient-secondary bg-clip-text text-transparent">& DESIGNER</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium">
          Crafting pixel-perfect interfaces and stunning visuals
          <br className="hidden md:block" />
          that make an impact
        </p>
        
        <div className="flex gap-6 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="bg-gradient-primary text-white shadow-primary text-lg px-8 py-6 font-bold hover:scale-105 transition-transform"
            onClick={() => scrollToSection("projects")}
          >
            VIEW WORK
          </Button>
          <Button 
            size="lg" 
            className="bg-gradient-secondary text-secondary-foreground shadow-secondary text-lg px-8 py-6 font-bold hover:scale-105 transition-transform"
            onClick={() => scrollToSection("contact")}
          >
            LET'S TALK
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 cursor-pointer bg-transparent border-none group"
        aria-label="Scroll to about section"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
