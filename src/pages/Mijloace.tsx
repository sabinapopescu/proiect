import { useState } from "react";
import {
  MessageCircle, Video, Users, Gamepad2, Mail, Camera,
  ChevronLeft, ChevronRight
} from "lucide-react";
import Layout from "@/components/Layout";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const slides = [
  { caption: "Aplicații de Mesagerie Instantă", seed: 100 },
  { caption: "Platforme de Videoconferință", seed: 200 },
  { caption: "Rețele Sociale", seed: 300 },
  { caption: "Email și Comunicare Profesională", seed: 400 },
  { caption: "Platforme Collaborative", seed: 500 },
];

const platforms = [
  {
    icon: MessageCircle,
    name: "WhatsApp",
    short: "Mesagerie instantă, apeluri vocale și video, grupuri.",
    details: "WhatsApp este una dintre cele mai populare aplicații de mesagerie din lume, cu peste 2 miliarde de utilizatori activi. Oferă criptare end-to-end, partajare de fișiere multimedia, apeluri vocale și video, și funcții de grup pentru până la 1024 de persoane.",
  },
  {
    icon: Video,
    name: "Zoom",
    short: "Videoconferințe profesionale și întâlniri virtuale.",
    details: "Zoom a devenit sinonim cu videoconferința în era pandemiei. Oferă întâlniri cu până la 1000 de participanți, partajare de ecran, înregistrare, breakout rooms, și integrări cu diverse aplicații de productivitate.",
  },
  {
    icon: Users,
    name: "Microsoft Teams",
    short: "Colaborare în echipă, chat, documente partajate.",
    details: "Microsoft Teams combină chat-ul, videoconferințele, stocarea fișierelor și integrarea cu aplicațiile Office 365. Este soluția preferată de corporații pentru comunicare internă și colaborare în echipă.",
  },
  {
    icon: Gamepad2,
    name: "Discord",
    short: "Comunități online, gaming, servere tematice.",
    details: "Inițial creat pentru gameri, Discord s-a extins ca platformă de comunitate cu servere, canale text și vocale, streaming, și bot-uri personalizabile. Peste 150 de milioane de utilizatori activi lunar.",
  },
  {
    icon: Mail,
    name: "Gmail / Outlook",
    short: "Comunicare formală prin email profesional.",
    details: "Email-ul rămâne canalul principal de comunicare formală. Gmail (Google) și Outlook (Microsoft) domină piața, oferind filtrare inteligentă, calendar integrat, și spațiu generos de stocare.",
  },
  {
    icon: Camera,
    name: "Instagram / TikTok",
    short: "Rețele sociale vizuale cu conținut multimedia.",
    details: "Instagram și TikTok au revoluționat comunicarea vizuală prin stories, reels și videoclipuri scurte. Sunt platforme esențiale pentru marketing digital, influencer marketing și comunicare informală.",
  },
];

const comparisonData = [
  { name: "WhatsApp", type: "Mesagerie", users: "2000+", free: "Da", usage: "Personal" },
  { name: "Zoom", type: "Video", users: "300+", free: "Parțial", usage: "Business" },
  { name: "Teams", type: "Colaborare", users: "320+", free: "Parțial", usage: "Corporate" },
  { name: "Discord", type: "Comunitate", users: "150+", free: "Da", usage: "Gaming/Community" },
  { name: "Gmail", type: "Email", users: "1800+", free: "Da", usage: "Formal" },
];

const Mijloace = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="gradient-hero py-16 text-center">
        <div className="section-container">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-2">
            Principalele Mijloace de Comunicare Virtuală
          </h1>
          <p className="text-primary-foreground/70">Descoperă platformele care definesc comunicarea digitală</p>
        </div>
      </section>

      <div className="section-container py-16">
        {/* Carousel */}
        <ScrollFadeIn>
          <section className="mb-20" aria-label="Carusel platforme">
            <div className="relative rounded-2xl overflow-hidden shadow-card bg-card">
              <div className="aspect-[16/7] relative">
                <img
                  src={`https://picsum.photos/seed/${slides[current].seed}/1200/500`}
                  alt={slides[current].caption}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <p className="absolute bottom-6 left-6 right-6 text-primary-foreground font-display font-semibold text-xl">
                  {slides[current].caption}
                </p>
              </div>

              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center hover:bg-card transition"
                aria-label="Slide anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center hover:bg-card transition"
                aria-label="Slide următor"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === current ? "bg-accent w-6" : "bg-primary-foreground/40"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* Platform Cards */}
        <ScrollFadeIn>
          <section className="mb-20" aria-label="Platforme">
            <h2 className="text-2xl font-display font-semibold mb-8 border-l-4 border-primary pl-4">Platforme Populare</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((p, i) => (
                <div key={i} className="glass-card rounded-xl overflow-hidden">
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4">
                      <p.icon size={24} className="text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">{p.name}</h3>
                    <p className="text-muted-foreground text-sm text-justify mb-4">{p.short}</p>
                  </div>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="details" className="border-t border-border">
                      <AccordionTrigger className="px-6 text-sm font-medium text-primary">
                        Află mai mult
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground text-justify">
                        {p.details}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </section>
        </ScrollFadeIn>

        {/* Comparison Table */}
        <ScrollFadeIn>
          <section aria-label="Tabel comparativ">
            <h2 className="text-2xl font-display font-semibold mb-8 border-l-4 border-primary pl-4">Tabel Comparativ</h2>
            <div className="overflow-x-auto rounded-xl shadow-card">
              <table className="w-full border-collapse" role="table">
                <thead>
                  <tr className="gradient-hero text-primary-foreground text-sm">
                    <th className="p-4 text-left font-display">Platformă</th>
                    <th className="p-4 text-left font-display">Tip</th>
                    <th className="p-4 text-left font-display">Utilizatori (mil.)</th>
                    <th className="p-4 text-left font-display">Gratuit</th>
                    <th className="p-4 text-left font-display">Utilizare</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? "bg-muted/50" : "bg-card"} text-sm`}>
                      <td className="p-4 border-b border-border font-semibold">{row.name}</td>
                      <td className="p-4 border-b border-border">{row.type}</td>
                      <td className="p-4 border-b border-border">{row.users}</td>
                      <td className="p-4 border-b border-border">{row.free}</td>
                      <td className="p-4 border-b border-border">{row.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </ScrollFadeIn>
      </div>
    </Layout>
  );
};

export default Mijloace;
