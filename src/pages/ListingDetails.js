import Header from '../components/Header'
import Footer from '../components/Footer'
import Accordeon from '../components/Accordeon'
import { useParams, Navigate } from 'react-router-dom'
import data from '../datas/listings.json'
import React, { useEffect, useState } from 'react'

function ListingDetails() {
  const { id } = useParams()
  const [listing, setListing] = useState(null)

  useEffect(
    () => {
      const l = data.find((d) => d.id === id)
      setListing(l)
    },
    [id],
    []
  )

  if (listing === undefined) {
    return <Navigate to={'/error404'} />
  }

  if (listing === null) {
    return null
  }

  return (
    <div className="listingform-container">
      <Header />
      <section>
        <div className="listing-content">
          <h1 className="listing-title"> {listing.title}</h1>
          <h2 className="listing-location"> {listing.location}</h2>
        </div>
        <div className="listing-content-right">
          <h2 className="listing-owner-name">{listing.host.name}</h2>
          <img src={listing.host.picture} alt="host pic" />
        </div>
        <div className="tags">{listing.tags}</div>
      </section>
      <section className="dropdown-section">
        <Accordeon text="Description">{listing.description}</Accordeon>
        <Accordeon text="Équipements">
          <ul>
            {listing.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Accordeon>
      </section>
      <Footer />
    </div>
  )
}

export default ListingDetails
