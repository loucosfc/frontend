import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import { SocketProvider } from 'socket.io-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HomeScene from './scenes/Home';
import TeamPage from 'containers/TeamPage';

import webSocketService from './services/websocket';

import './stylesheet.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maintenanceMode: true,
    };
  }

  componentDidMount() {
    webSocketService.getSocket().on('connect', () => {
      this.setMaintenanceMode(false);
    });

    webSocketService.getSocket().on('disconnect', () => {
      this.setMaintenanceMode(true);
    });
  }

  setMaintenanceMode(value) {
    this.setState({
      maintenanceMode: value,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <SocketProvider socket={webSocketService.getSocket()}>
          <MuiThemeProvider>
            <div className="app">
              <Route exact path="/" component={HomeScene}/>
              <Route path="/:teamSlug" render={(props) => <TeamPage maintenanceMode={this.state.maintenanceMode} {...props} />} />
            </div>
          </MuiThemeProvider>
        </SocketProvider>
      </BrowserRouter>
    );
  }
}
export default App;
