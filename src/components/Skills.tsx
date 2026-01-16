import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Développement",
    skills: ["Java", "Python", "C", "JavaScript", "TypeScript", "PHP", "Dart", "Shell", "PL/SQL"],
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "Angular", "React.js", "React Native"],
  },
  {
    title: "Bases de Données",
    skills: ["PostgreSQL", "MySQL", "Oracle", "Firebase"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Jenkins", "Kubernetes", "Ansible", "CI/CD"],
  },
  {
    title: "Outils",
    skills: ["Git", "GitHub", "GitLab", "Jira", "Trello", "Postman", "VS Code", "IntelliJ"],
  },
];

const languages = [
  { name: "Arabe", level: "Langue maternelle", percent: 100 },
  { name: "Français", level: "Courant", percent: 90 },
  { name: "Anglais", level: "Technique / Courant", percent: 85 },
  { name: "Espagnol", level: "Niveau A2 (Élémentaire)", percent: 30 },
  { name: "Allemand", level: "Niveau B1 (Intermédiaire)", percent: 50 },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="text-gradient">Compétences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions innovantes
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="font-semibold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-secondary hover:bg-primary/20 rounded-lg text-sm font-mono cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 md:p-8"
        >
          <h3 className="font-semibold text-xl mb-6 text-center">Langues</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-muted-foreground">{lang.level}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
