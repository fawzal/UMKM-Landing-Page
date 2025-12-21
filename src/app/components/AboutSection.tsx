import { Heart, Leaf, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            Tentang Kami
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kami merupakan pusat UMKM di Gedangrejo yang berdedikasi mempromosikan produk lokal unggulan. 
            Seluruh produk kami diolah secara manual (handmade) oleh warga setempat, 
            memadukan resep warisan leluhur dengan bahan-bahan alami berkualitas dari petani sekitar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Value 1 */}
          <div className="text-center space-y-4 p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-primary">Dibuat dengan Cinta</h3>
            <p className="text-muted-foreground">
              Setiap produk dibuat dengan penuh perhatian dan kehangatan keluarga, 
              menjaga kualitas dan cita rasa autentik.
            </p>
          </div>

          {/* Value 2 */}
          <div className="text-center space-y-4 p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-primary">Bahan Lokal Alami</h3>
            <p className="text-muted-foreground">
              Menggunakan bahan baku dari petani lokal Gedangrejo, 
              tanpa pengawet dan pewarna buatan.
            </p>
          </div>

          {/* Value 3 */}
          <div className="text-center space-y-4 p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-primary">Memberdayakan Komunitas</h3>
            <p className="text-muted-foreground">
              Melibatkan warga sekitar dan petani lokal, 
              berkontribusi pada ekonomi masyarakat Gedangrejo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
