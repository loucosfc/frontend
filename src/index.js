import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app';
import injectTapEventPlugin from 'react-tap-event-plugin';

const socket = require('socket.io-client')(process.env.REACT_APP_API_URL);

console.log(process.env);

socket.on('connect', () => {
  console.log('Cliente conectou!');
});

injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
