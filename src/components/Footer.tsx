import { Link } from "react-router-dom";
import VirtualCommLogo from "./VirtualCommLogo";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground mt-20" role="contentinfo">
    <div className="section-container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <VirtualCommLogo className="w-7 h-7" />
            <span className="font-display font-bold text-lg">VirtualComm</span>
          </div>
          <p className="text-secondary-foreground/70 text-sm text-justify">
            Resurse educaționale despre comunicarea în spații virtuale și mijloacele de comunicare digitală.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Hartă Site</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Acasă</Link></li>
            <li><Link to="/teorie" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Teorie</Link></li>
            <li><Link to="/mijloace" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Mijloace</Link></li>
            <li><Link to="/quiz" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">Quiz</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Despre Proiect</h4>
          <p className="text-secondary-foreground/70 text-sm text-justify">
            Proiect educațional realizat pentru studiul comunicării în mediul virtual.
          </p>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/50">
        © {new Date().getFullYear()} VirtualComm. Toate drepturile rezervate.
      </div>
    </div>
  </footer>
);

export default Footer;
