import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import Web3 from "web3";

// Is there is an injected web3 instance?
if (typeof web3 !== "undefined") {
  App.web3Provider = web3.currentProvider;
  web3 = new Web3(web3.currentProvider);
} else {
  // If no injected web3 instance is detected, fallback to Ganache.
  App.web3Provider = new web3.providers.HttpProvider("http://127.0.0.1:7545");
  web3 = new Web3(App.web3Provider);
}

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
