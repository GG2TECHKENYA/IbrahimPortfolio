const Footer = () => {
  return (
    <footer className="relative py-12 bg-background border-t-4 border-primary/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-muted-foreground font-semibold uppercase tracking-wider">
          © {new Date().getFullYear()} <span className="text-primary font-black">Portfolio</span> • Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
