import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import Home from '../home'
import Team from '../team'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './app.css';
import teams from '../../utils/teams'
import { SocketProvider } from 'socket.io-react'

const socket = require('socket.io-client')(process.env.REACT_APP_API_URL);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maintenanceMode: true,
    };
  }

  componentDidMount() {
    socket.on('connect', () => {
      this.setMaintenanceMode(false);
    });

    socket.on('disconnect', () => {
      this.setMaintenanceMode(true);
    });
  }

  setMaintenanceMode(value) {
    console.log(value);
    this.setState({
      maintenanceMode: value,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <SocketProvider socket={socket}>
          <MuiThemeProvider>
            <div className="app">
              <Route exact path="/" component={Home}/>
              {teams.map((v) => (
                <Route key={v.slug} path={`/${v.slug}`} component={() => <Team maintenanceMode={this.state.maintenanceMode} />} />
              ))}
            </div>
          </MuiThemeProvider>
        </SocketProvider>
      </BrowserRouter>
    );
  }
}
export default App;
