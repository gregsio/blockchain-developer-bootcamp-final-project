// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract Crowdfunding {

    //constructor() public {}

    // The website displays: balance of funds donated, minimum funds required to kick-off the project/cause, an optimal target goal.
    function campaignstatus() public view returns(uint campaignbalance, uint minfunds, uint targetgoal) {

    }


    //Users willing to participate in the crowdfunding click on the "Donate" button. Metamask authentication triggers and allow the user to send ETH to the contact address.
    function deposit() public payable returns(uint256 balance){

    }

    // Upon succesful transaction the balance updates on the website.
    event depositEvent(address donator, uint256 amount);


    // Contract/campaign owner can withdraw or refund funds.
    modifier owner() {
      _;
    }
    function withdrawfunds() public owner {

    }
    function refund(address donor) public owner {

    }
    event withdrawEvent(uint256 amount);



}
