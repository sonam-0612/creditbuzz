import HeroSection from "./components/Herosection/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import CardBenefits from "./components/CardBenefits/CardBenefits"
import Blogs from "./components/blogs/Blogs"
import Features from "./components/features/Features"

function App() {

  return (
    <>
    <Navbar />
    <HeroSection />
    <Features/>
    <CardBenefits />
    <Blogs/>
    <Footer/>
    </>
  )
}

export default App
