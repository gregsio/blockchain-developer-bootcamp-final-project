# blockchain-developer-bootcamp-final-project

# CROWDFUNDING

 Crowdfunding a given project or cause.

### MVP

1. Users visit the website and read about the project/cause raising funds.

2. The website displays: amount currently donated, minimum requirement for the project/cause to kick-off, an optimal target goal.

     `function campaignstatus() public view;`

3. Users willing to participate in the crowdfunding click on the "Donate" button

4. Metamask authentication triggers and allow the user to send ETH to the contact address

    `function deposit() public payable return(uint256 balance);`

    `function withdrawfunds() owner return(bool status);`

    `function refund() private return (bool status);`

    `modifier owner();`

5. Upon succesful transaction the balance updates on the website

    `event depositEvent(address donator, uint256 amount);`

### ADD-ONS

0. Allow several fundraising campaigns.

    `function createCampaign(uint256 viableMinimum, uint256 goal) public owner`

1. Send NFT perks to every donor's wallet address

2. If minimum requirement is not reached by end of fundraising campaign, funds are sent back to the donator

3. Donation matching up to 5k USD to offer a charity

5. Donors Leaderboard

6. ERC-20 airdropped
