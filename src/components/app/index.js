import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import Home from '../home'
import Team from '../team'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './app.css';
import teams from '../../utils/teams';

export default () => (
    <BrowserRouter>
      <MuiThemeProvider>
        <div className="app">
          <Route exact path="/" component={Home}/>
          {teams.map((v) => (
            <Route path={`/${v.slug}`} component={Team}/>
          ))}
        </div>
      </MuiThemeProvider>
    </BrowserRouter>
);