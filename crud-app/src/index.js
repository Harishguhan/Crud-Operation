import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import contactReducer from "./Redux/reducers/ContactReducer";
import { Provider } from "react-redux";
import {stores} from "./Toolkit/store";

// const store = createStore(contactReducer);

ReactDOM.render(
  // <BrowserRouter>
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // </BrowserRouter>,

  <BrowserRouter>
    <Provider store={stores}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
