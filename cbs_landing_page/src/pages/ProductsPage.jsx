import '@/src/index.css'
import Navbar from '../components/common/Navbar.jsx'
import ProductsGrid from '../components/Products/ProductsGrid.jsx'
import Footer from '../components/common/Footer.jsx'
import { fadeInUp } from '../components/animations/fadeInUp.js'
import { motion } from 'motion/react'


function ProductsPage(){
    return(
        <>
            <header>
                <Navbar />
            </header>
            
            <main className="h-full flex py-35 px-80 items-start flex-col gap-20">
                <section className='flex flex-col gap-10 w-210'>
                    <motion.h1
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    custom={0.1}
                    viewport={{once: true, amount: 0.5}}
                    className='text-navy-blue-900 text-5xl font-semibold font-quicksand'>Productos</motion.h1>
                    <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    custom={0.2}
                    viewport={{once: true, amount: 0.5}}
                    className='text-navy-blue-700 text-xl font-kanit font-[300]'>Los productos que ofrece CBSDevteam. Servicios independientes con enfoques individuales, desde aquí podras visitar la página individual de cada  uno de ellos, así como conocer de que tratan, a quienes van dirigidos y algunas de sus características más generales.</motion.p>
                </section>
                <ProductsGrid />
            </main>
            <Footer />
        </>
    )
}

export default ProductsPage