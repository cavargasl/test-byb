import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Layout from '../pages/Layout'
import Home from '../containers/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}
