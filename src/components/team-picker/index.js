import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './team-picker.css';

class TeamPicker extends React.Component {
  render() {
    return (
      <div className="team-picker">
        <Row>
          <Col xs={12}>
            <h1 className="title">É só escolher seu time e correr para o abraço!</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>aeae</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TeamPicker;
