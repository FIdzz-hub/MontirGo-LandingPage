import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Service";
import CoverageArea from "./components/CoverageArea";
import FAQ from "./components/FAQ";

function App() {
  return (

    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <CoverageArea />
      <FAQ />
      <Footer />
    </div>

  );
}

export default App;