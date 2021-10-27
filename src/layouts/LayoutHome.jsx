import React from 'react'
import "./LayoutHome.scss"

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function LayoutHome({children}) {
  return (
    <div className="main">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
