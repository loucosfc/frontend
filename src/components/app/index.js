import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import Home from '../home'
import About from '../about'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import * as colors from 'material-ui/styles/colors'
import './app.css';

export default () => (
    <BrowserRouter>
      <MuiThemeProvider>
        <div className="app">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
);