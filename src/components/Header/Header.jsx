import React, {useState} from 'react'
import "./Header.scss"
import {Link, useHistory} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const history = useHistory()
  const [active, setActive] = useState(false)
  const changeActive = () => {
    if(active === history.location.pathname){
      return setActive(false)
    }
    return setActive(history.location.pathname)
  }
  return (
    <header className="header container">
      <Link to="/" className="header_logo" onClick={() => changeActive()}><h1>myLorem</h1></Link>
      <nav className="navbar">
        <ul className={isMobile? "header_link mobile" : "header_link"}
          onClick={() => setIsMobile(!isMobile)}
          >
          <li className={active === "/" ? "active" : "" } onClick={() => changeActive()}>
            <Link to="/">welcome</Link>
          </li>
          <li className={active === "/dropdown" ? "active" : "" } onClick={() => changeActive()}>
            <Link to="/dropdown">Dropdown</Link>
          </li>
          <li className={active === "/left_sidebar" ? "active" : "" } onClick={() => changeActive()}>
            <Link to="/left_sidebar">left sidebar</Link>
          </li>
          <li className={active === "/right_sidebar" ? "active" : "" } onClick={() => changeActive()}>
            <Link to="/right_sidebar">right sidebar</Link>
          </li>
          <li className={active === "/no_sidebar" ? "active" : "" } onClick={() => changeActive()}>
            <Link to="/no_sidebar">no sidebar</Link>
          </li>
        </ul>
      </nav>
      <button className="mobile_menu_icon"
        onClick={() => setIsMobile(!isMobile)}
        >
        {isMobile? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/> }
      </button>
    </header>
  )
}