import Header from "../components/Header";
import Footer from "../components/Footer";
import {useParams, Navigate} from 'react-router-dom'
import data from "../datas/listings.json";
import React, {useEffect, useState} from "react";

function ListingDetails() {
    const {id} = useParams();
    const [listing, setListing] = useState(0);

    useEffect(() => {
        const l = data.find(d => d.id === id)
        setListing(l)
    }, []);

    if(listing === undefined){
        return <Navigate to={'/error404'}/>
    }

    if(listing === null){
        return null
    }

    return (
        <div className="listingform-container">
            <Header/>
            <section>
                {listing.title}
            </section>
            <Footer/>
        </div>
    )
}

export default ListingDetails