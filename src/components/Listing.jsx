import React from "react";
import '../styles/Listings.css'
import {Link} from "react-router-dom";

function Listings({listing}) {
   
    return (
        <Link
            to={listing.id} className='card'
        >
           <img src={listing.cover} alt="host cover" />
            <h2 className='card-title'>{listing.title}</h2>
        </Link>
    )
}

export default Listings