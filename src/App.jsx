import './css/style.css'
import Header from './components/Header'
import Banner from './pages/Banner'
import Services from './pages/Services'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header></Header>
        <div className="afterHeader"></div>
        <Banner></Banner>
        <Services></Services>
        <AboutUs></AboutUs>
        <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
