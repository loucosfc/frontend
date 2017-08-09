import React from 'react';
import logo from './assets/logo.png';
import { Row, Col } from 'react-flexbox-grid';

import './stylesheet.css';

class Header extends React.Component {
  handleLogoOnTouchTap = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="header">
        <Row className="header">
          <Col xs={12}>
            <div className="abacate" />
            <img src={logo} className="logo" onTouchTap={() => this.handleLogoOnTouchTap()} alt="Loucos F.C." />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header;
