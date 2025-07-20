import './Navbar.css'

function Navbar(){
    return(
        <>
            <nav className="flex flex-row justify-between py-5 px-80 fixed top-0 left-0 w-full">
                <h1 className="self-center text-white font-bold text-2xl font-edge">CBSDevteam</h1>
                <ul className="flex self-center justify-center">
                    <li className="text-white py-2 px-3 ml-5 font-medium text-sm"><a href="#">INICIO</a></li>
                    <li className="text-white py-2 px-3 ml-5 font-medium text-sm"><a href="#">NUESTROS PRODUCTOS</a></li>
                    <li className="text-white py-2 px-3 ml-5 font-medium text-sm"><a href="#">ACERCA DE</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar