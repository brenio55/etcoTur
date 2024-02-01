import { useState } from 'react'
import './css/style.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
    </>
  )
}

export default App
