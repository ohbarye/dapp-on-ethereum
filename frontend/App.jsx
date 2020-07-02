import React from "react";

const getBalanceInEth = async (updateBalance, contract, account) => {
  const balance = await contract.methods.getBalanceInEth(account).call();
  updateBalance(balance);
};

const getBalance = async (updateBalance, web3, account) => {
  const balance = await web3.eth.getBalance(account);
  updateBalance(balance);
};

export const App = ({ web3, contract }) => {
  const [defaultAccount, updateDefaultAccount] = React.useState(
    window.web3.eth.defaultAccount
  );
  const [balance, updateBalance] = React.useState("Waiting for a response...");
  const [ebalance, updateeBalance] = React.useState(
    "Waiting for a response..."
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (defaultAccount !== window.web3.eth.defaultAccount) {
        updateDefaultAccount(window.web3.eth.defaultAccount);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    getBalanceInEth(updateBalance, contract, defaultAccount);
    getBalance(updateeBalance, web3, defaultAccount);
  }, [defaultAccount]);

  return (
    <div>
      <div>My Address: {defaultAccount}</div>
      <div>My Balance: {balance}</div>
      <div>My eBalance: {ebalance}</div>
    </div>
  );
};
