import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online store with React frontend and PHP backend, featuring product management and secure payments",
      tags: ["React", "PHP", "MySQL", "Tailwind CSS"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Brand Identity Suite",
      description: "Complete brand design package including logo, color palette, and marketing materials for a tech startup",
      tags: ["Adobe Illustrator", "Canva", "Brand Design"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Task Management App",
      description: "Responsive web application for team collaboration with real-time updates and intuitive UI",
      tags: ["React", "TypeScript", "REST API"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Portfolio Websites",
      description: "Custom portfolio sites for creative professionals, focusing on visual storytelling and performance",
      tags: ["React", "Tailwind CSS", "Design"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work across development and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardDescription className="text-base mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
