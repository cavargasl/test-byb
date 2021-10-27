import React from 'react'
import "./buttons.scss"

/**
 * return a element html type button
 * @param {onClick, primary=false, text, icon, iconleft=false} props 
 * @returns <button />
 */
export default function Button(props) {
  const {onClick, primary=false, text, icon, iconleft=false} = props
  return(
    <button
      onClick={onClick}
      className={primary ? "button primary" : "button secundary"}
    >
      {
        iconleft ? 
        <Left text={text} icon={icon} />:
        <Rihgt text={text} icon={icon} />
      }
    </button>
  )
}


const Left = (props) => {
  return (
    <>
      {props.icon? props.icon : null}{props.text}
    </>
  )
}

function Rihgt(props) {
  return (
    <>
    {props.text}{props.icon? props.icon : null}
    </>
  )
}
