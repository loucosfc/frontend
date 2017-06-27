import React from 'react';
import logo from '../../assets/logo.png';
import { Row, Col } from 'react-flexbox-grid';

import './header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Row className="header">
          <Col xs={12}>
            <img src={logo} alt="Loucos F.C." />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header;
