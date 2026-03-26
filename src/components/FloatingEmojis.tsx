import { useEffect, useState } from "react";

const emojis = ["💬", "📱", "🎥", "✨", "🔥", "💜", "👾", "📸"];

interface FloatingEmoji {
  id: number;
  emoji: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

const FloatingEmojis = () => {
  const [items, setItems] = useState<FloatingEmoji[]>([]);

  useEffect(() => {
    const generated: FloatingEmoji[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      left: Math.random() * 100,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      size: 16 + Math.random() * 20,
    }));
    setItems(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute animate-emoji-float opacity-20"
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingEmojis;
