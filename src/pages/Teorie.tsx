import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const commTypes = [
  {
    emoji: "💬",
    title: "TEXT",
    desc: "Cea mai veche formă de comunicare digitală — de la SMS-uri la DM-uri, email-uri și comentarii.",
    platforms: ["WhatsApp", "Email", "Discord"],
  },
  {
    emoji: "🎙️",
    title: "AUDIO",
    desc: "Voice messages, podcasturi și apeluri — intimitatea vocii, fără ecran.",
    platforms: ["Spotify", "Clubhouse", "WhatsApp"],
  },
  {
    emoji: "📹",
    title: "VIDEO",
    desc: "De la videocall la live streaming și reels — comunicarea cea mai expresivă.",
    platforms: ["Zoom", "TikTok", "YouTube"],
  },
  {
    emoji: "🌐",
    title: "METAVERS",
    desc: "VR, gaming, avataruri — viitorul comunicării în spații 3D imersive.",
    platforms: ["Roblox", "VRChat", "Fortnite"],
  },
];

const syncItems = [
  { label: "FaceTime", type: "sync" },
  { label: "Zoom", type: "sync" },
  { label: "IG Live", type: "sync" },
  { label: "Telefon", type: "sync" },
];

const asyncItems = [
  { label: "Email", type: "async" },
  { label: "Story", type: "async" },
  { label: "TikTok", type: "async" },
  { label: "Scrisoare", type: "async" },
];

const flipCards = [
  { front: "🌍 Accesibilitate globală", back: "Poți vorbi cu oricine, de oriunde, la orice oră. Barierele geografice au dispărut complet.", type: "pro" },
  { front: "💸 Cost redus", back: "Majoritatea aplicațiilor sunt gratuite. Nu mai plătești SMS-uri sau convorbiri internaționale.", type: "pro" },
  { front: "⏰ Flexibilitate", back: "Comunici când vrei tu. Voice message-uri, stories — totul e la ritmul tău.", type: "pro" },
  { front: "👻 Lipsa contactului fizic", back: "Empatia și conexiunea reală suferă. Emoji-urile nu înlocuiesc o îmbrățișare.", type: "con" },
  { front: "🔒 Riscuri de securitate", back: "Datele tale pot fi furate, contul spart, identitatea falsificată online.", type: "con" },
  { front: "🧠 Supraîncărcare info", back: "Prea multe notificări, prea multe mesaje. Creierul tău are nevoie de pauze!", type: "con" },
];

const netiquette = [
  "🔇 Nu țipa cu MAJUSCULE — e ca și cum ai striga în față cuiva",
  "⏱️ Răspunde la mesaje — ghosting-ul e rude, bro",
  "🔒 Respectă confidențialitatea — nu da share la conversații private",
  "🧠 Gândește înainte să postezi — internetul nu uită niciodată",
  "🚫 Nu face spam — nimeni nu vrea 47 de mesaje la rând",
  "🎭 Fii autentic — fake accounts = bad vibes",
  "📝 Adaptează tonul — altfel vorbești cu prietenii vs. profesorii",
  "💜 Fii respectuos — în spatele fiecărui ecran e o persoană reală",
];

const sections = [
  "Ce-i aia comunicare virtuală?",
  "Tipuri de comunicare",
  "Sincron vs. Asincron",
  "Avantaje & Dezavantaje",
  "Neticheta",
  "Video",
];

const FlipCard = ({ front, back, type }: { front: string; back: string; type: string }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="cursor-pointer h-48 perspective-1000"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className={`absolute inset-0 rounded-2xl p-6 flex items-center justify-center text-center font-display font-semibold text-lg glass-card ${
            type === "pro" ? "border-success/30" : "border-destructive/30"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {front}
        </div>
        <div
          className={`absolute inset-0 rounded-2xl p-6 flex items-center justify-center text-center text-sm text-muted-foreground glass-card ${
            type === "pro" ? "border-success/30" : "border-destructive/30"
          }`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

const Teorie = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <Layout>
      <div className="py-16 relative">
        {/* Side progress */}
        <div className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col gap-2 z-40">
          {sections.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveSection(i);
                document.getElementById(`section-${i}`)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                activeSection === i ? "bg-primary scale-125 shadow-neon" : "bg-muted hover:bg-muted-foreground"
              }`}
              title={s}
              aria-label={s}
            />
          ))}
        </div>

        <div className="section-container">
          <ScrollFadeIn>
            <h1 className="text-3xl sm:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">📚 Teorie</span>
            </h1>
            <p className="text-muted-foreground mb-16">Tot ce trebuie să știi, explicat pe limba ta.</p>
          </ScrollFadeIn>

          {/* Section 1 */}
          <ScrollFadeIn>
            <section id="section-0" className="mb-20" aria-label="Introducere">
              <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-8 rounded-full gradient-accent inline-block" />
                Ce-i aia comunicare virtuală?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-3 space-y-4 text-justify text-foreground/90 leading-relaxed">
                  <p>Comunicarea virtuală e tot ce faci când trimiți un mesaj, dai un videocall sau postezi un story. E modul în care generația noastră se conectează — prin ecrane, aplicații și internet. Nu mai e nevoie să fii în aceeași cameră cu cineva ca să comunici.</p>
                  <p>Totul a început cu telegraful, a continuat cu telefonul, și a explodat odată cu internetul. De la primul email din 1971 până la TikTok Live în 2024 — comunicarea virtuală a evoluat mai rapid decât orice alt aspect al vieții noastre.</p>
                </div>
                <div className="md:col-span-2">
                  <img
                    src="https://picsum.photos/800/500?random=10"
                    alt="Comunicare virtuală"
                    className="rounded-2xl w-full h-48 md:h-full object-cover border border-border/30"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-6 glass-card rounded-xl p-5 border-neon-yellow/30">
                <p className="text-sm text-justify">
                  💡 <strong>Știai că?</strong> Primul email din lume a fost trimis în 1971 de Ray Tomlinson către el însuși. Mesajul? Probabil ceva de genul "test test 123" 😂
                </p>
              </div>
            </section>
          </ScrollFadeIn>

          {/* Section 2: Types */}
          <ScrollFadeIn>
            <section id="section-1" className="mb-20" aria-label="Tipuri">
              <h2 className="text-2xl font-display font-semibold mb-8 flex items-center gap-2">
                <span className="w-1.5 h-8 rounded-full gradient-accent inline-block" />
                Tipuri de comunicare — explicate pe înțelesul tău
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {commTypes.map((t, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-2xl p-6 hover:shadow-card-hover transition-shadow"
                  >
                    <span className="text-4xl block mb-3">{t.emoji}</span>
                    <h3 className="font-display font-bold text-xl mb-2 gradient-text">{t.title}</h3>
                    <p className="text-muted-foreground text-sm text-justify mb-4">{t.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {t.platforms.map((p) => (
                        <span key={p} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/20">
                          {p}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </ScrollFadeIn>

          {/* Section 3: Sync vs Async */}
          <ScrollFadeIn>
            <section id="section-2" className="mb-20" aria-label="Sincron vs Asincron">
              <h2 className="text-2xl font-display font-semibold mb-8 flex items-center gap-2">
                <span className="w-1.5 h-8 rounded-full gradient-accent inline-block" />
                Sincron vs. Asincron — nu e un film SF
              </h2>
              <div className="glass-card rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-display font-bold text-lg mb-4 text-success flex items-center gap-2">
                      ⚡ SINCRON <span className="text-xs text-muted-foreground font-normal">(în timp real)</span>
                    </h3>
                    <div className="space-y-3">
                      {syncItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                          <span className="text-sm font-medium">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-4 text-accent flex items-center gap-2">
                      ⏳ ASINCRON <span className="text-xs text-muted-foreground font-normal">(cu întârziere)</span>
                    </h3>
                    <div className="space-y-3">
                      {asyncItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-3 h-3 rounded-full bg-accent" />
                          <span className="text-sm font-medium">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* Section 4: Flip cards */}
          <ScrollFadeIn>
            <section id="section-3" className="mb-20" aria-label="Avantaje și Dezavantaje">
              <h2 className="text-2xl font-display font-semibold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-8 rounded-full gradient-accent inline-block" />
                Avantaje & Dezavantaje
              </h2>
              <p className="text-muted-foreground text-sm mb-8">Click pe card pentru a vedea explicația 👆</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {flipCards.map((card, i) => (
                  <FlipCard key={i} {...card} />
                ))}
              </div>
            </section>
          </ScrollFadeIn>

          {/* Section 5: Netiquette */}
          <ScrollFadeIn>
            <section id="section-4" className="mb-20" aria-label="Neticheta">
              <h2 className="text-2xl font-display font-semibold mb-8 flex items-center gap-2">
                <span className="w-1.5 h-8 rounded-full gradient-accent inline-block" />
                📜 Neticheta — regulile nescrise ale internetului
              </h2>
              <div className="space-y-4">
                {netiquette.map((rule, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card rounded-xl p-4 flex gap-4 items-center hover:shadow-card-hover transition-shadow"
                  >
                    <span className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-foreground/90 text-sm text-justify">{rule}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 tip-box flex gap-3 items-start">
                <Lightbulb size={24} className="text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium text-sm text-justify">
                  <strong>Pro tip:</strong> Tratează fiecare persoană online exact cum ai trata-o față în față. Empatia nu are nevoie de WiFi! 💜
                </p>
              </div>
            </section>
          </ScrollFadeIn>

          {/* Section 6: Video */}
          <ScrollFadeIn>
            <section id="section-5" aria-label="Video">
              <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-8 rounded-full gradient-accent inline-block" />
                🎬 Urmărește: Cum a evoluat comunicarea digitală
              </h2>
              <div className="flex justify-center">
                <div className="w-full" style={{ maxWidth: "65%" }}>
                  <div className="relative pb-[56.25%] rounded-2xl overflow-hidden shadow-neon">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/YygP-PEzSGg"
                      title="Evoluția comunicării digitale"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-center text-muted-foreground text-sm mt-4 italic">
                    Video despre evoluția comunicării în era digitală 🎥
                  </p>
                </div>
              </div>
            </section>
          </ScrollFadeIn>
        </div>
      </div>
    </Layout>
  );
};

export default Teorie;
