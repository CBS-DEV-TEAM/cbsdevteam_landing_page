import './Bento.css'
import ScrollAnimation from '../common/ScrollAnimation';

function Bento(){
    return(
        <>
            <div className="w-[62.5rem] min-h-[50rem] mx-[12.5rem] z-10 bentoBox" id='Products'>
                <ScrollAnimation>
                    <div
                    className="bg-blue-300/30 backdrop-blur-sm rounded-2xl w-full h-full"
                    ></div>
                </ScrollAnimation>
                <ScrollAnimation>  
                    <div
                    className="bg-blue-300/30 backdrop-blur-sm rounded-2xl w-full h-full"
                    ></div>
                </ScrollAnimation> 
                <ScrollAnimation>
                    <div
                    className="bg-blue-300/30 backdrop-blur-sm rounded-2xl w-full h-full"
                    ></div>
                </ScrollAnimation>
                <ScrollAnimation>
                    <div
                    className="bg-blue-300/30 backdrop-blur-sm rounded-2xl w-full h-full"
                    ></div>
                </ScrollAnimation>
            </div>
        </>
    )
}

export default Bento;