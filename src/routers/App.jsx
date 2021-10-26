import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import LayoutHome from '../layouts/LayoutHome'
import Home from '../containers/Home'

export default function App() {
  return (
    <BrowserRouter>
      <LayoutHome>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </LayoutHome>
    </BrowserRouter>
  )
}
