import { motion } from "framer-motion";
import { ExternalLink, Folder, Award } from "lucide-react";

const projects = [
  {
    title: "Plateforme de Covoiturage",
    description: "Application web (administration) et mobile (clients/conducteurs)",
    tech: ["Spring Boot", "React.js", "React Native"],
    featured: false,
  },
  {
    title: "DevOps & Orchestration",
    description: "Automatisation du déploiement d'une application web 3-tiers conteneurisée",
    tech: ["Kubernetes", "Ansible", "Docker"],
    featured: false,
  },
  {
    title: "Gestion de Tâches Mobile",
    description: "Application mobile de productivité temps réel",
    tech: ["React Native", "Firebase"],
    featured: false,
  },
  {
    title: "Système IoT & Cloud",
    description: "Système de contrôle d'accès par barrière RFID avec remontée de données Cloud",
    tech: ["C++", "Python", "Node.js", "RFID"],
    featured: false,
  },
  {
    title: "Plateforme de Suivi des Marchés",
    description: "Tableau de bord interactif pour la visualisation des données de marché",
    tech: ["Angular", "TypeScript", "PostgreSQL"],
    featured: false,
  },
  {
    title: "Système Intelligent de Sécurité Routière",
    description: "Solution innovante pour la prévention des accidents (Collision faune/véhicule)",
    tech: ["IoT", "Intelligence Artificielle", "Capteurs"],
    featured: true,
    isBrevet: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projets <span className="text-gradient">Académiques</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des projets variés démontrant mes compétences en développement Fullstack et innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 ${
                project.isBrevet ? "border-gradient" : ""
              }`}
            >
              {project.isBrevet && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  Brevet
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Folder className="w-5 h-5 text-primary" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2 py-1 bg-secondary rounded-md text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
