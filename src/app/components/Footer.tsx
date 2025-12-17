import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl">Camilan Gunungkidul</h3>
            <p className="text-white/80">
              Menyajikan camilan tradisional khas Gunungkidul dengan cita rasa autentik dan kualitas terjaga.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/6281234567890" 
                className="w-10 h-10 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4>Tautan Cepat</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Produk</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">Cara Pemesanan</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4>Kontak Kami</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+6281234567890" className="hover:text-accent transition-colors">
                    +62 812-3456-7890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@camilangunungkidul.com" className="hover:text-accent transition-colors">
                    info@camilangunungkidul.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  Desa Wonosari, Gunungkidul<br />
                  Yogyakarta, Indonesia
                </div>
              </li>
            </ul>
          </div>

          {/* Map & CTA */}
          <div className="space-y-4">
            <h4>Lokasi Kami</h4>
            <div className="relative h-40 rounded-lg overflow-hidden bg-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.26993558655!2d110.56093!3d-7.965588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bfb094c478b9d%3A0x3027a76e352be40!2sGunungkidul%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Gunungkidul"
              ></iframe>
            </div>
            <Button 
              className="w-full bg-accent hover:bg-accent/90"
              asChild
            >
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat via WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; 2024 Camilan Gunungkidul. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
