import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className="h-screen flex mt-35 mx-40 items-center flex-col">
        <Hero />
      </main>
    </>
  )
}

export default App
