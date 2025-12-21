import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { MessageCircle, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Peyek dan Kripik Tempe Lariso",
    description: "Peyek dan Kripik Tempe Lariso: Cita rasa otentik sejak 1996 yang diolah istimewa dengan bumbu rempah uleg asli",
    price: "Rp 50.000-75.000",
    image: "https://images.unsplash.com/photo-1680345576151-bbc497ba969e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBzbmFja3N8ZW58MXx8fHwxNzY1ODk2NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    sold: "500+",
  },
  {
    id: 2,
    name: "Warung Laras",
    description: "Warung Laras menghadirkan cita rasa otentik Gudeg dan masakan Jawa rumahan sejak 2015 dengan sentuhan pelayanan sepenuh hati.",
    price: "Rp 12.000",
    image: "https://images.unsplash.com/photo-1616140799124-8d582de4bbb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZvb2QlMjBtYXJrZXR8ZW58MXx8fHwxNzY1ODY1NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    sold: "450+",
  },
  {
    id: 3,
    name: "Bakso Pak Darno 234",
    description: "Nikmati bakso sapi dan ayam olahan Pak Darno yang lezat dan terjangkau sejak 2012.",
    price: "Rp 7.000",
    image: "https://images.unsplash.com/photo-1740993384870-0793845268e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNzYXZhJTIwY2hpcHMlMjBzbmFja3xlbnwxfHx8fDE3NjU4OTY2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    sold: "600+",
  },
  {
    id: 4,
    name: "Dawet Pak Dul",
    description: "Es Dawet Pak Dul menyajikan kesegaran dawet dari bahan pilihan yang pas di kantong.",
    price: "Rp 4.000",
    image: "https://images.unsplash.com/photo-1740993384870-0793845268e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNzYXZhJTIwY2hpcHMlMjBzbmFja3xlbnwxfHx8fDE3NjU4OTY2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    sold: "550+",
  },
  {
    id: 5,
    name: "Mie Ayam Langgoex",
    description: "Tiwul dengan tambahan gula kelapa untuk rasa manis alami",
    price: "Rp 10.000",
    image: "https://images.unsplash.com/photo-1680345576151-bbc497ba969e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBzbmFja3N8ZW58MXx8fHwxNzY1ODk2NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    sold: "400+",
  },
  {
    id: 6,
    name: "Rumah Makan Bebek Goreng Pak Koes",
    description: "Paket berisi Tiwul, Gathot, dan Kripik",
    price: "Rp 40.000",
    image: "https://images.unsplash.com/photo-1616140799124-8d582de4bbb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZvb2QlMjBtYXJrZXR8ZW58MXx8fHwxNzY1ODY1NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5.0,
    sold: "300+",
  },
  {
    id: 6,
    name: "Mie Ayam",
    description: "Paket berisi Tiwul, Gathot, dan Kripik",
    price: "Rp 40.000",
    image: "https://images.unsplash.com/photo-1616140799124-8d582de4bbb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZvb2QlMjBtYXJrZXR8ZW58MXx8fHwxNzY1ODY1NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5.0,
    sold: "300+",
  },
];

export function ProductsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFF9F5] to-[#F5E6D3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            Produk Terlaris
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Camilan favorit pelanggan kami yang wajib Anda coba
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white border-border"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{product.rating}</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-primary mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary">{product.price}</span>
                    <span className="text-xs text-muted-foreground">Terjual {product.sold}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-accent hover:bg-accent/90"
                  asChild
                >
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Pesan via WhatsApp
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
