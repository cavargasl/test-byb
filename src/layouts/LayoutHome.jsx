import React from 'react'
import "./LayoutHome.scss"

import Header from '../components/Header/Header'

export default function LayoutHome({children}) {
  return (
    <div className="main">
      <Header />
      {children}
      <p>footer</p>
    </div>
  )
}
