import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import registerServiceWorker from './registerServiceWorker';
import App from './app';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

registerServiceWorker();
