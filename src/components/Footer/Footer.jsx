import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faDribbbleSquare, faPinterestSquare} from '@fortawesome/free-brands-svg-icons'

import "./Footer.scss"

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer_info">
        <Aside />
        <Aside />
        <Aside />
        <Contact />
      </div>
      <p>&copy; Untiled. All rights reserved</p>
    </footer>
  )
}


function Aside() {
  return(
    <aside className="footer_aside">
      <h2>Random Stuff</h2>
      <div className="footer_aside_info">
        <p>Cillum aliqua consectetur.</p>
        <p>Consectetur eu dolor in.</p>
        <p>Eiusmod ut ea nostrud sunt in.</p>
        <p>Ea nulla ex ut exercitation anim.</p>
        <p>Nulla id nulla in nisi proident.</p>
      </div>
    </aside>
  )
}

function Contact(){
  return(
    <section className="footer_aside">
      <h2>Contact Us</h2>
      <div className="brand-icon">
        <FontAwesomeIcon icon={faTwitterSquare}/>
        <FontAwesomeIcon icon={faFacebookSquare}/>
        <FontAwesomeIcon icon={faInstagramSquare}/>
        <FontAwesomeIcon icon={faDribbbleSquare}/>
        <FontAwesomeIcon icon={faPinterestSquare}/>
      </div>
      <div className="address">
        <p>1234 Fictional Road</p>
        <p>Nashville, TN 000000</p>
        <p>(800) 555-0000</p>
      </div>
    </section>
  )
}