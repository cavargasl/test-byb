import React, {useState} from 'react'
import "./Header.scss"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSlash } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [isMobile, setIsMobile] = useState(true)
  return (
    <header className="header container">
      <h1 className="header_logo">myLorem</h1>
      <nav className="navbar">
        <ul className={isMobile? "header_link mobile" : "header_link"}>
          <li>
            <Link to="/">welcome</Link>
          </li>
          <li>
            <Link to="/">Dropdown</Link>
          </li>
          <li>
            <Link to="/">left sidebar</Link>
          </li>
          <li>
            <Link to="/">right sidebar</Link>
          </li>
          <li>
            <Link to="/">no sidebar</Link>
          </li>
        </ul>
      </nav>
      <button className="mobile_menu_icon">
        {isMobile? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faSlash}/> }
      </button>
    </header>
  )
}

function MenuTopWeb(){
  return(
    <>
      <ul className="header_menutop">
        <li>
          <Link to="/">welcome</Link>
        </li>
        <li>
          <Link to="/">Dropdown</Link>
        </li>
        <li>
          <Link to="/">left sidebar</Link>
        </li>
        <li>
          <Link to="/">right sidebar</Link>
        </li>
        <li>
          <Link to="/">no sidebar</Link>
        </li>
      </ul>
    </>
  )
}