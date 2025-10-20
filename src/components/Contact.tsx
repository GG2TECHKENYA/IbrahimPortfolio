import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 bg-card overflow-hidden">
      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-6 bg-background/50 backdrop-blur-xl border-2 border-accent/50 rounded-full">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-accent font-bold uppercase tracking-wider">Let's Collaborate</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase">
            <span className="bg-gradient-accent bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-10 bg-background border-4 border-primary/20 rounded-3xl shadow-primary">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="YOUR NAME" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="text-lg py-6 bg-card border-2 border-muted focus:border-primary font-semibold uppercase placeholder:text-muted-foreground/50"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="YOUR EMAIL" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="text-lg py-6 bg-card border-2 border-muted focus:border-primary font-semibold uppercase placeholder:text-muted-foreground/50"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="YOUR MESSAGE" 
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="text-lg bg-card border-2 border-muted focus:border-primary font-semibold uppercase placeholder:text-muted-foreground/50 resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary text-white shadow-primary text-xl py-7 font-black uppercase hover:scale-105 transition-transform"
              >
                <Send className="w-6 h-6 mr-3" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a 
              href="mailto:hello@example.com" 
              className="group relative w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-primary rotate-3 hover:rotate-6"
              aria-label="Email"
            >
              <Mail className="w-7 h-7 text-white" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-16 h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-secondary rotate-3 hover:rotate-6"
              aria-label="GitHub"
            >
              <Github className="w-7 h-7 text-secondary-foreground" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-accent rotate-3 hover:rotate-6"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7 text-accent-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
