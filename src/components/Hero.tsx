import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Github, Linkedin } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="container max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm mb-4"
            >
              Bonjour, je suis
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Abderrahmane{" "}
              <span className="text-gradient">LABIED</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6"
            >
              Développeur Fullstack & Innovateur
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground mb-8 max-w-md leading-relaxed"
            >
              Étudiant en 5ème année à l'UIR, passionné par le développement Fullstack 
              et l'architecture logicielle. Auteur d'un brevet d'invention.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-3 mb-8"
            >
              <a href="mailto:abderrahmanelabied1@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">abderrahmanelabied1@gmail.com</span>
              </a>
              <a href="tel:+212663018929" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+212 6 63 01 89 29</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Sala Al Jadida, Maroc</span>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:glow-primary transition-all duration-300"
              >
                Me Contacter
              </a>
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border-gradient rounded-lg font-medium hover:bg-secondary/50 transition-all duration-300"
              >
                Voir mes projets
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mt-8"
            >
              <a href="#" className="p-3 glass rounded-lg hover:glow-primary transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 glass rounded-lg hover:glow-primary transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse-glow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-gradient p-1">
                <img
                  src={profileImg}
                  alt="Abderrahmane LABIED"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-lg"
              >
                <span className="text-sm font-mono text-primary">🏆 Brevet d'invention</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
