import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Carrousel'
import { useParams, Navigate } from 'react-router-dom'
import data from '../datas/listings.json'
import React, { useEffect, useState } from 'react'
import Dropdown from '../components/Dropdown'
import Star from '../components/Rate'
import '../styles/Dropdowns.css'
import '../styles/ListingDetails.css'

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

  const pictures = listing.pictures.map((picture, index) => (
    <img src={picture} alt="" key={index} />
  ))

  return (
    <div className="listingform-container">
      <Header />
      <section className="carousel-section">
        <Carousel>{pictures}</Carousel>
      </section>
      <div className="container-bottom">
        <section className="listing-infos">
          <div className="listing-content">
            <h1 className="listing-title"> {listing.title}</h1>
            <h2 className="listing-location"> {listing.location}</h2>
            <div className="tags">
              <ul>
                {listing.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="listing-content-right">
            <div className="listing-container">
              <h2 className="listing-owner-name">{listing.host.name}</h2>
              <img src={listing.host.picture} alt="host pic" />
            </div>
            <section className="ratings">
              <span>
                <Star rating={listing.rating} />
              </span>
            </section>
          </div>
        </section>
        <section className="dropdown-section">
          <Dropdown text="Description" open={true}>
            {listing.description}
          </Dropdown>
          <Dropdown text="Équipements">
            <ul>
              {listing.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Dropdown>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default ListingDetails
