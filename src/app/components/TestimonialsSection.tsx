import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ibu Siti Rahayu",
    location: "Yogyakarta",
    rating: 5,
    text: "Tiwul instantnya enak banget! Rasanya persis seperti yang dibuat nenek dulu. Anak-anak saya juga suka. Terima kasih sudah melestarikan makanan tradisional!",
    image: "https://images.unsplash.com/photo-1603714228681-b399854b8f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwc21pbGluZ3xlbnwxfHx8fDE3NjU4MDUxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Bapak Ahmad Rizki",
    location: "Sleman",
    rating: 5,
    text: "Kripik singkongnya mantap! Renyah, gurih, dan tidak terlalu berminyak. Cocok banget buat camilan saat kerja. Sudah langganan sejak 6 bulan lalu.",
    image: "https://images.unsplash.com/photo-1603714228681-b399854b8f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwc21pbGluZ3xlbnwxfHx8fDE3NjU4MDUxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Mbak Dewi Kusuma",
    location: "Jakarta",
    rating: 5,
    text: "Senang menemukan produk UMKM berkualitas dari Gunungkidul. Gathot-nya authentic dan packagingnya juga rapi. Recommended untuk yang kangen kampung halaman!",
    image: "https://images.unsplash.com/photo-1603714228681-b399854b8f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwc21pbGluZ3xlbnwxfHx8fDE3NjU4MDUxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "Mas Budi Santoso",
    location: "Gunungkidul",
    rating: 5,
    text: "Produk lokal yang bikin bangga! Kualitas terjaga, harga terjangkau. Saya sering beli untuk oleh-oleh keluarga di luar kota. Sukses terus!",
    image: "https://images.unsplash.com/photo-1603714228681-b399854b8f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwc21pbGluZ3xlbnwxfHx8fDE3NjU4MDUxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            Kata Pelanggan Kami
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="p-6 space-y-4 bg-muted/30 border-border hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-10 h-10 text-accent/40" />
              
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
