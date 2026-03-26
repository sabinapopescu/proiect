import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Wifi, Mail, Video, Globe, TrendingUp, HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const floatingIcons = [
  { Icon: MessageCircle, className: "top-[15%] left-[10%] animate-float text-primary-foreground/20", size: 32 },
  { Icon: Wifi, className: "top-[25%] right-[15%] animate-float-reverse text-primary-foreground/15", size: 40 },
  { Icon: Mail, className: "bottom-[30%] left-[20%] animate-float-reverse text-primary-foreground/20", size: 28 },
  { Icon: Video, className: "bottom-[20%] right-[10%] animate-float text-primary-foreground/15", size: 36 },
  { Icon: MessageCircle, className: "top-[50%] left-[50%] animate-float text-primary-foreground/10", size: 24 },
  { Icon: Wifi, className: "top-[10%] right-[40%] animate-pulse-glow text-primary-foreground/20", size: 20 },
];

const features = [
  {
    icon: HelpCircle,
    title: "Ce este comunicarea virtuală?",
    desc: "Transmiterea informațiilor prin intermediul tehnologiei digitale, folosind internet, dispozitive electronice și platforme software.",
  },
  {
    icon: Globe,
    title: "De ce contează?",
    desc: "Peste 4,9 miliarde de oameni comunică online. Comunicarea virtuală a devenit esențială în educație, afaceri și viața socială.",
  },
  {
    icon: TrendingUp,
    title: "Cum evoluează?",
    desc: "De la email și chat la metaverse și realitate virtuală — comunicarea digitală se reinventează continuu prin AI și tehnologii imersive.",
  },
];

const Acasa = () => (
  <Layout>
    {/* Hero */}
    <section className="relative gradient-hero min-h-[85vh] flex items-center overflow-hidden" aria-label="Secțiunea principală">
      {floatingIcons.map(({ Icon, className, size }, i) => (
        <div key={i} className={`absolute ${className}`} aria-hidden="true">
          <Icon size={size} />
        </div>
      ))}

      <div className="section-container relative z-10 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6"
        >
          Comunicarea în Spații Virtuale
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
        >
          Explorează lumea digitală a comunicării moderne
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/teorie"
            className="px-8 py-3.5 rounded-lg font-semibold text-sm bg-primary-foreground text-secondary transition-transform hover:scale-105"
          >
            Descoperă Teoria
          </Link>
          <Link
            to="/quiz"
            className="px-8 py-3.5 rounded-lg font-semibold text-sm border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all"
          >
            Testează-te
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20" aria-label="Caracteristici">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <ScrollFadeIn key={i} delay={i * 0.15}>
              <div className="glass-card rounded-xl p-8 hover:shadow-card-hover transition-shadow h-full">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-5">
                  <f.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm text-justify">{f.desc}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Acasa;
