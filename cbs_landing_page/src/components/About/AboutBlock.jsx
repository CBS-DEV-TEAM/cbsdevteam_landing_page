import ScrollAnimation from '@/src/components/common/ScrollAnimation.jsx'

function AboutBlock({image, title, text, flow, textAlign}){
    return(
        <section className={`flex justify-between gap-30 ${flow}`}>
            <ScrollAnimation>
                <img src={image} alt="" className='w-120'/>
            </ScrollAnimation>
            <div className='flex flex-col gap-10'>
                <ScrollAnimation>
                    <h1 className={`text-6xl text-navy-blue-900 font-semibold font-quicksand ${textAlign}`}>{title}</h1>
                </ScrollAnimation>
                <ScrollAnimation>
                    <p className={`w-150 text-xl text-navy-blue-700 font-kanit font-[300] ${textAlign}`}>
                        {text}
                    </p>
                </ScrollAnimation>
            </div>
        </section> 
    )
}

export default AboutBlock