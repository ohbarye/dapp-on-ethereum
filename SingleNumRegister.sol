pragma solidity ^0.6.10;

contract SingleNumRegister {
    uint256 storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256 retVal) {
        return storedData;
    }
}
