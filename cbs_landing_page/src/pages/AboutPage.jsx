import '../theme.css'
import Navbar from '../components/common/Navbar.jsx'
import Jairo from '../assets/image.png'
import Footer from '../components/common/Footer.jsx'

function AboutPage(){
    return(
        <>
            <Navbar />
            <main className="h-full flex flex-col py-80 px-80 gap-60">
                <section className="flex justify-between items-center gap-30">
                    <h1 className="text-6xl text-navy-blue-900 font-semibold font-quicksand" >Sobre nosotros</h1>
                    <p className="w-150 text-xl text-navy-blue-700 font-kanit font-[300]">
                        Somos un equipo de desarrollo formado por personas apasionadas por el mundo de la programación y la craeción de software. Movidos por la motivación y el amor que tenemos por este arte, creamos software con la finalidad de proveer herramientas a las personas para facilitar ciertas actividads y procesos.
                    </p>
                </section>
                <section className="flex justify-between gap-30">
                    <img src={Jairo} alt="" className='w-120'/>
                    <div className='flex flex-col gap-10'>
                        <h1 className="text-6xl text-navy-blue-900 font-semibold font-quicksand">Misión</h1>
                        <p className="w-150 text-xl text-navy-blue-700 font-kanit font-[300]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsam quisquam numquam qui praesentium dolorem libero voluptates, vitae  laborum vero earum nemo adipisci reprehenderit cumque eveniet? Harum quas, quasi nostrum similique, inventore enim recusandae quibusdam  molestiae deserunt aliquid ducimus dolore.
                        </p>
                    </div>
                </section>
                <section className="flex justify-between gap-30 flex-row-reverse">
                    <img src={Jairo} alt="" className='w-120'/>
                    <div className='flex flex-col gap-10'>
                        <h1 className="text-6xl text-navy-blue-900 font-semibold text-right font-quicksand">Visión</h1>
                        <p className="w-150 text-xl text-navy-blue-700 font-kanit font-[300] text-right">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quo earum nam quam doloribus. Dicta minus expedita libero autem quas consectetur incidunt esse dolore qui ducimus et eveniet magnam repudiandae, accusantium voluptatem architecto fugiat? Tenetur incidunt ipsam labore tempore totam!
                        </p>
                    </div>
                </section>
                <section className="flex justify-between gap-30">
                    <img src={Jairo} alt="" className='w-120'/>
                    <div className='flex flex-col gap-10'>
                        <h1 className="text-6xl text-navy-blue-900 font-semibold font-quicksand">Nuestros valores</h1>
                        <p className="w-150 text-xl text-navy-blue-700 font-kanit font-[300]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nisi quisquam magni aut tempore dolore soluta facilis maxime dolorum   pariatur! Reprehenderit debitis quibusdam, tenetur perferendis ratione veniam maxime ex, soluta nemo vero harum atque nulla deserunt nihil?   At, eius cumque.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default AboutPage