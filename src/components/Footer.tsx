import { Link } from "react-router-dom";
import VirtualTalkLogo from "./VirtualTalkLogo";

const Footer = () => (
  <footer className="border-t border-border/30 mt-20 bg-background/80" role="contentinfo">
    <div className="section-container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <VirtualTalkLogo className="w-7 h-7" />
            <span className="font-display font-bold text-lg gradient-text">VirtualTalk</span>
          </div>
          <p className="text-muted-foreground text-sm text-justify">
            Resurse educaționale Gen Z despre comunicarea în spații virtuale. Made with 💜
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4 text-foreground">Navigare</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">🏠 Acasă</Link></li>
            <li><Link to="/teorie" className="text-muted-foreground hover:text-primary transition-colors">📚 Teorie</Link></li>
            <li><Link to="/aplicatii" className="text-muted-foreground hover:text-primary transition-colors">📱 Aplicații</Link></li>
            <li><Link to="/quiz" className="text-muted-foreground hover:text-primary transition-colors">🎮 Quiz</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4 text-foreground">Despre</h4>
          <p className="text-muted-foreground text-sm text-justify">
            Proiect educațional realizat de Popescu Emilia si Birsan Evelina clasa a X-a — Comunicarea în Spații Virtuale ✨
          </p>
        </div>
      </div>
      <div className="border-t border-border/30 mt-8 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} VirtualTalk. Toate drepturile rezervate. 🔥
      </div>
    </div>
  </footer>
);

export default Footer;
