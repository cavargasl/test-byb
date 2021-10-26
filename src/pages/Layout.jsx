import React from 'react'

export default function Layout({children}) {
  return (
    <div>
      <p>Header</p>
      {children}
      <p>footer</p>
    </div>
  )
}
