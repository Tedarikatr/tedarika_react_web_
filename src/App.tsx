import Footer from "./Assets/footer/Footer"
import Header from "./Assets/header/Header"
import Download from "./Assets/hemen indir/download"
import Hero from "./Assets/hero Box/Hero"
import Why from "./Assets/Neden Tedarika/why"
import Statistic from "./Assets/rakamlarla tedarika/statistic"
import Vision from "./Assets/vizyonumuz/vision"
import Solution from "./Assets/Çözümlerimiz/Solution"

function App() {

  return (
    <div className="container">
      <Header />
      <Hero />
      <Why />
      <Solution />
      <Statistic />
      <Vision />
      <Download />
      <Footer />
    </div>
  )
}

export default App
