import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, RotateCcw, BookOpen, Trophy, BookOpenCheck, Dumbbell } from "lucide-react";
import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    q: "Ce înseamnă comunicarea asincronă?",
    options: ["Comunicare în timp real", "Comunicare cu decalaj de timp", "Comunicare fără internet", "Comunicare nonverbală"],
    correct: 1,
    explanation: "Comunicarea asincronă nu necesită prezența simultană a participanților.",
  },
  {
    q: "Care platformă este specializată pentru videoconferințe profesionale?",
    options: ["TikTok", "WhatsApp", "Zoom", "Discord"],
    correct: 2,
    explanation: "Zoom este lider mondial în videoconferințe profesionale.",
  },
  {
    q: "Ce este neticheta?",
    options: ["Un tip de rețea socială", "Regulile de comportament online", "Un format de fișier", "Un protocol internet"],
    correct: 1,
    explanation: "Neticheta reprezintă setul de reguli și norme de conduită în mediul online.",
  },
  {
    q: "Care este un dezavantaj al comunicării virtuale?",
    options: ["Accesibilitate globală", "Cost redus", "Lipsa contactului fizic", "Flexibilitate temporală"],
    correct: 2,
    explanation: "Lipsa contactului fizic și a limbajului nonverbal este un dezavantaj major.",
  },
  {
    q: "VoIP înseamnă:",
    options: ["Video over Internet Protocol", "Voice over Internet Protocol", "Virtual Online Interface Platform", "Visual Output Internet Provider"],
    correct: 1,
    explanation: "VoIP (Voice over Internet Protocol) permite transmiterea vocii prin internet.",
  },
  {
    q: "Care rețea socială are peste 2 miliarde de utilizatori pentru mesagerie?",
    options: ["Discord", "Zoom", "WhatsApp", "Teams"],
    correct: 2,
    explanation: "WhatsApp depășește 2 miliarde de utilizatori activi la nivel global.",
  },
  {
    q: "Metaverse-ul este un exemplu de:",
    options: ["Email", "Comunicare în medii virtuale 3D", "Rețea socială clasică", "Protocol de internet"],
    correct: 1,
    explanation: "Metaverse-ul oferă comunicare imersivă în medii virtuale tridimensionale.",
  },
  {
    q: "Comunicarea sincronă presupune:",
    options: ["Schimb de email-uri", "Postări pe forum", "Interacțiune în timp real", "Comentarii pe blog"],
    correct: 2,
    explanation: "Comunicarea sincronă are loc în timp real, cu toți participanții prezenți simultan.",
  },
  {
    q: "Ce tip de comunicare folosesc podcasturile?",
    options: ["Video", "Text", "Audio", "VR"],
    correct: 2,
    explanation: "Podcasturile sunt o formă de comunicare audio digitală.",
  },
  {
    q: "Care este o regulă de netichetă?",
    options: ["Scrie totul cu MAJUSCULE", "Trimite mesaje repetate", "Respectă confidențialitatea altora", "Ignoră răspunsurile"],
    correct: 2,
    explanation: "Respectarea confidențialității este una dintre regulile fundamentale ale netichetei.",
  },
];

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === questions[currentQ].correct) setScore((s) => s + 1);
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  const getResult = () => {
    if (score >= 9) return { icon: Trophy, msg: "Excelent! Ești expert în comunicare virtuală! 🏆", color: "text-success" };
    if (score >= 6) return { icon: BookOpenCheck, msg: "Bine! Mai ai câte ceva de explorat. 📚", color: "text-primary" };
    return { icon: Dumbbell, msg: "Recitește teoria și încearcă din nou! 💪", color: "text-accent" };
  };

  const q = questions[currentQ];

  return (
    <Layout>
      <div className="py-16">
        <div className="section-container max-w-3xl">
          {!finished ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-display font-bold mb-2">Testează-ți Cunoștințele!</h1>
                <p className="text-muted-foreground">10 întrebări despre comunicarea virtuală</p>
              </div>

              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Întrebarea {currentQ + 1} din {questions.length}</span>
                  <span>Scor: {score}</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full gradient-accent rounded-full transition-all duration-500"
                    style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQ}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glass-card rounded-2xl p-8">
                    <h2 className="font-display font-semibold text-xl mb-6">{q.q}</h2>

                    <div className="space-y-3">
                      {q.options.map((opt, i) => {
                        let style = "bg-muted/50 hover:bg-muted border border-border";
                        if (selected !== null) {
                          if (i === q.correct) style = "bg-success/15 border-2 border-success";
                          else if (i === selected) style = "bg-destructive/15 border-2 border-destructive";
                          else style = "bg-muted/30 border border-border opacity-60";
                        }

                        return (
                          <button
                            key={i}
                            onClick={() => handleSelect(i)}
                            disabled={selected !== null}
                            className={`w-full text-left p-4 rounded-xl transition-all text-sm font-medium ${style}`}
                            aria-label={`Opțiunea ${String.fromCharCode(65 + i)}: ${opt}`}
                          >
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-background mr-3 text-xs font-bold">
                              {String.fromCharCode(65 + i)}
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {selected !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6"
                      >
                        <div className="tip-box mb-4">
                          <p className="text-sm text-justify">{q.explanation}</p>
                        </div>
                        <button
                          onClick={nextQuestion}
                          className="gradient-accent text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition"
                        >
                          {currentQ < questions.length - 1 ? "Următoarea întrebare" : "Vezi rezultatul"}
                          <ArrowRight size={16} />
                        </button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="glass-card rounded-2xl p-12">
                {(() => {
                  const result = getResult();
                  return (
                    <>
                      <result.icon size={64} className={`mx-auto mb-6 ${result.color}`} />
                      <h2 className="text-4xl font-display font-bold mb-2">{score}/{questions.length}</h2>
                      <p className={`text-xl font-display font-semibold mb-8 ${result.color}`}>{result.msg}</p>
                    </>
                  );
                })()}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={restart}
                    className="gradient-accent text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 justify-center hover:opacity-90 transition"
                  >
                    <RotateCcw size={16} /> Reia Quizul
                  </button>
                  <Link
                    to="/teorie"
                    className="px-6 py-3 rounded-lg font-semibold text-sm border-2 border-primary text-primary flex items-center gap-2 justify-center hover:bg-primary/5 transition"
                  >
                    <BookOpen size={16} /> Înapoi la Teorie
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
