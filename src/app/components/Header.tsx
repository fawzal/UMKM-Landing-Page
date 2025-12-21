import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import LogoKKN from '../../assets/LogoKKN25-2-BG-OFF.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* Bagian yang sudah diganti */}
            <img 
              src={LogoKKN} 
              alt="Logo KKN" 
              className="w-10 h-10 object-contain" 
            />
            
            {/* Bagian teks tetap sama */}
            <div>
              <div className="text-primary">KKN-T</div>
              <div className="text-xs text-muted-foreground hidden sm:block">Gedangrejo</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#beranda" className="text-foreground hover:text-primary transition-colors">
              Beranda
            </a>
            <a href="#tentang" className="text-foreground hover:text-primary transition-colors">
              Tentang
            </a>
            <a href="#produk" className="text-foreground hover:text-primary transition-colors">
              Produk
            </a>
            <a href="#kontak" className="text-foreground hover:text-primary transition-colors">
              Kontak
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a 
                href="#beranda" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </a>
              <a 
                href="#tentang" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </a>
              <a 
                href="#produk" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Produk
              </a>
              <a 
                href="#testimoni" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimoni
              </a>
              <a 
                href="#kontak" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
