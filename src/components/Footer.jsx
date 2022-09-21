import logof from '../assets/logof.png'
import logof2 from '../assets/logof2.png'
import '../styles/Footer.css'


function Footer(){
    return(
        <div className='footer-container'>
             <img src={logof} alt="logo black"></img>
             <img src={logof2} alt="copyright"></img>
        </div>
    )

}

export default Footer