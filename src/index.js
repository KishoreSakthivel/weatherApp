import React from "react";
import reactDom from "react-dom";
import App from "./app";
import store from "./redux/store";
import { Provider } from "react-redux";
reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
