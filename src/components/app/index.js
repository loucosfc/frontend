import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import Home from '../home'
import About from '../about'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import * as colors from 'material-ui/styles/colors'
import './app.css';

export default () => (
    <BrowserRouter>
      <MuiThemeProvider>
        <div className="app">
        <AppBar
          titleStyle={{ color: colors.grey900 }}
          style={{ background: colors.grey300, textAlign: 'center' }}
          title={<img src="http://loucosfc.com/assets/logo-846f77c8d6ca20d7d2f6b6eb698c2aa6.png" height="50" style={{margin: 6}} />}
          showMenuIconButton={false}
        />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
);