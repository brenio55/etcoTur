import { useState } from 'react'
import './css/style.css'
import Header from './components/Header'
import Banner from './pages/Banner'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Contact></Contact>
    </>
  )
}

export default App
