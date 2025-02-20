import './css/style.css'
import Header from './components/Header'
import Banner from './pages/Banner'
import Services from './pages/Services'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Footer from './components/Footer'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <>
      <Header></Header>
        <div className="afterHeader"></div>
        <Banner data-aos="fade-up"></Banner>
        <Services data-aos="fade-up"></Services>
        <AboutUs data-aos="fade-up"></AboutUs>
        <Contact data-aos="fade-up"></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
