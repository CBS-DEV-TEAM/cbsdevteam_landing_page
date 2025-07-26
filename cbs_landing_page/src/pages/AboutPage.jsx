import '@/src/theme.css'
import Navbar from '@/src/components/common/Navbar.jsx'
import Jairo from '@/src/assets/image.png'
import Footer from '@/src/components/common/Footer.jsx'
import AboutBlock from '@/src/components/About/AboutBlock.jsx'
import ScrollAnimation from '@/src/components/common/ScrollAnimation.jsx'

function AboutPage(){
    const MISSION_TEXT = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis pariatur vel perspiciatis quia asperiores suscipit nemo quibusdam mollitia maxime commodi iste possimus est corrupti, incidunt et adipisci ab fuga consequatur eligendi repudiandae veniam tempora. Cupiditate vitae dolorum iusto accusamus numquam quas magnam praesentium, ipsam sunt, libero aperiam. Fugiat, iure!"

    const VISION_TEXT = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ex nihil ratione dicta eius! Vel ducimus enim sit at a aliquam minus quidem, architecto corrupti animi, porro qui itaque? Natus deleniti dignissimos voluptatibus nobis aperiam dolores dolorum facere, dicta at aliquam nihil eligendi? Aperiam nobis totam dolorem adipisci, itaque accusamus."

    const VALUES_TEXT = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatum cumque sapiente laboriosam corrupti ratione aut numquam, voluptas animi quibusdam voluptate quaerat voluptates ea explicabo. Ad et aperiam animi unde aut iure maxime recusandae temporibus laborum quisquam ipsam repellendus, ut ab exercitationem, asperiores nemo commodi dolorum quasi libero dignissimos atque."


    return(
        <>
            <Navbar />
            <main className="h-full flex flex-col py-35 px-80 gap-40">
                <section className="flex justify-between items-center gap-30 pt-20">
                    <h1 className="text-6xl text-navy-blue-900 font-semibold font-quicksand">Sobre nosotros</h1>
                    <p className="w-150 text-xl text-navy-blue-700 font-kanit font-[300]">
                        Somos un equipo de desarrollo formado por personas apasionadas por el mundo de la programación y la craeción de software. Movidos por la motivación y el amor que tenemos por este arte, creamos software con la finalidad de proveer herramientas a las personas para facilitar ciertas actividades y procesos.
                    </p>
                </section>
                
                <div className="flex flex-col gap-60">
                    <AboutBlock 
                    image={Jairo}
                    title="Misión"
                    text={MISSION_TEXT}
                    flow="flex-row"
                    textAlign="text-left"
                    />

                    <AboutBlock 
                    image={Jairo}
                    title="Visión"
                    text={VISION_TEXT}
                    flow="flex-row-reverse"
                    textAlign="text-right"
                    />

                    <AboutBlock 
                    image={Jairo}
                    title="Nuestros valores"
                    text={VALUES_TEXT}
                    flow="flex-row"
                    textAlign="text-left"
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AboutPage