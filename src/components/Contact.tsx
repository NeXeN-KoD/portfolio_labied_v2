import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Me <span className="text-gradient">Contacter</span>
          </h2>
          <p className="text-muted-foreground">
            Une opportunité de stage ? Une question sur mes projets ? N'hésitez pas à m'écrire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-6 rounded-xl space-y-6">
              <h3 className="text-xl font-semibold mb-6">Coordonnées</h3>
              
              <a 
                href="mailto:abderrahmanelabied1@gmail.com" 
                className="flex items-start gap-4 group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">abderrahmanelabied1@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+212663018929" 
                className="flex items-start gap-4 group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Téléphone</p>
                  <p className="font-medium group-hover:text-primary transition-colors">+212 6 63 01 89 29</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Localisation</p>
                  <p className="font-medium">Maroc</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Simple Form (Design only - fonctionnel via mailto pour l'instant) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-xl"
          >
            <form 
              action="mailto:abderrahmanelabied1@gmail.com" 
              method="post" 
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Votre Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Votre Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Bonjour, je suis intéressé par votre profil..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:glow-primary transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;