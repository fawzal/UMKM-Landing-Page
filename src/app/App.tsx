import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProductsSection } from "./components/ProductsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="beranda">
          <HeroSection />
        </section>
        <section id="tentang">
          <AboutSection />
        </section>
        <section id="produk">
          <ProductsSection />
        </section>
        <section id="kontak">
          <Footer />
        </section>
      </main>
    </div>
  );
}
