import { useState } from 'react'
import './css/style.css'
import Header from './components/Header'
import Banner from './pages/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Banner></Banner>
    </>
  )
}

export default App
