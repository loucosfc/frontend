import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import TeamsService from 'services/teams';

import './stylesheet.css';

class TeamList extends React.Component {
  handleSelect(team) {
    this.props.onSelect(team);
  }
  render() {
    return (
      <div className="team-picker">
        <Row>
          <Col xs={12}>
            <h1 className="title">É só escolher seu time e correr para o abraço!</h1>
          </Col>
        </Row>
        <Row>
          {TeamsService.getAll().map((team) => (
          <Col key={team.nickname} xs={6} sm={3}>
            <img src={team.shield} alt={team.nickname} title={team.nickname} onTouchTap={() => this.handleSelect(team)} className="shield" />
          </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default TeamList;
