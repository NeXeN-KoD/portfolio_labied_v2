import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Stagiaire Assistant Ingénieur",
    company: "DigiArch-Solution",
    period: "Juin 2025 – Août 2025",
    description: "Développement d'une plateforme web de location de véhicules avec Spring Boot, React.js et MySQL",
  },
  {
    type: "work",
    title: "Stagiaire Technicien",
    company: "DigiArch-Solution",
    period: "Juin 2024 – Août 2024",
    description: "Conception et implémentation d'un système de paiement sécurisé avec Spring Boot et Spring Data JPA",
  },
  {
    type: "work",
    title: "Stage Ouvrier",
    company: "Ministère de l'Économie et des Finances",
    period: "Juillet 2023 – Août 2023",
    description: "Réalisation d'un site vitrine institutionnel avec HTML, CSS, PHP, MySQL",
  },
];

const education = [
  {
    title: "Cycle Ingénieur en Génie Informatique",
    school: "Université Internationale de Rabat (UIR)",
    period: "2023 – Présent",
  },
  {
    title: "Classes Préparatoires Intégrées",
    school: "Université Internationale de Rabat (UIR)",
    period: "2021 – 2023",
  },
  {
    title: "Baccalauréat Sciences Physiques",
    school: "Lycée Adam, Sala Al Jadida",
    period: "2020 – 2021",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mon <span className="text-gradient">Parcours</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une combinaison d'expériences professionnelles et académiques solides
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Expérience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-primary" />
                  <span className="text-xs font-mono text-primary">{exp.period}</span>
                  <h4 className="font-semibold mt-1">{exp.title}</h4>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-accent/10 rounded-lg">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Formation</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 border-l-2 border-border hover:border-accent transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-accent" />
                  <span className="text-xs font-mono text-accent">{edu.period}</span>
                  <h4 className="font-semibold mt-1">{edu.title}</h4>
                  <p className="text-sm text-muted-foreground">{edu.school}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
