import React, {useState, useEffect} from 'react'
import "./Cards.scss"

const getInfoAPI = [
  {
    title: "Put something here",
    subtitle: "Maybe here as well i think",
    info: "Duis minim irure occaecat laborum cupidatat irure quis minim proident deserunt commodo.",
    img: "https://s1.1zoom.me/big0/98/Wheat_Closeup_Green_Ear_botany_520298_1280x876.jpg"
  },
  {
    title: "An interesting title",
    subtitle: "This is also an interesting subtitle",
    info: "Officia mollit non id ullamco est qui fugiat adipisicing officia nisi fugiat velit tempor.",
    img: "https://cdn.pixabay.com/photo/2018/12/19/21/53/italy-3884873_960_720.jpg"
  },
  {
    title: "Oh, and finally ...",
    subtitle: "Here's another intriguing subtitle",
    info: "Mollit adipisicing do veniam ex commodo.",
    img: "https://www.pixopolitan.com/blog/wp-content/uploads/2016/04/24375_hd-1024x717.jpg"
  }
]

export default function Cards() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(getInfoAPI)
  }, [cards])

  return (
    <div className="cards container">
      {cards.map((element, index) => {
        return <Card key={index} data={element} />
      })}
    </div>
  )
}

function Card({data}){
  return(
    <div className="card">
      <div className="card_img">
        <img src={data.img} alt={data.title} loading="lazy" />
        <span>{data.title}</span>
      </div>
      <div className="card_info">
        <h3>{data.subtitle}</h3>
        <p>{data.info}</p>
      </div>
    </div>
  )
}
