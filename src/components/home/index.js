import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TeamPicker from '../team-picker';
import Header from '../header';

import './home.css';


class Home extends React.Component {
  handleSelect = (team) => {
    this.props.history.push(`/${team.slug}`)
  };

  render() {
    return (
      <Grid className="home">
        <Header />
        <TeamPicker
          onSelect={(team) => this.handleSelect(team)}
        />
      </Grid>
    );
  }
}

export default withRouter(Home);
