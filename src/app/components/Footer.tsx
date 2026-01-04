import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle, Music } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.5fr_0.6fr_1fr_1fr] gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl">KKN-T UDB Gedangrejo 2025</h3>
            <p className="text-white/80">
              Menggali potensi, memberdayakan masyarakat. Sebuah dedikasi dari Mahasiswa KKN-T Universitas Duta Bangsa Periode 2025.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://tiktok.com/@kknt.udb.gedangrejo" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Tiktok"
              >
                <Music className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/kkn.gedangrejo" 
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
                <a href="#beranda" className="hover:text-accent transition-colors">Tentang Kami</a>
              </li>
              <li>
                <a href="#produk" className="hover:text-accent transition-colors">Produk</a>
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
                  <a href="mailto:kkntgedangrejokarangmojo@gmail.com" className="hover:text-accent transition-colors">
                    kkntgedangrejokarangmojo@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  Desa Gedangrejo, Karangmojo, Gunungkidul<br />
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
                src="https://maps.google.com/maps?q=Gedangrejo,%20Kec.%20Karangmojo,%20Kabupaten%20Gunungkidul,%20Daerah%20Istimewa%20Yogyakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Gedangrejo"
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
          <p>&copy; 2025 Camilan Gedangrejo. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
