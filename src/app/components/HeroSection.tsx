import { Button } from "./ui/button";
// 1. Import gambar utama dan gambar latar
import HeroImg from "../../assets/Hero Image.png";
import BaksoImg from "../../assets/Bakso_MasDarno.jpeg"; // Ganti dengan nama file gambar latar Anda

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F5] to-[#F5E6D3]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-accent font-medium">Produk UMKM Asli Gedangrejo</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Cita Rasa Asli Gedangrejo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Nikmati kelezatan kuliner tradisional khas Gedangrejo yang dibuat dengan resep turun-temurun dan bahan-bahan lokal pilihan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white" asChild>
                <a href="#produk">Pesan Sekarang</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <a href="#produk">Lihat Semua UMKM</a>
              </Button>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            
            {/* 2. IMAGE DEKORATIF (Pengganti Kotak Berwarna) */}
            <div className="absolute inset-0 rotate-6 rounded-3xl overflow-hidden opacity-40">
              <img
                src={BaksoImg} 
                alt="Dekorasi latar"
                className="w-full h-full object-cover grayscale sepia" // Menambahkan efek agar tidak mengalihkan perhatian dari foto utama
              />
              {/* Overlay gelap tipis agar gambar utama tetap menonjol */}
              <div className="absolute inset-0 bg-accent/10"></div>
            </div>
            
            {/* 3. IMAGE UTAMA */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
              <img
                src={HeroImg}
                alt="Dawet Pak Dul Gedangrejo"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Blurs */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}