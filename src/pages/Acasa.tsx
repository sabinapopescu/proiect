import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import FloatingEmojis from "@/components/FloatingEmojis";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { useEffect, useState } from "react";

const stats = [
  { value: 5.04, suffix: " mld", label: "utilizatori de internet 🌍", decimals: 2 },
  { value: 2, suffix: "+ ore/zi", label: "pe rețele sociale 📱", decimals: 0 },
  { value: 500, suffix: " ore/min", label: "video pe YouTube 🎬", decimals: 0 },
  { value: 23, suffix: " mld/zi", label: "mesaje pe WhatsApp 💬", decimals: 0 },
];

const AnimatedCounter = ({ value, suffix, decimals }: { value: number; suffix: string; decimals: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{count.toFixed(decimals)}{suffix}</span>;
};

const features = [
  { emoji: "💬", title: "Fără față în față — dar tot real", desc: "Emoțiile, ideile și prieteniile se construiesc și prin ecran." },
  { emoji: "⚡", title: "Instant, 24/7, de oriunde", desc: "Un mesaj ajunge în secunde la oricine, oricând, oriunde pe planetă." },
  { emoji: "🌍", title: "Cu toată lumea de pe planetă", desc: "Barierele geografice au dispărut. Comunicăm global din pat." },
];

const genZ = ["TikTok Live", "Stories & Reels", "Voice messages", "Memes & GIF-uri", "Discord servers", "BeReal"];
const genParents = ["Telefon fix", "Scrisori poștale", "Email formal", "Yahoo Messenger", "SMS la 10 bani", "Agenda de telefon"];

const Acasa = () => (
  <Layout>
    <FloatingEmojis />

    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero">
      {/* Background glow */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6"
        >
          <span className="gradient-text">Comunicăm. Conectăm.</span>
          <br />
          <span className="gradient-text-neon">Trăim Online. 🔥</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Tot ce trebuie să știi despre cum comunicăm în era digitală
        </motion.p>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-48 h-80 mb-10 animate-phone-float hidden sm:block"
          aria-hidden="true"
        >
          <div className="w-full h-full rounded-[2rem] border-2 border-border bg-card/60 backdrop-blur-sm p-2">
            <div className="w-full h-full rounded-[1.5rem] bg-gradient-to-b from-primary/20 via-secondary/10 to-accent/20 flex flex-col items-center justify-center gap-3">
              <span className="text-4xl">💬</span>
              <div className="w-20 h-2 rounded-full bg-primary/40" />
              <div className="w-16 h-2 rounded-full bg-secondary/30" />
              <div className="w-12 h-2 rounded-full bg-accent/30" />
            </div>
          </div>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-background" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/teorie"
            className="glow-button gradient-accent px-8 py-3.5 rounded-xl font-semibold text-sm text-primary-foreground transition-transform hover:scale-105"
          >
            Intră în lumea virtuală 🚀
          </Link>
          <Link
            to="/quiz"
            className="glow-button-blue px-8 py-3.5 rounded-xl font-semibold text-sm border border-accent text-accent hover:bg-accent/10 transition-all hover:scale-105"
          >
            Dă-ți cu quiz-ul 🎯
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 relative z-10" aria-label="Statistici">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <ScrollFadeIn key={i} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-6 text-center hover:shadow-card-hover transition-shadow">
                <div className="text-2xl sm:text-3xl font-display font-bold gradient-text mb-1">
                  <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm">{s.label}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-16 relative z-10" aria-label="Ce înseamnă">
      <div className="section-container">
        <ScrollFadeIn>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-12">
            <span className="gradient-text">Ce înseamnă să comunici virtual?</span>
          </h2>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <ScrollFadeIn key={i} delay={i * 0.15}>
              <div className="glass-card rounded-2xl p-8 text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group">
                <span className="text-5xl block mb-4 group-hover:scale-110 transition-transform">{f.emoji}</span>
                <h3 className="font-display font-semibold text-lg mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm text-justify">{f.desc}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Generation comparison */}
    <section className="py-16 relative z-10" aria-label="Comparație generații">
      <div className="section-container max-w-4xl">
        <ScrollFadeIn>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-center mb-12">
            <span className="gradient-text-neon">Cum comunicăm noi vs. părinții noștri</span>
          </h2>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollFadeIn delay={0.1}>
            <div className="glass-card rounded-2xl p-8 border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 gradient-accent" />
              <h3 className="font-display font-bold text-xl mb-6 text-center">Generația noastră 😎</h3>
              <ul className="space-y-3">
                {genZ.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.2}>
            <div className="glass-card rounded-2xl p-8 border-muted/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-muted-foreground/30" />
              <h3 className="font-display font-bold text-xl mb-6 text-center">Generația lor 😅</h3>
              <ul className="space-y-3">
                {genParents.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  </Layout>
);

export default Acasa;
