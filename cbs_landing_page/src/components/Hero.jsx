import tablet from '../assets/mockup_tablet.svg'

function Hero(){
    return(
        <>
            <div className="w-200 flex items-center flex-col">
                <p className="text-white text-center text-6xl font-bold mb-12">
                    Software de calidad para cubrir tus necesidades
                </p>
                <p className="text-white text-center w-170">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ullam aliquid debitis quis commodi voluptatem  assumenda eaque vel pariatur, quos   provident perspiciatis explicabo</p>
            </div>

            <img src={tablet} alt="" />
        </>
    )
}

export default Hero