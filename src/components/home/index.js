import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';
import { socketConnect } from 'socket.io-react';
import TeamPicker from '../team-picker';
import Header from '../header';

import './home.css';


class Home extends React.Component {
  componentDidMount() {
    this.props.socket.emit('end:stream');
  }
  handleSelect = (team) => {
    this.props.history.push(`/${team.slug}`)
  };

  render() {
    return (
      <Grid fluid className="home">
        <Header history={this.props.history} />
        <TeamPicker
          onSelect={(team) => this.handleSelect(team)}
        />
      </Grid>
    );
  }
}

export default socketConnect(withRouter(Home));
