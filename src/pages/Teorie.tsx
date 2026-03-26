import {
  Clock, Globe, Eye, ShieldOff, Archive, UserX,
  MessageSquare, Phone, Video, Share2, Glasses,
  CheckCircle2, XCircle, Lightbulb
} from "lucide-react";
import Layout from "@/components/Layout";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const characteristics = [
  { icon: Clock, label: "Asincronă vs. sincronă", desc: "Comunicarea poate fi în timp real sau cu decalaj temporal." },
  { icon: Eye, label: "Lipsa limbajului nonverbal", desc: "Expresiile faciale și gestica sunt absente în comunicarea text." },
  { icon: Globe, label: "Comunicare la distanță", desc: "Elimină barierele geografice între participanți." },
  { icon: Globe, label: "Accesibilitate globală", desc: "Oricine cu internet poate participa la comunicare." },
  { icon: Archive, label: "Persistența mesajelor", desc: "Mesajele pot fi stocate și accesate ulterior." },
  { icon: UserX, label: "Anonimatul opțional", desc: "Utilizatorii pot alege să-și ascundă identitatea." },
];

const commTypes = [
  { icon: MessageSquare, title: "Comunicarea prin text", desc: "Email, chat, SMS, forumuri online — cea mai veche formă de comunicare digitală, esențială în mediul profesional și personal." },
  { icon: Phone, title: "Comunicarea audio", desc: "Apeluri VoIP, podcasturi, conferințe audio — transmiterea vocii prin internet, o alternativă eficientă la telefonul clasic." },
  { icon: Video, title: "Comunicarea video", desc: "Videoconferințe, streaming live, vlogging — permite comunicarea față-în-față la distanță, cu impact emoțional sporit." },
  { icon: Share2, title: "Comunicarea prin rețele sociale", desc: "Postări, stories, reels — platforme care facilitează interacțiunea socială și partajarea conținutului multimedia." },
  { icon: Glasses, title: "Comunicarea în medii virtuale", desc: "Metaverse, VR, gaming — noi frontiere ale comunicării imersive în spații tridimensionale." },
];

const advantages = [
  ["Accesibilitate globală", "Lipsa contactului fizic"],
  ["Cost redus", "Riscuri de securitate"],
  ["Flexibilitate temporală", "Supraîncărcare informațională"],
  ["Arhivarea conversațiilor", "Dependența de tehnologie"],
  ["Comunicare multimedia", "Bariere digitale"],
];

const netiquette = [
  "Folosește un limbaj respectuos și politicos în toate interacțiunile online.",
  "Nu scrie cu MAJUSCULE — este echivalentul țipatului în mediul virtual.",
  "Respectă confidențialitatea și datele personale ale celorlalți.",
  "Verifică informațiile înainte de a le distribui (combate dezinformarea).",
  "Răspunde la mesaje într-un timp rezonabil, nu ignora interlocutorii.",
  "Evită spam-ul și mesajele repetitive nesolicitate.",
  "Adaptează-ți tonul la contextul comunicării (formal vs. informal).",
  "Cere permisiunea înainte de a distribui conținut al altcuiva.",
];

const Teorie = () => (
  <Layout>
    <div className="py-16">
      <div className="section-container">
        <ScrollFadeIn>
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">Comunicarea în Spații Virtuale</h1>
          <p className="text-muted-foreground mb-12">Teorie completă despre comunicarea digitală modernă</p>
        </ScrollFadeIn>

        {/* 1. Introducere */}
        <ScrollFadeIn>
          <section className="mb-16" aria-label="Introducere">
            <h2 className="text-2xl font-display font-semibold mb-6 border-l-4 border-primary pl-4">1. Introducere în Comunicarea Virtuală</h2>
            <div className="space-y-4 text-justify text-foreground/90 leading-relaxed">
              <p>Comunicarea virtuală reprezintă procesul de transmitere a informațiilor, ideilor și emoțiilor prin intermediul tehnologiilor digitale. Spre deosebire de comunicarea tradițională, aceasta nu necesită prezența fizică a participanților în același loc, permițând interacțiunea la distanțe mari, în timp real sau cu decalaj temporal.</p>
              <p>Istoria comunicării virtuale începe cu telegraful în secolul al XIX-lea, continuă cu telefonul, apoi cu emailul în anii 1970, și se transformă radical odată cu apariția internetului și a World Wide Web-ului în anii 1990. Revoluția smartphone-urilor din 2007 a democratizat accesul la comunicarea digitală.</p>
              <p>Astăzi, comunicarea virtuală este omniprezentă — de la mesaje instant și videoconferințe profesionale la rețele sociale și metaverse. Pandemia COVID-19 a accelerat adoptarea acestor tehnologii, transformând radical modul în care lucrăm, învățăm și socializăm.</p>
              <p>Înțelegerea mecanismelor, avantajelor și limitărilor comunicării virtuale este esențială pentru navigarea eficientă în era digitală, atât în viața profesională cât și în cea personală.</p>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 2. Caracteristici */}
        <ScrollFadeIn>
          <section className="mb-16" aria-label="Caracteristici">
            <h2 className="text-2xl font-display font-semibold mb-6 border-l-4 border-primary pl-4">2. Caracteristici ale Comunicării Virtuale</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {characteristics.map((c, i) => (
                <div key={i} className="glass-card rounded-xl p-5 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                    <c.icon size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm mb-1">{c.label}</h3>
                    <p className="text-muted-foreground text-sm">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollFadeIn>

        {/* 3. Tipuri */}
        <ScrollFadeIn>
          <section className="mb-16" aria-label="Tipuri de comunicare">
            <h2 className="text-2xl font-display font-semibold mb-6 border-l-4 border-primary pl-4">3. Tipuri de Comunicare Virtuală</h2>
            <div className="space-y-6">
              {commTypes.map((t, i) => (
                <div key={i} className="glass-card rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-1 order-2 md:order-1">
                    <h3 className="font-display font-semibold text-lg mb-2">{t.title}</h3>
                    <p className="text-muted-foreground text-justify">{t.desc}</p>
                  </div>
                  <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center flex-shrink-0 order-1 md:order-2">
                    <t.icon size={36} className="text-primary-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollFadeIn>

        {/* 4. Avantaje și Dezavantaje */}
        <ScrollFadeIn>
          <section className="mb-16" aria-label="Avantaje și dezavantaje">
            <h2 className="text-2xl font-display font-semibold mb-6 border-l-4 border-primary pl-4">4. Avantaje și Dezavantaje</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" role="table">
                <thead>
                  <tr className="gradient-hero text-primary-foreground">
                    <th className="p-4 text-left font-display rounded-tl-xl">
                      <div className="flex items-center gap-2"><CheckCircle2 size={18} /> Avantaje</div>
                    </th>
                    <th className="p-4 text-left font-display rounded-tr-xl">
                      <div className="flex items-center gap-2"><XCircle size={18} /> Dezavantaje</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {advantages.map(([adv, dis], i) => (
                    <tr key={i} className={`${i % 2 === 0 ? "bg-muted/50" : "bg-card"}`}>
                      <td className="p-4 border-b border-border text-sm flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-success flex-shrink-0" /> {adv}
                      </td>
                      <td className="p-4 border-b border-border text-sm">
                        <div className="flex items-center gap-2">
                          <XCircle size={16} className="text-destructive flex-shrink-0" /> {dis}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 5. Neticheta */}
        <ScrollFadeIn>
          <section className="mb-16" aria-label="Neticheta">
            <h2 className="text-2xl font-display font-semibold mb-6 border-l-4 border-primary pl-4">5. Neticheta — Regulile Comunicării Online</h2>
            <ol className="space-y-4 mb-6">
              {netiquette.map((rule, i) => (
                <li key={i} className="glass-card rounded-xl p-4 flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-foreground/90 text-justify pt-1">{rule}</p>
                </li>
              ))}
            </ol>
            <div className="tip-box flex gap-3 items-start">
              <Lightbulb size={24} className="text-accent flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-medium text-justify">
                <strong>Sfatul expertului:</strong> Tratează interlocutorul online cu același respect ca față în față!
              </p>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 6. Video */}
        <ScrollFadeIn>
          <section aria-label="Video educațional">
            <h2 className="text-2xl font-display font-semibold mb-6 border-l-4 border-primary pl-4">6. Video Educațional</h2>
            <div className="flex justify-center">
              <div className="w-full max-w-3xl">
                <div className="relative pb-[56.25%] rounded-xl overflow-hidden shadow-card">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Video despre comunicarea virtuală"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-center text-muted-foreground text-sm mt-3 italic">
                  * Înlocuiți acest video cu unul relevant despre comunicarea virtuală.
                </p>
              </div>
            </div>
          </section>
        </ScrollFadeIn>
      </div>
    </div>
  </Layout>
);

export default Teorie;
