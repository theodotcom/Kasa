import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/Header.css'

function Header() {
  return (
    <div className="navigation">
      <Link className="logo" to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <nav className="navbar">
        <Link className="acceuil" to="/">
          Acceuil
        </Link>
        <Link className="propos" to="/apropos">
          A propos
        </Link>
      </nav>
    </div>
  )
}

export default Header