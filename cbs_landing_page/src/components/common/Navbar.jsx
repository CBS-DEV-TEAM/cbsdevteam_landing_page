import './Navbar.css'
import { useEffect, useRef } from 'react'
import { motion, useAnimation, useScroll } from 'motion/react'

function Navbar(){
    const { scrollYProgress } = useScroll()
    const lastY = useRef(0)
    const lastDirection = useRef(null)
    const animation = useAnimation()

    const variants = {
        visible: {
        y: 0,
        opacity: 1,
        transition: { ease: "easeOut", duration: 0.3 }
    },
    hidden: {
        y: -10,
        opacity: 0,
        transition: { ease: "easeOut", duration: 0.3 }
    }
}
    useEffect(() =>{
        if(scrollYProgress.get() < 0.01){
            animation.start("visible")
        }
    },[])

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (currY) => {

            if (currY > lastY.current && lastDirection.current !== "down"){
                animation.start("hidden")
                lastDirection.current = "down"
            } else if (currY < lastY.current && lastDirection.current !== "up"){
                animation.start("visible")
                lastDirection.current = "up"
            }
            lastY.current = currY
        })

        return () => unsubscribe()

    },[])

    return(

        <>
            <nav className={`flex flex-row justify-between py-5 px-80 fixed top-0 left-0 w-full bg-gradient-to-b from-[#BBDEFB] to-transparent z-50`}>
                <motion.div 
                initial="hidden" variants={variants} animate={animation} className='flex flex-row justify-between w-full'
                >
                    <h1 className="self-center text-navbar-blue text-2xl mix-blend-multiply font-righteous">CBSDevteam</h1>
                    <ul className="flex self-center justify-center gap-5">
                        <li className="text-navbar-blue font-medium text-sm"><a href="../../../index.html" className="navbar-element px-3 py-2">INICIO</a></li>
                        <li className="text-navbar-blue font-medium text-sm"><a href="../../../products.html" className="navbar-element px-3 py-2">NUESTROS PRODUCTOS</a></li>
                        <li className="text-navbar-blue font-medium text-sm"><a href="../../../about.html" className="navbar-element px-3 py-2">SOBRE NOSOTROS</a></li>
                    </ul>
                </motion.div>
            </nav>
        </>
    )
}

export default Navbar