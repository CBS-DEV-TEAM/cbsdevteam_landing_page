import '../../theme.css'
import signature from '../../assets/signature_placeholder.png'
import logo from '../../assets/logo_placeholder.svg'
import twitter_icon from '../../assets/twitter_icon.svg'
import instagram_icon from '../../assets/instagram_icon.svg'

function Footer(){
    return(
        <>
            <div className='min-h-30 bg-gradient-to-t from-white to-transparent'>

            </div>
            <footer className='flex px-80 py-10 justify-between items-center bg-white'>
                <div className='flex flex-col justify-center items-center w-50'>
                    <img src={logo} alt="" className='w-20'/>
                    <img src={signature} alt="" className='w-50'/>
                </div>
                <div className='flex items-center justify-center w-50'>
                    <p className='text-navy-blue-700 text-lg'>© CBSDevteam 2025</p>
                </div>
                <div className='w-50'>
                    <ul className='flex flex-col gap-5 justify-center items-center'>
                        <li><a href=""><img src={instagram_icon} alt="" className='w-12'/></a></li>
                        <li><a href=""><img src={twitter_icon} alt="" className='w-12'/></a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer