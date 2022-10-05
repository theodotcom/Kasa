import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Dropdown from "../components/Dropdown"
import React from 'react'
import '../styles/Dropdowns.css'
import '../styles/Apropos.css'
import banner2 from '../assets/Background.png'

function Apropos(){

    return(
    <div>
        <Header />
        <div className="container-dropdown">
        <section className="kasa-banner">
        <img src={banner2} alt="kasa" className="kasa-img" />
    </section>
        <div className="container-dropdown2">
        <Dropdown text="Fiabilite"open={true}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</Dropdown>
        <Dropdown text="Respect"open={true}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</Dropdown>
        <Dropdown text="Service"open={true}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</Dropdown>
        <Dropdown text="Responsabilite"open={true}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</Dropdown>
        </div>
        </div>
        <Footer />
        
    </div>
)
}

export default Apropos