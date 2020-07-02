import "babel-polyfill"; // for https://github.com/ethereum/web3.js/issues/3155
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import MetaCoin from "../build/contracts/MetaCoin.json";
import Web3 from "web3";

// Is there is an injected web3 instance?
if (typeof web3 !== "undefined") {
  const web3 = new Web3("ws://localhost:8545");

  // to check if it works
  web3.eth.getAccounts().then((accounts) => {
    const metacoinABI = MetaCoin.abi;
    const metacoinAddress = "0xE97b7eb6AE732248d0FE5BA25A762D436C5dBf22"; // TODO: how to get this dynamically?...unnecessary?
    const metacoin = new web3.eth.Contract(metacoinABI, metacoinAddress);
    console.log(metacoin);
    console.log(accounts);
    metacoin.methods.getBalanceInEth(accounts[0]).call().then(console.log);
  });
} else {
  alert("You need to install Metamask!");
}

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
