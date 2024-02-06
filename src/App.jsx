import { useState } from 'react'
import './css/style.css'
import Header from './components/Header'
import Banner from './pages/Banner'
import Services from './pages/Services'

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
    </>
  )
}

export default App
