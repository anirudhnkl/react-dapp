//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenE20 is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        name = "TokenE20";
        symbol = "T20";
        _mint(msg.sender, 100000 * (10 ** 18));
    }
}
