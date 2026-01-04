import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { MessageCircle, Star, X } from "lucide-react";
import DawetImg from "../../assets/Dawet_Pakdul.jpeg";
import BaksoImg from "../../assets/Bakso_MasDarno.jpeg";
import KripikImg from "../../assets/Kripik_Lariso.jpeg";
import GudegImg from "../../assets/Gudek_Laras.jpeg";
import NasiPadangImg from "../../assets/Nasi_Padang.jpeg";
import AlpukatKocokImg from "../../assets/Alpukat_Kocok.jpeg";

// Data produk diperbarui berdasarkan informasi UMKM sebelumnya
const products = [
  {
    id: 1,
    name: "Peyek & Kripik Tempe Lariso",
    description: "Cita rasa otentik sejak 1996 yang diolah istimewa dengan bumbu rempah uleg asli dan minyak berkualitas.",
    price: "Rp 65.000 - 75.000 /kg",
    image: KripikImg,
    rating: 4.9,
    sold: "500+",
    category: "Camilan",
    phoneNumber: "6281234567890", // Ganti dengan nomor WA Lariso jika ada
  },
  {
    id: 2,
    name: "Warung Laras (Gudeg)",
    description: "Warung Laras menghadirkan cita rasa otentik Gudeg dan masakan Jawa rumahan sejak 2015 dengan pelayanan sepenuh hati.",
    price: "Mulai Rp 10.000",
    image: GudegImg, // Ilustrasi Gudeg
    rating: 4.8,
    sold: "450+",
    category: "Makanan Berat",
    phoneNumber: "6281234567890", // Ganti dengan nomor WA Warung Laras
  },
  {
    id: 3,
    name: "Bakso Pak Darno",
    description: "Nikmati bakso sapi dan ayam olahan Pak Darno yang lezat, halal, dan terjangkau sejak 2012.",
    price: "Rp 7.000 /porsi",
    image: BaksoImg, // Ilustrasi Bakso
    rating: 4.7,
    sold: "110+ /hari",
    category: "Makanan Berat",
    phoneNumber: "6281234567890", // Ganti dengan nomor WA Pak Darno
  },
  {
    id: 4,
    name: "Es Dawet Pak Dul",
    description: "Rasakan kesegaran alami Es Dawet Pak Dul yang diracik khusus menggunakan bahan asli dari Klaten.",
    price: "Rp 4.000",
    image: DawetImg, // Ilustrasi Dawet/Minuman Hijau
    rating: 4.8,
    sold: "150+ /hari",
    category: "Minuman",
    phoneNumber: "6281234567890", // Ganti dengan nomor WA Pak Dul
  },
  {
    id: 5,
    name: "Kocokin Aja (Alpukat Kocok)",
    description: "Segarkan harimu dengan Es Kocok Alpukat 'Kocokin Aja Karangmojo' yang nikmat dan ramah di kantong.",
    price: "Mulai Rp 7.000",
    image: AlpukatKocokImg,
    rating: 5.0,
    sold: "25+ /hari",
    category: "Minuman",
    phoneNumber: "6285967023086", // Sesuai data input
  },
  {
    id: 6,
    name: "Rumah Makan Nasi Padang Asli",
    description: "Rasakan kelezatan otentik masakan Minang yang diracik langsung oleh keluarga asli Padang dengan resep turun-temurun.",
    price: "Mulai Rp 15.000",
    image: NasiPadangImg, // Ilustrasi Nasi Padang/Rendang
    rating: 4.9,
    sold: "300+",
    category: "Makanan Berat",
    phoneNumber: "6289652215073", // Sesuai data input
  },
];

export function ProductsSection() {
  // State untuk menyimpan produk yang sedang dipilih
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  // Helper function untuk format nomor WA (menghapus 0 di depan jika user input manual, dll)
  const getWhatsAppLink = (product: typeof products[0]) => {
    // Default number jika tidak ada di data
    const phoneNumber = product.phoneNumber || "6281234567890";
    const text = encodeURIComponent(`Halo, saya ingin memesan ${product.name}. Apakah masih tersedia?`);
    return `https://wa.me/${phoneNumber}?text=${text}`;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#FFF9F5] to-[#F5E6D3]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4">
            UMKM Unggulan Desa
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dukung ekonomi lokal dengan menikmati produk-produk terbaik dari UMKM warga kami.
          </p>
        </div>

        {/* Grid Produk */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-none cursor-pointer hover:-translate-y-1 rounded-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full flex items-center gap-1 shadow-md text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold">{product.rating}</span>
                </div>
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                    {product.category}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-gray-900 text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-orange-600 font-bold text-lg">{product.price}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                      Terjual {product.sold}
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(getWhatsAppLink(product), '_blank');
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Pesan Sekarang
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* MODAL / POPUP DETAIL PRODUK */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl relative animate-in zoom-in-95 duration-200 flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-gray-500 hover:text-red-500 transition-colors shadow-sm"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Gambar Besar */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Informasi Detail */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto bg-white">
              <div className="mb-auto">
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider">
                      Recommended
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{selectedProduct.rating} Rating</span>
                    </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                  {selectedProduct.name}
                </h3>
                
                <p className="text-2xl font-bold text-orange-600 mb-6">
                  {selectedProduct.price}
                </p>

                <div className="space-y-4 text-gray-600 mb-8">
                  <p className="text-lg leading-relaxed">{selectedProduct.description}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Kenapa harus beli ini?</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Bahan baku berkualitas & higienis</li>
                      <li>Harga terjangkau untuk semua kalangan</li>
                      <li>Mendukung UMKM Warga Lokal</li>
                      <li>Tersedia pengiriman cepat/COD</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <Button 
                  className="w-full h-12 text-lg bg-green-600 hover:bg-green-700 text-white gap-2 rounded-xl"
                  onClick={() => window.open(getWhatsAppLink(selectedProduct), '_blank')}
                >
                  <MessageCircle className="w-5 h-5" />
                  Hubungi Penjual (WhatsApp)
                </Button>
                <p className="text-center text-xs text-gray-400 mt-3">
                  Anda akan diarahkan langsung ke WhatsApp pemilik usaha.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}