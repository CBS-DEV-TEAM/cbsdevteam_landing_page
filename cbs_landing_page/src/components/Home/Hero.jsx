import { useEffect } from 'react'
import tablet from '../../assets/mockup_tablet.svg'
import '../../theme.css'
import { motion } from 'motion/react'
import { fadeInUp } from '../animations/fadeInUp.js'

function Hero(){
    return(
        
        <>
            <div className="w-200 flex items-center flex-col gap-10" id='Hero'>
                <motion.p 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                custom={0.1}
                viewport={{amount:0.5}} 
                className="text-navy-blue-900 text-center text-6xl font-bold font-quicksand"
                >
                    Software de calidad para cubrir tus necesidades
                </motion.p>
                <motion.p 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                custom={0.2}
                viewport={{amount:0.5}} 
                className="text-navy-blue-800 text-center text-lg font-kanit font-[300] w-190"
                >
                    Desarrollamos servicios que te ayudan a simplificar procesos y hacer tu trabajo más eficiente.
                    Con una alta calidad y responsabilidad con el cliente para asegurar la mejor de las experiencias.
                </motion.p>
                <motion.img 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                custom={0.3}
                viewport={{amount:0.5}} 
                src={tablet} alt="" 
                className=''
                />
            </div>

        </>
    )
}

export default Hero