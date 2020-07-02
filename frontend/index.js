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
  alert("You need to install Metamask!");
}

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
