import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TeamPicker from '../team-picker';
import Header from '../header';

import './home.css';

export default () => (
  <Grid className="home">
    <Header />
    <TeamPicker />
  </Grid>
);
