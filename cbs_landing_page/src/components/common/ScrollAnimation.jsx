import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

function ScrollAnimation({children}){
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({target: ref, offset:['start end', 'end start']})
    const opacity = useTransform(scrollYProgress, [0,0.2,0.7,0.9],[0,1,1,0])
    const y = useTransform(scrollYProgress, [0,0.2], [150,0])

    return(
        <motion.div
        ref={ref}
        style={{opacity,y}}
        >
            {children}
        </motion.div>
    )
}

export default ScrollAnimation