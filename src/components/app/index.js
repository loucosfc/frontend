import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import Home from '../home'
import About from '../about'

export default () => (
    <BrowserRouter>
      <div className="app">
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    </BrowserRouter>
);