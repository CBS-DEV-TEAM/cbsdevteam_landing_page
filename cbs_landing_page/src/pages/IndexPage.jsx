import '@/src/index.css'
import Navbar from '../components/common/Navbar.jsx'
import Hero from '../components/Home/Hero.jsx'
import Bento from '../components/Home/Bento.jsx'
import Description from '../components/Home/Description.jsx'
import Footer from '../components/common/Footer.jsx'

function IndexPage() {

  return (
    <>
      <Navbar />
      <main className="h-full flex py-35 px-40 items-center flex-col gap-[12.5rem]">
        <Hero />
        <Description />
        <Bento />
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
