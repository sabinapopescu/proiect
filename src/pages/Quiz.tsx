import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, RotateCcw, BookOpen, Trophy } from "lucide-react";
import Layout from "@/components/Layout";
import ConfettiEffect from "@/components/ConfettiEffect";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
  funFact: string;
}

const questions: Question[] = [
  {
    q: "Care aplicație a inventat formatul 'Stories' care dispare după 24h?",
    options: ["Instagram", "Snapchat", "TikTok", "WhatsApp"],
    correct: 1,
    explanation: "Snapchat a lansat Stories în 2013.",
    funFact: "Snapchat a lansat Stories în 2013. Instagram le-a copiat în 2016 😅",
  },
  {
    q: "Câți utilizatori activi are TikTok în 2024?",
    options: ["500 milioane", "1 miliard", "1.5 miliarde", "3 miliarde"],
    correct: 2,
    explanation: "TikTok are aproximativ 1.5 miliarde de utilizatori activi.",
    funFact: "TikTok a ajuns la 1 miliard de utilizatori mai repede decât orice altă platformă!",
  },
  {
    q: "Ce înseamnă comunicarea SINCRONĂ?",
    options: ["Comunicare prin video", "Comunicare în timp real", "Comunicare cu întârziere", "Comunicare anonimă"],
    correct: 1,
    explanation: "Comunicarea sincronă are loc în timp real.",
    funFact: "Un apel video e sincron. Un story pe Instagram e asincron!",
  },
  {
    q: "Ce tehnologie folosesc Zoom, Meet și FaceTime pentru video?",
    options: ["Bluetooth", "WebRTC", "WiFi Direct", "NFC"],
    correct: 1,
    explanation: "WebRTC permite comunicarea video direct în browser.",
    funFact: "WebRTC e open-source și a revoluționat comunicarea video pe browser!",
  },
  {
    q: "Telegram permite grupuri de până la câți membri?",
    options: ["1.000", "10.000", "50.000", "200.000"],
    correct: 3,
    explanation: "Telegram suportă grupuri de până la 200.000 de membri.",
    funFact: "De aceea Telegram e folosit masiv de comunități mari și canale de știri!",
  },
  {
    q: "Care regulă de netichetă spune să nu scrii cu MAJUSCULE?",
    options: ["Regula clarității", "Regula tonului — majusculele = țipat", "Regula gramaticii", "Regula anonimatului"],
    correct: 1,
    explanation: "Scrierea cu majuscule e echivalentul țipatului online.",
    funFact: "În cultura internetului, A SCRIE AȘA e considerat agresiv din 1990!",
  },
  {
    q: "Instagram Reels a fost lansat ca răspuns la succesul cărui app?",
    options: ["Snapchat", "YouTube", "TikTok", "Vine"],
    correct: 2,
    explanation: "Meta a lansat Reels ca răspuns direct la TikTok.",
    funFact: "Meta a lansat Reels în 2020 după ce SUA a amenințat să interzică TikTok",
  },
  {
    q: "Primul email din lume a fost trimis în ce an?",
    options: ["1965", "1971", "1983", "1995"],
    correct: 1,
    explanation: "Ray Tomlinson a trimis primul email în 1971.",
    funFact: "Ray Tomlinson a ales simbolul @ pentru că separa utilizatorul de server. Genial!",
  },
  {
    q: "Ce tip de comunicare sunt mesajele vocale pe WhatsApp?",
    options: ["Sincronă video", "Asincronă audio", "Sincronă audio", "Nonverbală"],
    correct: 1,
    explanation: "Mesajele vocale sunt o formă de comunicare asincronă audio.",
    funFact: "Mesajele vocale combină intimitatea vocii cu flexibilitatea asincronă!",
  },
  {
    q: "Care platformă NU este în primul rând o rețea socială?",
    options: ["Instagram", "TikTok", "Telegram", "Snapchat"],
    correct: 2,
    explanation: "Telegram se definește ca messenger, nu rețea socială.",
    funFact: "Telegram se definește ca messenger, nu rețea socială, deși are canale publice!",
  },
];

const TIMER_DURATION = 15;

const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [showConfetti, setShowConfetti] = useState(false);
  const [fastAnswer, setFastAnswer] = useState(false);

  useEffect(() => {
    if (!started || finished || selected !== null) return;
    if (timeLeft <= 0) {
      setSelected(-1); // time's up
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, started, finished, selected]);

  const handleSelect = useCallback((idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (timeLeft > 10) setFastAnswer(true);
    else setFastAnswer(false);
    if (idx === questions[currentQ].correct) setScore((s) => s + 1);
  }, [selected, currentQ, timeLeft]);

  const nextQuestion = useCallback(() => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setTimeLeft(TIMER_DURATION);
    } else {
      setFinished(true);
      if (score >= 8) setShowConfetti(true);
    }
  }, [currentQ, score]);

  const restart = useCallback(() => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setStarted(true);
    setTimeLeft(TIMER_DURATION);
    setShowConfetti(false);
  }, []);

  const getResult = () => {
    if (score >= 9) return { emoji: "🏆", msg: "DIGITAL CHAMPION! Ești guru-l comunicării virtuale!", stars: 5 };
    if (score >= 6) return { emoji: "😎", msg: "Aproape expert! Mai petrece timp pe Teorie și revino!", stars: 4 };
    if (score >= 3) return { emoji: "📚", msg: "Decent, dar mai ai de învățat. Dă-o din nou!", stars: 3 };
    return { emoji: "💀", msg: "Bruh... Citește teoria, serios acum 😂", stars: 1 };
  };

  const q = questions[currentQ];
  const timerPercent = (timeLeft / TIMER_DURATION) * 100;
  const circumference = 2 * Math.PI * 45;

  // Pre-quiz screen
  if (!started) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center py-16">
          <div className="section-container max-w-xl text-center">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <span className="text-7xl block mb-6">🏆</span>
              <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                <span className="gradient-text">🎮 Ești expert în comunicare virtuală?</span>
              </h1>
              <p className="text-muted-foreground mb-8">
                10 întrebări • ~3 minute • Poți câștiga titlul de Digital Champion 🏆
              </p>
              <div className="flex gap-3 justify-center mb-8">
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-success/15 text-success border border-success/20">🟢 Ușor</span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-neon-yellow/15 text-neon-yellow border border-neon-yellow/20">🟡 Mediu</span>
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-destructive/15 text-destructive border border-destructive/20">🔴 Greu</span>
              </div>
              <button
                onClick={() => setStarted(true)}
                className="glow-button gradient-accent px-12 py-4 rounded-xl font-bold text-lg text-primary-foreground hover:scale-105 transition-transform"
              >
                START 🚀
              </button>
            </motion.div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ConfettiEffect active={showConfetti} />
      <div className="py-16">
        <div className="section-container max-w-3xl">
          {!finished ? (
            <>
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Întrebarea {currentQ + 1} din {questions.length}</span>
                  <span>Scor: {score} ⚡</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full gradient-accent rounded-full transition-all duration-500" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={currentQ} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                  <div className="glass-card rounded-2xl p-8">
                    {/* Timer */}
                    <div className="flex justify-between items-start mb-6">
                      <h2 className="font-display font-semibold text-xl flex-1 pr-4">{q.q}</h2>
                      <div className="relative flex-shrink-0">
                        <svg className="w-14 h-14 -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" stroke="hsl(240, 15%, 18%)" strokeWidth="6" fill="none" />
                          <circle
                            cx="50" cy="50" r="45"
                            stroke={timeLeft <= 5 ? "hsl(0, 72%, 51%)" : "hsl(333, 100%, 50%)"}
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference - (timerPercent / 100) * circumference}
                            className="transition-all duration-1000"
                          />
                        </svg>
                        <span className={`absolute inset-0 flex items-center justify-center text-sm font-bold ${timeLeft <= 5 ? "text-destructive" : ""}`}>
                          {timeLeft}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {q.options.map((opt, i) => {
                        let style = "bg-muted/30 hover:bg-muted/50 border border-border/30";
                        if (selected !== null) {
                          if (i === q.correct) style = "bg-success/15 border-2 border-success";
                          else if (i === selected) style = "bg-destructive/15 border-2 border-destructive animate-shake";
                          else style = "bg-muted/20 border border-border/20 opacity-50";
                        }
                        return (
                          <button
                            key={i}
                            onClick={() => handleSelect(i)}
                            disabled={selected !== null}
                            className={`w-full text-left p-4 rounded-xl transition-all text-sm font-medium ${style}`}
                          >
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-background/50 mr-3 text-xs font-bold">
                              {String.fromCharCode(65 + i)}
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {selected !== null && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                        {selected === q.correct && fastAnswer && (
                          <p className="text-neon-yellow text-sm font-semibold mb-2">⚡ Răspuns rapid! +10 bonus</p>
                        )}
                        {selected === q.correct ? (
                          <p className="text-success text-sm font-semibold mb-2">✅ Corect!</p>
                        ) : (
                          <p className="text-destructive text-sm font-semibold mb-2">❌ Greșit! Răspunsul corect: {q.options[q.correct]}</p>
                        )}
                        <div className="glass-card rounded-xl p-4 mb-4 border-neon-yellow/20">
                          <p className="text-sm text-muted-foreground text-justify">💡 {q.funFact}</p>
                        </div>
                        <button
                          onClick={nextQuestion}
                          className="glow-button gradient-accent text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform"
                        >
                          {currentQ < questions.length - 1 ? "Următoarea" : "Vezi rezultatul"}
                          <ArrowRight size={16} />
                        </button>
                      </motion.div>
                    )}

                    {selected === null && timeLeft <= 0 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
                        <p className="text-destructive text-sm font-semibold mb-2">⏰ Timpul a expirat!</p>
                        <p className="text-sm text-muted-foreground mb-4">Răspunsul corect: {q.options[q.correct]}</p>
                        <button onClick={nextQuestion} className="glow-button gradient-accent text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2">
                          {currentQ < questions.length - 1 ? "Următoarea" : "Vezi rezultatul"}
                          <ArrowRight size={16} />
                        </button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <div className="glass-card rounded-2xl p-12">
                {(() => {
                  const result = getResult();
                  return (
                    <>
                      <span className="text-7xl block mb-4">{result.emoji}</span>
                      <h2 className="text-5xl font-display font-bold mb-2 gradient-text">{score}/{questions.length}</h2>
                      <div className="flex justify-center gap-1 mb-4">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i} className={`text-2xl ${i < result.stars ? "" : "opacity-20"}`}>⭐</span>
                        ))}
                      </div>
                      <p className="text-xl font-display font-semibold mb-8 gradient-text-neon">{result.msg}</p>
                    </>
                  );
                })()}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={restart} className="glow-button gradient-accent text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 justify-center hover:scale-105 transition-transform">
                    <RotateCcw size={16} /> Joacă din nou 🔄
                  </button>
                  <Link to="/teorie" className="px-6 py-3 rounded-xl font-semibold text-sm border border-accent text-accent flex items-center gap-2 justify-center hover:bg-accent/10 transition">
                    <BookOpen size={16} /> Înapoi la teorie 📚
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
