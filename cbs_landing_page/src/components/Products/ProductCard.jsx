import { motion } from "motion/react";
import ScrollAnimation from "../common/ScrollAnimation";
import { fadeInUp } from "../animations/fadeInUp";

function ProductCard(){
    return(
        <ScrollAnimation>
            <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="min-w-150 min-h-90 bg-blue-300/30 rounded-2xl"
            ></motion.div>
        </ScrollAnimation>
    )
}

export default ProductCard