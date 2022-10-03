import logof from '../assets/logof.png'
import logof2 from '../assets/logof2.png'
import '../styles/Footer.css'


function Footer(){
    return(
        <div className='footer-container'>
             <img className='logof' src={logof} alt="logo black"></img>
             <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
    )

}

export default Footer