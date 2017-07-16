import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';
import { socketConnect } from 'socket.io-react';
import TeamList from './components/TeamList';
import Header from 'components/Header';

import './stylesheet.css';

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
        <TeamList
          onSelect={(team) => this.handleSelect(team)}
        />
      </Grid>
    );
  }
}

export default socketConnect(withRouter(Home));