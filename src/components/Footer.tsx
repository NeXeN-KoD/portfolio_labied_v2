import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
      <footer className="py-8 border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Abderrahmane LABIED. Tous droits réservés.
            </p>

            <div className="flex items-center gap-4">
              <a
                  href="https://github.com/NeXeN-KoD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                  href="https://www.linkedin.com/in/abderrahmane-labied-48728b304/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                  href="mailto:abderrahmanelabied1@gmail.com"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;