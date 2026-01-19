import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import covoiturageImg from "@/assets/covoiturage.jpg";
import IoTimg from "@/assets/IoT.png";
import WISEImg from "@/assets/WISE.jpg";
import PLImg from "@/assets/PlatformeLocation.jpg";
import BLImg from "@/assets/BlockChain.jpeg";
import SuiviMarcheImg from "@/assets/AngularProjetMarche.jpeg";
import DOImg from "@/assets/DevopsOrch.jpg";
import AppTachesImg from "@/assets/AppTaches.jpeg";
import DOImg2 from "@/assets/DevOrch.jpg";
import CloudImg from "@/assets/CloudP.jpeg";

// NOTE: Pour utiliser vos propres images :
// 1. Mettez vos images dans le dossier src/assets/
// 2. Importez-les ici
// 3. Remplacez les liens URL ci-dessous par vos variables importées

const projects = [
  {
    title: "Plateforme de Covoiturage",
    description: "Application web (administration) et mobile (clients/conducteurs)",
    tech: ["Spring Boot", "React.js", "React Native"],
    featured: false,
    image: PLImg, 
  },
  {
    title: "DevOps & Orchestration",
    description: "Automatisation du déploiement d'une application web 3-tiers conteneurisée",
    tech: ["Kubernetes", "Ansible", "Docker"],
    featured: false,
    image: DOImg2
  },
  {
    title: "Gestion de Tâches Mobile",
    description: "Application mobile de productivité temps réel",
    tech: ["React Native", "Firebase"],
    featured: false,
    image: AppTachesImg,
  },
  {
    title: "Système IoT & Cloud",
    description: "Système de contrôle d'accès par barrière RFID avec remontée de données Cloud",
    tech: ["C++", "Python", "Node.js", "RFID"],
    featured: false,
    image: IoTimg,
  },
  {
    title: "Plateforme de Suivi des Marchés",
    description: "Tableau de bord interactif pour la visualisation des données de marché",
    tech: ["Angular", "TypeScript", "PostgreSQL"],
    featured: false,
    image: SuiviMarcheImg,
  },
    {
    title: "Vote électronique Blockchain Privée (React.js, Hyperledger Besu, ngrok)",
    description: "Système de vote décentralisé, sécurisé et transparent sur blockchain privée.",
    tech: ["React.js", "Hyperledger Besu", "ngrok"],
    featured: false,
    image: BLImg,
  },
  {
    title: "Système Intelligent de Sécurité Routière",
    description: "Solution innovante pour la prévention des accidents (Collision faune/véhicule)",
    tech: ["IoT", "IA", "Capteurs"],
    featured: true,
    isBrevet: true,
    image: WISEImg,
  },
    {
    title: "Application MLOps de Prédiction Météorologique",
    description: "Pipeline de prévision météo conteneurisé, sécurisé et déployé sur le Cloud avec monitoring et visualisation BI.",
    tech: ["Azure Web Apps", "Docker", "Power BI", "Microsoft Entra ID", "Random Forest"],
    featured: false,
    image: CloudImg,
  }
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
              className={`group relative glass rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 ${
                project.isBrevet ? "border-gradient" : ""
              }`}
            >
              {/* Badge Brevet */}
              {project.isBrevet && (
                <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
                  <Award className="w-3 h-3" />
                  Brevet
                </div>
              )}

              {/* Zone Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Zone Contenu */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  {/* MODIFICATION ICI : J'ai retiré 'line-clamp-1' pour afficher tout le titre */}
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2 mt-1" />
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2 py-1 bg-secondary rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;