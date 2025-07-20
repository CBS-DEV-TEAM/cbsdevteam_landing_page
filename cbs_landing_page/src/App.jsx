import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Bento from './components/Bento.jsx'
function App() {
  return (
    <>
      <Navbar />
      <main className="h-screen flex mt-35 mx-40 items-center flex-col">
        <Hero />
        <Bento />
      </main>
    </>
  )
}

export default App
