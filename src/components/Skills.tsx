import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = {
    frontend: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    backend: ["PHP", "MySQL", "REST APIs", "Laravel", "Node.js", "Database Design"],
    design: ["Canva", "Adobe Illustrator", "Figma", "Brand Identity", "Logo Design", "Typography"]
  };

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning development and design
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Frontend Development</h3>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="text-base py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="animate-slide-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Backend Development</h3>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="text-base py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Graphic Design</h3>
            <div className="flex flex-wrap gap-3">
              {skills.design.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="text-base py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
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
