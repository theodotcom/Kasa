import React from "react";
import '../styles/Listings.css'

function Listings({ listings }) {
  return (
    <section className='listings'>
      {
        listings?.map(l => (
          <div className='card' style={{backgroundImage: `url(${l.cover})`}} key={`listings${l.id}`}>
            <h2 className='card-title'>{l.title}</h2>
          </div>
        )) || null
      }
    </section>
  )
}

export default Listings