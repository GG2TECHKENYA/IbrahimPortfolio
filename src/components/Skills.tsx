import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = {
    frontend: ["React", "TypeScript", "Tailwind", "HTML5", "CSS3", "JavaScript", "Responsive", "UI/UX"],
    backend: ["PHP", "MySQL", "REST APIs", "Laravel", "Node.js", "Database"],
    design: ["Canva", "Illustrator", "Figma", "Branding", "Logo Design", "Typography"]
  };

  return (
    <section id="skills" className="relative py-32 bg-card overflow-hidden">
      {/* Geometric background */}
      <div className="absolute top-10 left-10 w-64 h-64 border-8 border-primary/10 rotate-12 rounded-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 border-8 border-secondary/10 -rotate-12 rounded-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          <div className="animate-slide-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 flex-1 bg-gradient-primary rounded-full" />
              <h3 className="text-3xl font-black uppercase text-primary">Frontend</h3>
              <div className="h-1 flex-1 bg-gradient-primary rounded-full" />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.frontend.map((skill) => (
                <Badge 
                  key={skill} 
                  className="text-lg py-3 px-6 bg-gradient-primary text-white border-0 font-bold uppercase hover:scale-110 transition-transform shadow-primary"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="animate-slide-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 flex-1 bg-gradient-secondary rounded-full" />
              <h3 className="text-3xl font-black uppercase text-secondary">Backend</h3>
              <div className="h-1 flex-1 bg-gradient-secondary rounded-full" />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.backend.map((skill) => (
                <Badge 
                  key={skill} 
                  className="text-lg py-3 px-6 bg-gradient-secondary text-secondary-foreground border-0 font-bold uppercase hover:scale-110 transition-transform shadow-secondary"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 flex-1 bg-gradient-accent rounded-full" />
              <h3 className="text-3xl font-black uppercase text-accent">Design</h3>
              <div className="h-1 flex-1 bg-gradient-accent rounded-full" />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.design.map((skill) => (
                <Badge 
                  key={skill} 
                  className="text-lg py-3 px-6 bg-gradient-accent text-accent-foreground border-0 font-bold uppercase hover:scale-110 transition-transform shadow-accent"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
