import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContainer } from "react-hot-loader";
import * as serviceWorker from "./serviceWorker";

// Import The Store & Provider From EasyPeasy
import { StoreProvider, createStore } from "easy-peasy";

// Importing Model
import model from "./store/model";

const store = createStore(model);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </AppContainer>,
    document.getElementById("root")
  );
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}
