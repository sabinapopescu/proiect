import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Mic, MicOff, Camera, CameraOff, PhoneOff } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const slides = [
  { caption: "Mesagerie Instantă", img: "/Gemini_Generated_Image_1.png" },
  { caption: "Rețele Sociale & Live", img: "/Gemini_Generated_Image_2.png" },
  { caption: "Videoconferințe", img: "/Gemini_Generated_Image_3.png" },
  { caption: "Platforme Colaborative", img: "/Gemini_Generated_Image_4.png" },
  { caption: "Metavers & Gaming", img: "/Gemini_Generated_Image_5.png" },
];

const platforms = [
  { emoji: "📸", name: "Instagram", tagline: "Stories, Reels și Lives — viața ta în cadre", stats: "2 miliarde", gradient: "from-pink-500/20 to-purple-600/20", details: "Funcții de comunicare: DM, Stories 24h, Reels scurte, Live în timp real cu followeri, Collab posts. Folosit de 71% din tinerii 18-29 ani." },
  { emoji: "🎵", name: "TikTok", tagline: "Videoclipuri scurte, comunități uriașe", stats: "1.5 miliarde", gradient: "from-cyan-500/20 to-pink-500/20", details: "TikTok Live permite interacțiune directă cu audiența, duete, comentarii în timp real, gifturi virtuale. Algoritmul personalizează complet experiența." },
  { emoji: "👻", name: "Snapchat", tagline: "Mesaje care dispar — dar amintirile rămân", stats: "750 milioane", gradient: "from-yellow-400/20 to-yellow-600/20", details: "Snaps foto/video cu durată limitată, Stories, Snap Map pentru localizare prieteni, Bitmoji avataruri. Primul care a inventat Stories!" },
  { emoji: "✈️", name: "Telegram", tagline: "Mesagerie rapidă, sigură și fără limite", stats: "900 milioane", gradient: "from-blue-400/20 to-blue-600/20", details: "Canale publice cu milioane de abonați, grupuri până la 200.000 membri, fișiere până la 2GB, chatboti, apeluri vocale și video criptate." },
  { emoji: "💚", name: "WhatsApp", tagline: "Cel mai popular messenger din lume", stats: "2+ miliarde", gradient: "from-green-400/20 to-green-600/20", details: "Mesaje text, vocale, video, apeluri gratuite, grupuri, statusuri, WhatsApp Business pentru firme." },
  { emoji: "🎮", name: "Discord", tagline: "Nu doar pentru gameri — pentru orice comunitate", stats: "150 milioane", gradient: "from-indigo-400/20 to-indigo-600/20", details: "Servere cu canale text + voice + video, boti personalizabili, screen sharing, comunități de nișă pentru orice hobby." },
  { emoji: "📹", name: "Zoom / Google Meet", tagline: "Școala online, interviuri, business", stats: "300 mil calls/zi", gradient: "from-blue-500/20 to-cyan-400/20", details: "Breakout rooms, whiteboard colaborativ, înregistrare automată, integrare cu Google Calendar, fundal virtual." },
  { emoji: "🤖", name: "ChatGPT / AI Chat", tagline: "Comunicarea cu inteligența artificială", stats: "100 mil în 2 luni", gradient: "from-emerald-400/20 to-teal-600/20", details: "O nouă formă de comunicare virtuală — cu AI. Folosit pentru teme, creativitate, programare, întrebări." },
];

const comparisonData = [
  { name: "Instagram", type: "Social/Visual", users: "2 mld", age: "18-34", feature: "Reels + Stories" },
  { name: "TikTok", type: "Video scurt", users: "1.5 mld", age: "16-24", feature: "Algoritm For You" },
  { name: "Snapchat", type: "Ephemeral", users: "750 mil", age: "15-25", feature: "Mesaje care dispar" },
  { name: "Telegram", type: "Mesagerie", users: "900 mil", age: "18-35", feature: "Canale + securitate" },
  { name: "WhatsApp", type: "Mesagerie", users: "2+ mld", age: "25-44", feature: "Criptare E2E" },
  { name: "Discord", type: "Comunitate", users: "150 mil", age: "16-30", feature: "Servere cu roluri" },
  { name: "Zoom", type: "Video pro", users: "300mil calls", age: "25-45", feature: "Business/Educație" },
];

const WebcamDemo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [streaming, setStreaming] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [ended, setEnded] = useState(false);
  const streamRef = useRef<MediaStream | null>(null);

  const startCamera = useCallback(async () => {
    try {
      setError(null);
      setEnded(false);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      setStreaming(true);
    } catch {
      setError("🔒 Ai blocat accesul la cameră. Verifică setările browserului!");
    }
  }, []);

  useEffect(() => {
    if (streaming && videoRef.current && streamRef.current) {
      videoRef.current.srcObject = streamRef.current;
      videoRef.current.play().catch(() => {});
    }
  }, [streaming]);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    if (videoRef.current) videoRef.current.srcObject = null;
    setStreaming(false);
    setEnded(true);
  }, []);

  const toggleCamera = useCallback(() => {
    if (!streamRef.current) return;
    const track = streamRef.current.getVideoTracks()[0];
    if (track) track.enabled = !track.enabled;
  }, []);

  return (
    <div className="glass-card rounded-2xl p-8">
      <h3 className="font-display font-bold text-xl mb-2 gradient-text">Încearcă comunicarea video în timp real! 📸</h3>
      <p className="text-muted-foreground text-sm mb-6">Activează camera și microfonul pentru a simula o videoconferință</p>

      {!streaming && !ended && (
        <button onClick={startCamera} className="glow-button gradient-accent px-8 py-4 rounded-xl font-semibold text-primary-foreground hover:scale-105 transition-transform text-lg">
          ▶️ Pornește Camera
        </button>
      )}

      {error && <p className="mt-4 text-sm text-neon-yellow">{error}</p>}

      {ended && (
        <div className="text-center py-8">
          <p className="text-2xl mb-4">Apel încheiat ✅</p>
          <button onClick={startCamera} className="glow-button gradient-accent px-6 py-3 rounded-xl font-semibold text-primary-foreground text-sm">
            Reconectare
          </button>
        </div>
      )}

      {streaming && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3 relative">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full rounded-2xl border-2 animate-border-glow"
            />
            <div className="absolute bottom-3 left-3 bg-background/70 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">
              Tu 🎥
            </div>
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-destructive/80 backdrop-blur px-2 py-1 rounded-full">
              <div className="w-2 h-2 rounded-full bg-destructive-foreground animate-pulse" />
              <span className="text-xs text-destructive-foreground font-medium">REC</span>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { name: "Maria 👩", color: "from-pink-500/30 to-purple-500/30" },
              { name: "Alexandru 👦", color: "from-blue-500/30 to-cyan-500/30" },
              { name: "Prof. Ionescu 👨‍🏫", color: "from-green-500/30 to-teal-500/30" },
            ].map((p, i) => (
              <div key={i} className={`rounded-xl aspect-video bg-gradient-to-br ${p.color} flex items-center justify-center border border-border/30`}>
                <span className="text-xs font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {streaming && (
        <div className="flex gap-3 justify-center mt-6">
          <button onClick={() => setMicOn(!micOn)} className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition">
            {micOn ? <Mic size={20} /> : <MicOff size={20} className="text-destructive" />}
          </button>
          <button onClick={toggleCamera} className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition">
            <Camera size={20} />
          </button>
          <button onClick={stopCamera} className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center hover:bg-destructive/80 transition">
            <PhoneOff size={20} className="text-destructive-foreground" />
          </button>
        </div>
      )}

      <div className="mt-6 tip-box">
        <p className="text-sm text-justify">Aceasta este tehnologia <strong>WebRTC</strong> folosită de Zoom, Meet și FaceTime! Permite comunicare video peer-to-peer direct în browser.</p>
      </div>
    </div>
  );
};

const Aplicatii = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px]" />
        </div>
        <div className="section-container relative z-10 text-center">
          <h1 className="text-3xl sm:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">📱 Aplicațiile pe care le folosim zi de zi</span>
          </h1>
        </div>
      </section>

      <div className="section-container pb-16">
        {/* Carousel */}
        <ScrollFadeIn>
          <section className="mb-20" aria-label="Carusel">
            <div className="relative rounded-2xl overflow-hidden shadow-neon">
              <div className="aspect-[16/7] relative">
                <img
                  src={slides[current].img}
                  alt={slides[current].caption}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <p className="absolute bottom-6 left-6 right-6 text-foreground font-display font-semibold text-xl">
                  {slides[current].caption}
                </p>
              </div>
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/60 backdrop-blur flex items-center justify-center hover:bg-card/80 transition" aria-label="Anterior">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/60 backdrop-blur flex items-center justify-center hover:bg-card/80 transition" aria-label="Următor">
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-foreground/30"}`} aria-label={`Slide ${i + 1}`} />
                ))}
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Platform Cards */}
        <ScrollFadeIn>
          <section className="mb-20" aria-label="Platforme">
            <h2 className="text-2xl font-display font-semibold mb-8 gradient-text">🔥 Platform Deep-Dives</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {platforms.map((p, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className={`glass-card rounded-2xl overflow-hidden bg-gradient-to-br ${p.gradient}`}
                >
                  <div className="p-5">
                    <span className="text-3xl block mb-2">{p.emoji}</span>
                    <h3 className="font-display font-bold text-lg mb-1">{p.name}</h3>
                    <p className="text-muted-foreground text-xs text-justify mb-3">{p.tagline}</p>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/20">
                      {p.stats}
                    </span>
                  </div>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="d" className="border-t border-border/30">
                      <AccordionTrigger className="px-5 text-xs font-medium text-primary">Află mai mult</AccordionTrigger>
                      <AccordionContent className="px-5 pb-4 text-xs text-muted-foreground text-justify">{p.details}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollFadeIn>

        {/* Comparison Table */}
        <ScrollFadeIn>
          <section className="mb-20" aria-label="Tabel comparativ">
            <h2 className="text-2xl font-display font-semibold mb-8 gradient-text">📊 Tabel Comparativ</h2>
            <div className="overflow-x-auto rounded-2xl neon-border">
              <table className="w-full border-collapse" role="table">
                <thead>
                  <tr className="gradient-accent text-primary-foreground text-sm">
                    <th className="p-4 text-left font-display">Aplicație</th>
                    <th className="p-4 text-left font-display">Tip principal</th>
                    <th className="p-4 text-left font-display">Utilizatori</th>
                    <th className="p-4 text-left font-display">Vârstă medie</th>
                    <th className="p-4 text-left font-display">Caracteristică unică</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? "bg-card/60" : "bg-card/30"} text-sm hover:bg-primary/5 transition-colors`}>
                      <td className="p-4 border-b border-border/20 font-semibold">{row.name}</td>
                      <td className="p-4 border-b border-border/20">{row.type}</td>
                      <td className="p-4 border-b border-border/20">{row.users}</td>
                      <td className="p-4 border-b border-border/20">{row.age}</td>
                      <td className="p-4 border-b border-border/20">{row.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Videochat Section */}
        <ScrollFadeIn>
          <section className="mb-20" aria-label="Videochat">
            <h2 className="text-2xl font-display font-semibold mb-6 gradient-text">📹 VIDEOCHAT — Comunicare față în față, digital</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-justify text-foreground/90">
              <p>Videochat-ul (sau videocall-ul) este un mijloc de comunicare virtuală care permite interacțiunea în timp real prin transmiterea simultană de video și audio. Este cea mai apropiată formă de comunicare față-în-față în mediul digital.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Personal", emoji: "📱", example: "FaceTime" },
                  { label: "Profesional", emoji: "💼", example: "Zoom" },
                  { label: "Educațional", emoji: "🎓", example: "Google Meet" },
                  { label: "Social", emoji: "🎉", example: "IG Live" },
                ].map((t, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-muted/30">
                    <span className="text-2xl block mb-1">{t.emoji}</span>
                    <p className="text-xs font-semibold">{t.label}</p>
                    <p className="text-xs text-muted-foreground">{t.example}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Tehnologia din spate: <strong>WebRTC</strong> (Web Real-Time Communication) — un protocol open-source care permite transmiterea de date multimedia direct în browser, fără plugin-uri.</p>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Webcam Demo */}
        <ScrollFadeIn>
          <section aria-label="Demo cameră">
            <WebcamDemo />
          </section>
        </ScrollFadeIn>
      </div>
    </Layout>
  );
};

export default Aplicatii;
