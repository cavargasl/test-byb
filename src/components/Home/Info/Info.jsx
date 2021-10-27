import React from 'react'
import "./Info.scss"
import pic04 from "../../../assets/images/pic04.jpg"
import pic05 from "../../../assets/images/pic05.jpg"
import pic06 from "../../../assets/images/pic06.jpg"
import pic07 from "../../../assets/images/pic07.jpg"
import Button from '../../../utils/Buttons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileAlt, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'

export default function Info() {
  return (
    <div className="home-info">
      <div className="home-info_content container">
        <div className="home-info_content_interesting">
          <h3>Interesting stuff</h3>
          <div>
            <img src={pic04} alt="pic04.jpg" loading="lazy" />
            <img src={pic05} alt="pic05.jpg" loading="lazy" />
            <img src={pic06} alt="pic06.jpg" loading="lazy" />
            <img src={pic07} alt="pic07.jpg" loading="lazy" />
          </div>
          <Button primary={true} iconleft={true} text={"More"} icon={<FontAwesomeIcon icon={faFileAlt} />} />
        </div>
        <div className="home-info_content_info">
          <h1>So what's this all about?</h1>
          <div>
            <p>Commodo in officia dolore ipsum dolor elit dolor deserunt sit reprehenderit fugiat pariatur est. Officia amet do ex laboris adipisicing voluptate sit Lorem. Eiusmod laborum. Quis duis ullamco exercitation cillum sint proident anim elit dolore in enim est. Tempor velit occaecat exercitation voluptate ad non excepteur irure sint eiusmod.</p>
            <p>Est esse enim velit eu aliquip sit eiusmod aliquip occaecat quis consequat. Excepteur nostrud dolor laborum aliquip nisi amet magna. Irure esse quis dolor do dolor tempor veniam nulla do. Laboris aliqua nostrud occaecat ullamco magna occaecat consectetur.</p>
          </div>
          <Button primary={true} iconleft={true} text={"Continue Reading"} icon={<FontAwesomeIcon icon={faArrowCircleRight} />} />
        </div>
      </div>
    </div>
  )
}
