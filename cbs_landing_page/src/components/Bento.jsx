import './Bento.css'

function Bento(){
    return(
        <>
            <div className="w-250 min-h-200 m-50 z-10 bentoBox" id='Products'>
                <div className="bg-blue-300/30 backdrop-blur-sm rounded-2xl"></div>
                <div className="bg-blue-300/30 backdrop-blur-sm rounded-2xl"></div>
                <div className="bg-blue-300/30 backdrop-blur-sm rounded-2xl"></div>
                <div className="bg-blue-300/30 backdrop-blur-sm rounded-2xl"></div>
            </div>
            <div className='mt-50'>
                &nbsp; {/*Pochez para dejar espacio vacio en la pagina pal scroll*/}
            </div>
        </>
    )
}

export default Bento;