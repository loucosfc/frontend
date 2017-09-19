import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import injectTapEventPlugin from "react-tap-event-plugin";
import { AppContainer } from "react-hot-loader";
import registerServiceWorker from "./registerServiceWorker";
import App from "./app";
import store from "./store";

import "video-react/dist/video-react.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

injectTapEventPlugin();

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById("root")
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./app", () => {
    const NextApp = require("./app").default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}

registerServiceWorker();
