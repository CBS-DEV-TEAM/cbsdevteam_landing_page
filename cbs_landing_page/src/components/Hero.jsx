import tablet from '../assets/mockup_tablet.svg'

function Hero(){
    return(
        <>
            <div className="w-200 flex items-center flex-col">
                <p className="text-white text-center text-6xl font-bold mb-12">
                    Software de calidad para cubrir tus necesidades
                </p>
                <p className="text-white text-center w-170">Desarollamos servicios que te ayudan a simplificar procesos y hacer tu trabajo más eficiente.
                    Con una alta calidad y responsabilidad con el cliente para asegurar la mejor de las experiencias.
                </p>
            </div>

            <img src={tablet} alt=""/>
        </>
    )
}

export default Hero