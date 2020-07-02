// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

contract Token {
    /* tokenの残高を保存するマッピング */
    mapping(address => uint256) public balanceOf;

    /* 初期化 */
    constructor(uint256 initialSupply) public {
        balanceOf[msg.sender] = initialSupply;
    }

    /* 送金を行う関数 */
    function transfer(address _to, uint256 _value) public returns (bool) {
        if (balanceOf[msg.sender] < _value) return false;
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        return true;
    }
}
