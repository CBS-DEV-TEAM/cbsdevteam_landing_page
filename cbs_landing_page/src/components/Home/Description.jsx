import mockup_windows from '../../assets/mockup_windows.svg'
import ScrollAnimation from '../common/ScrollAnimation.jsx'

function Description(){
    return(
        <>
            <section className="flex gap-[7.5rem] items-center">
                <div className="flex flex-col justify-start gap-7 w-[50rem]">
                    <ScrollAnimation>
                        <h2
                        className="text-navy-blue-900 text-4xl font-semibold font-quicksand"
                        >
                            ¿Qué es CBSDevteam?
                        </h2>  
                    </ScrollAnimation>

                    <ScrollAnimation>
                        <p
                        className="text-navy-blue-700 text-2xl font-kanit font-[300]"
                        >
                            Somos un estudio que desarrolla software a modo de servicios, destinados a cubrir necesidades y facilitar procesos del día a día, a través de soluciones    eficientes que se adapten a los requerimientos del cliente. Nuestros servicios tienen la premisa de ser efectivos, sostenibles y escalables en el tiempo, así  como nosotros nos comprometemos con el cliente para ofrecer una experiencia satisfactoria.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <button
                        className='w-[12.5rem] p-2 bg-[#42A5F5] rounded-[2rem] text-white font-bold transition-colors duration-250 hover:bg-white hover:text-blue-400 hover:cursor-pointer'
                        >
                            Visitar proyectos
                        </button>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation>
                    <div className="">
                        <img src={mockup_windows} alt="" className='w-[30rem]'/>
                    </div>
                </ScrollAnimation>
            </section>
        </>
    )
}

export default Description