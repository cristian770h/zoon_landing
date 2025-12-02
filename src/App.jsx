import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Trailer from "./components/Trailer";
import Screenshots from "./components/Screenshots";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-neutral-950 text-white">
      <Hero />
      <About />
      <Features />
      <Trailer />
      <Screenshots />
      <CTA />
      <Footer />
    </div>
  );
}
