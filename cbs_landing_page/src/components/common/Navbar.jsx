import './Navbar.css'
import '../../theme.css'

function Navbar(){
    return(
        <>
            <nav className="flex flex-row justify-between py-5 px-80 fixed top-0 left-0 w-full bg-gradient-to-b from-[#BBDEFB] to-transparent z-50">
                <h1 className="self-center text-navbar-blue text-2xl mix-blend-multiply font-righteous">CBSDevteam</h1>
                <ul className="flex self-center justify-center gap-5">
                    <li className="text-navbar-blue py-2 px-3  font-medium text-sm navbar-element"><a href="../../../index.html">INICIO</a></li>
                    <li className="text-navbar-blue py-2 px-3  font-medium text-sm navbar-element"><a href="../../../products.html">NUESTROS PRODUCTOS</a></li>
                    <li className="text-navbar-blue py-2 px-3  font-medium text-sm navbar-element"><a href="../../../about.html">SOBRE NOSOTROS</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar