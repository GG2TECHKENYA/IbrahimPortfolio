import { Code2, Server, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer and designer who loves turning ideas into beautiful, 
            functional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
              <Code2 className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Frontend Development</h3>
            <p className="text-muted-foreground leading-relaxed">
              Expert in React, TypeScript, and modern web technologies. 
              Building responsive, accessible, and performant user interfaces.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
              <Server className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">PHP Backend</h3>
            <p className="text-muted-foreground leading-relaxed">
              Strong backend capabilities with PHP, creating robust APIs 
              and server-side solutions that power modern applications.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
              <Palette className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Graphic Design</h3>
            <p className="text-muted-foreground leading-relaxed">
              Creative visual design using Canva and Adobe Illustrator. 
              Crafting compelling graphics that enhance brand identity.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
