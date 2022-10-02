// SPDX-License-Identifier: MIT

pragma solidity >=0.8.11;

contract Test {
  uint256 number;

  error CustomError();

  function doStuff(uint256 _number) public {
    if (_number < 42) {
      revert CustomError();
    }

    number = _number;
  }

  function getNumber() public view returns(uint256) {
    return number;
  }
}
