import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import LayoutHome from '../layouts/LayoutHome'
import Home from '../containers/Home'
import NotFound from '../containers/NotFound/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <LayoutHome>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </LayoutHome>
    </BrowserRouter>
  )
}
