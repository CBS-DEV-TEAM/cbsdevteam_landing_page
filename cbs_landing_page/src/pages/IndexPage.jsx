import Navbar from '../components/common/Navbar.jsx'
import Hero from '../components/Home/Hero.jsx'
import Bento from '../components/Home/Bento.jsx'
import Description from '../components/Home/Description.jsx'
import Footer from '../components/common/Footer.jsx'
import { useState } from 'react'

function IndexPage() {

  return (
    <>
      <Navbar />
      <main className="h-full flex py-35 px-40 items-center flex-col gap-50">
        <Hero />
        <Description />
        <Bento />
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
