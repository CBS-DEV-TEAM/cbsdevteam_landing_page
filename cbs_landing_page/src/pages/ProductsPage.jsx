import Navbar from '../components/common/Navbar.jsx'
import ProductsGrid from '../components/Products/ProductsGrid.jsx'
import Footer from '../components/common/Footer.jsx'
import '../theme.css'


function ProductsPage(){
    return(
        <>
            <header>
                <Navbar />
            </header>
            
            <main className="h-full flex py-35 px-80 items-start flex-col gap-20">
                <section className='flex flex-col gap-10 w-210'>
                    <h1 className='text-navy-blue-900 text-5xl font-semibold font-quicksand'>Productos</h1>
                    <p className='text-navy-blue-700 text-xl font-kanit font-[300]'>Los productos que ofrece CBSDevteam. Servicios independientes con enfoques individuales, desde aquí podras visitar la página individual de cada  uno de ellos, así como conocer de que tratan, a quienes van dirigidos y algunas de sus características más generales.</p>
                </section>
                <ProductsGrid />
            </main>
            <Footer />
        </>
    )
}

export default ProductsPage