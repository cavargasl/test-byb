import React from 'react'
import "./buttons.scss"

export function PrimaryButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="button primary"
    >
      {props.text}{props.icon? props.icon : null}
    </button>
  )
}

export function SecundaryButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="button secundary"
    >
      {props.text}{props.icon? props.icon : null}
    </button>
  )
}
