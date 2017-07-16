import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import IconArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

import './stylesheet.css';

class ButtonBack extends React.Component {
  handleBackAction = () => {
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="button-back">
        <RaisedButton label="Voltar" onTouchTap={this.handleBackAction} icon={<IconArrowBack />} />
      </div>
    )
  }
}

export default ButtonBack;
