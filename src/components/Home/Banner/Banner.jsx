import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleRight, faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import {PrimaryButton, SecundaryButton} from "../../../utils/Buttons"
import "./Banner.scss"

export default function Banner() {
  return (
    <div className="container">
      <div className="home-banner">
      <div className="home-banner_info">
        <h1>hi. this is lorem.</h1>
        <p>Pariatur excepteur reprehenderit eu in. Sit ea fugiat deserunt commodo ex cillum commodo non exercitation veniam aute. Et velit deserunt culpa proident id aute sit aliqua est commodo minim amet quis. Nostrud veniam tempor cillum veniam aliquip tempor officia duis sit adipisicing.</p>
      </div>
      <div className="home-banner_buttons">
        <PrimaryButton text={"Ok let's go"} icon={<FontAwesomeIcon icon={faArrowCircleRight} />} />
        <SecundaryButton text={"More info"} icon={<FontAwesomeIcon icon={faQuestionCircle} />} />
      </div>
      </div>
    </div>
  )
}
