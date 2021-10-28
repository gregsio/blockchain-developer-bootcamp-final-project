// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract Crowdfunding {
  // constructor() public {
  // }

function campaignstatus() public view;

function deposit() public payable return (uint256 balance);

function withdrawfunds() owner return(bool status);

function refund() private return (bool status);

modifier owner();

event depositEvent(address donator, uint256 amount);

}
