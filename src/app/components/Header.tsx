import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white">CG</span>
            </div>
            <div>
              <div className="text-primary">Tiwul Lestari</div>
              <div className="text-xs text-muted-foreground hidden sm:block">Cita Rasa Asli</div>
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
            <a href="#testimoni" className="text-foreground hover:text-primary transition-colors">
              Testimoni
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
