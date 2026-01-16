import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Me <span className="text-gradient">Contacter</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-6">Informations de contact</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:abderrahmanelabied1@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-sm font-medium">abderrahmanelabied1@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+212663018929"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Téléphone</p>
                    <p className="text-sm font-medium">+212 6 63 01 89 29</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localisation</p>
                    <p className="text-sm font-medium">Sala Al Jadida, Maroc</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Actuellement à la recherche d'un <span className="text-primary font-medium">stage PFE</span> en développement Fullstack. 
                Je suis disponible pour discuter de toute opportunité qui pourrait correspondre à mon profil.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6"
          >
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Votre message..."
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:glow-primary transition-all duration-300"
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
