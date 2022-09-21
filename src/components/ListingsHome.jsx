import React, { useEffect, useState } from "react";
import data from '../datas/listings.json'
import Listings from "./Listings";

function ListingsHome (){
    const [listings, setListings] = useState(null);
    
    useEffect(() => {
        setListings(data);
    }, []);

    return (
      <div className="listings-container">
        <Listings listings={listings} />
      </div>
    )
}

export default ListingsHome