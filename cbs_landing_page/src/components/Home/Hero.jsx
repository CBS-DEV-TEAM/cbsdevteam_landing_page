import tablet from '../../assets/mockup_tablet.svg'
import '../../theme.css'

function Hero(){
    return(
        <>
            <div className="w-200 flex items-center flex-col gap-10" id='Hero'>
                <p  className="text-navy-blue-900 text-center text-6xl font-bold font-quicksand">
                    Software de calidad para cubrir tus necesidades
                </p>
                <p className="text-navy-blue-800 text-center text-lg font-kanit font-[300] w-190">Desarrollamos servicios que te ayudan a simplificar procesos y hacer tu trabajo más eficiente.
                    Con una alta calidad y responsabilidad con el cliente para asegurar la mejor de las experiencias.
                </p>
                <img src={tablet} alt="" className=''/>
            </div>

        </>
    )
}

export default Hero