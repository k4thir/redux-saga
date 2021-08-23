import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import userSaga from "./sagas";

const SagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: userReducer,
  middleware: [...getDefaultMiddleware(), SagaMiddleware]
});
SagaMiddleware.run(userSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
