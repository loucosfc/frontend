import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class MaintenanceMode extends React.Component {
  render() {
    return this.props.enabled ? (
      <div className="maintenance-mode">
        <div className="progress">
          <CircularProgress color="#e7a33a" size={256} thickness={5} />
        </div>
      </div>
    ) : null;
  }
}

export default MaintenanceMode;
