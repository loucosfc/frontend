import React from 'react';
import { Grid } from 'react-flexbox-grid';
import Header from '../header';
import { socketConnect } from 'socket.io-react';
import CircularProgress from 'material-ui/CircularProgress';

import './team.css';

class Team extends React.Component {
  state = {
    maintenanceMode: true,
  };

  componentDidMount() {
    this.props.socket.on('connect', () => {
      console.log('Cliente conectou!');
      this.setMaintenanceMode(false);
    });
    this.props.socket.on('disconnect', () => {
      this.setMaintenanceMode(true);
      console.log('Cliente desconectou!');
    });
  }

  setMaintenanceMode(value) {
    this.setState({
      maintenanceMode: value,
    });
  };

  render() {
    return (
      <Grid className="team">
        <Header history={this.props.history} />
        {this.state.maintenanceMode &&
          <div className="maintenance-mode">
            <div className="progress">
              <CircularProgress color="#e7a33a" size="256" thickness="5" />
            </div>
          </div>
        }
      </Grid>
    )
  };
}

export default socketConnect(Team);

