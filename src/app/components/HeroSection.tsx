import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F5] to-[#F5E6D3]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-accent">Produk UMKM Asli Gedangrejo</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary">
              Cita Rasa Asli Gedangrejo
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Nikmati kelezatan camilan tradisional khas Gedangrejo yang dibuat dengan resep turun-temurun dan bahan-bahan lokal pilihan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90"
                asChild
              >
                <a href="#produk">
                  Pesan Sekarang
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="#produk">
                  Lihat Menu
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Alami</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="text-2xl md:text-3xl text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Produk</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl text-primary">10+</div>
                <div className="text-sm text-muted-foreground">UMKM</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 bg-accent/20 rounded-3xl rotate-6"></div>
            <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1680345576151-bbc497ba969e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBzbmFja3N8ZW58MXx8fHwxNzY1ODk2NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Camilan tradisional Gunungkidul"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}