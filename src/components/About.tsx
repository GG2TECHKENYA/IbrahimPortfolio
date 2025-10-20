import { Code2, Server, Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase">
            <span className="bg-gradient-primary bg-clip-text text-transparent">What I Do</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group relative p-10 bg-card border-4 border-primary/20 hover:border-primary rounded-3xl transition-all duration-500 hover:-translate-y-4 hover:shadow-primary overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-bl-full" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform rotate-3 group-hover:rotate-6">
                <Code2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase text-primary">Frontend</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Building lightning-fast, responsive web apps with React, TypeScript & cutting-edge tech
              </p>
            </div>
          </div>

          <div className="group relative p-10 bg-card border-4 border-secondary/20 hover:border-secondary rounded-3xl transition-all duration-500 hover:-translate-y-4 hover:shadow-secondary overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-secondary opacity-10 rounded-bl-full" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform rotate-3 group-hover:rotate-6">
                <Server className="w-10 h-10 text-secondary-foreground" />
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase text-secondary">Backend</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Crafting powerful APIs and server logic with PHP, MySQL & modern backend tools
              </p>
            </div>
          </div>

          <div className="group relative p-10 bg-card border-4 border-accent/20 hover:border-accent rounded-3xl transition-all duration-500 hover:-translate-y-4 hover:shadow-accent overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-bl-full" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform rotate-3 group-hover:rotate-6">
                <Palette className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase text-accent">Design</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Creating eye-catching graphics & brand identities with Canva & Adobe Illustrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
