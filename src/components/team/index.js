import React from 'react';
import { Grid } from 'react-flexbox-grid';
import Header from '../header';
import { socketConnect } from 'socket.io-react';
import CircularProgress from 'material-ui/CircularProgress';

import './team.css';

class Team extends React.Component {
  render() {
    return (
      <Grid className="team">
        <Header history={this.props.history} />
        {this.props.maintenanceMode &&
          <div className="maintenance-mode">
            <div className="progress">
              <CircularProgress color="#e7a33a" size={256} thickness={5} />
            </div>
          </div>
        }
      </Grid>
    )
  };
}

export default socketConnect(Team);

