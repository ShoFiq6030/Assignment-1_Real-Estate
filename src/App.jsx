import "./App.css"
import About from "./components/About";
import Contact from "./components/Contact";
import CTA from "./components/Cta";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from './components/Navbar';
import Properties from "./components/Properties";
import Team from "./components/Team";
function App() {
  

  return (
    <>
     <Navbar/>
     <HeroSection/>
     <Features/>
     <Properties/>
     <About/>
     <CTA/>
     <FAQ/>
     <Team/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
