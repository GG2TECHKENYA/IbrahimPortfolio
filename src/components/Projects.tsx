import { Badge } from "@/components/ui/badge";
import { ExternalLink, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online store with React frontend and PHP backend",
      tags: ["React", "PHP", "MySQL"],
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      borderColor: "border-primary"
    },
    {
      title: "Brand Identity Suite",
      description: "Complete brand design package for tech startup",
      tags: ["Illustrator", "Canva", "Branding"],
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
      borderColor: "border-secondary"
    },
    {
      title: "Task Management App",
      description: "Responsive web app for team collaboration",
      tags: ["React", "TypeScript", "REST API"],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      borderColor: "border-accent"
    },
    {
      title: "Portfolio Websites",
      description: "Custom portfolio sites for creative professionals",
      tags: ["React", "Tailwind", "Design"],
      gradient: "from-orange-500 via-red-500 to-pink-500",
      borderColor: "border-primary"
    }
  ];

  return (
    <section id="projects" className="relative py-32 bg-background overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative p-8 bg-card border-4 ${project.borderColor} rounded-3xl hover:scale-105 transition-all duration-500 overflow-hidden cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-20 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <Zap className={`w-12 h-12 ${project.borderColor.replace('border-', 'text-')} group-hover:rotate-12 transition-transform`} />
                  <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-3xl font-black mb-4 uppercase group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      className="bg-muted text-foreground border-2 border-muted-foreground/20 font-bold uppercase text-sm px-4 py-1 hover:border-primary hover:text-primary transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
