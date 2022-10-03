import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Dropdown from "../components/Dropdown"
import React from 'react'
import '../styles/Dropdowns.css'

function Apropos(){

    return(
    <div>
        <Header />
        <Banner />
        <Dropdown text="Fiabilite">La bienveillance sa mere</Dropdown>
        <Dropdown text="Respect">La bienveillance sa mere</Dropdown>
        <Dropdown text="Service">La bienveillance sa mere</Dropdown>
        <Dropdown text="Responsabilite">La bienveillance sa mere</Dropdown>
        <Footer />
        
    </div>
)
}

export default Apropos