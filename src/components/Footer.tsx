const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
