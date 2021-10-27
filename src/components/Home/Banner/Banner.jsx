import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleRight, faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import Button from "../../../utils/Buttons"
import "./Banner.scss"

export default function Banner() {
  return (
    <div className="container">
      <div className="home-banner">
      <div className="home-banner_info">
        <h1>hi. this is lorem.</h1>
        <p>Pariatur excepteur reprehenderit eu in. Sit ea fugiat deserunt commodo ex cillum commodo non exercitation veniam aute. Et velit deserunt aliqua est commodo minim amet quis.</p>
      </div>
      <div className="home-banner_buttons">
        <Button primary={true} text={"Ok let's go"} icon={<FontAwesomeIcon className="animate-button-icon" icon={faArrowCircleRight} />} />
        <Button text={"More info"} icon={<FontAwesomeIcon className="animate-button-icon" icon={faQuestionCircle} />} />
      </div>
      </div>
    </div>
  )
}
