import Banner from '../components/Banner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useEffect, useState } from 'react'
import data from '../datas/listings.json'
import Listing from '../components/Listing'

function Home() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    setListings(data)
  }, [])

  return (
    <div>
      <Header />
      <div className="container-home" style={{ padding: '32px' }}>
        <Banner />
        <section className="listings">
          {listings.map((listing) => (
            <Listing listing={listing} key={listing.id} />
          ))}
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Home
