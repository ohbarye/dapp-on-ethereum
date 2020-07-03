import "babel-polyfill"; // for https://github.com/ethereum/web3.js/issues/3155
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import MetaCoin from "../build/contracts/MetaCoin.json";
import Web3 from "web3";

if (window.ethereum) {
  // It assumes window.ethereum is provided by Metamask
  // If you'd like to directly connect a private network on local, use "ws://localhost:8545" instead.
  const web3 = new Web3(window.ethereum);

  // Need permission: https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
  async () => {
    await window.ethereum.enable();
  };

  const metacoinABI = MetaCoin.abi;
  const metacoinAddress = Object.values(MetaCoin.networks).map(
    ({ address }) => address
  )[0];
  const metacoin = new web3.eth.Contract(metacoinABI, metacoinAddress);

  ReactDOM.render(
    <App web3={web3} contract={metacoin} />,
    document.getElementById("root")
  );
} else {
  alert("You need to install Metamask!");
}

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
