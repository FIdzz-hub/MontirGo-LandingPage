import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Service'

function App() {

  return (
    <>
      <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
        <Navbar />
        <Hero />
        <Services />
        <Features />
        <Footer  />
      </div>
    </>
  )
}

export default App
