// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract Crowdfunding {

  address public contractOwner;
  uint256 public campaignBalance = 0 ether;
  uint256 public constant requiredMinFunds = 3 ether;
  uint256 public constant targetGoal = 12 ether;

    constructor() {
      contractOwner = msg.sender;
    }

    //Users willing to participate in the crowdfunding click on the "Donate" button. Metamask authentication triggers and allow the user to send ETH to the contact address.
    function deposit() public payable {
      campaignBalance += msg.value;
      emit depositEvent(msg.sender, msg.value);
    }

    // Upon succesful transaction the balance updates on the website.
    event depositEvent(address donator, uint256 amount);


    // Contract/campaign owner can withdraw or refund funds.
    modifier owner() {
      require(msg.sender == contractOwner, "Not owner");
      _;
    }
    function withdrawFunds() public payable owner {
      uint256 withdrawAmout = campaignBalance;
      campaignBalance = 0;
      (bool sent, bytes memory data) = contractOwner.call{value: withdrawAmout}("");
      require(sent, "Failed to send Ether");
      emit withdrawEvent(withdrawAmout, contractOwner);
    }

    event withdrawEvent(uint256 amount, address owner);

    function refund(address donor) public owner {

    }



}
