import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
}

const colors = [
  "hsl(333, 100%, 50%)",
  "hsl(265, 85%, 58%)",
  "hsl(217, 100%, 61%)",
  "hsl(44, 100%, 52%)",
  "hsl(142, 71%, 45%)",
];

const ConfettiEffect = ({ active }: { active: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!active) return;
    const p: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[i % colors.length],
      delay: Math.random() * 1.5,
      duration: 2 + Math.random() * 2,
      size: 6 + Math.random() * 8,
    }));
    setParticles(p);
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 rounded-sm"
          style={{
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            animation: `confetti-fall ${p.duration}s ease-in ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;
