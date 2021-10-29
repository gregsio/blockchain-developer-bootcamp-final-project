# blockchain-developer-bootcamp-final-project

# *CROWDFUNDING*
## *Crowdfunding for a given project or cause.*


## MVP

### 1. Users visit the website and read about the project/cause raising funds.

### 2. The website displays: balance of funds donated, minimum funds required to kick-off the project/cause, an optimal target goal.

* `function campaignstatus() public view return(uint campaignbalance, uint minfunds, uint targetgoal );`

### 3. Users willing to participate in the crowdfunding click on the "Donate" button.
### 4. Metamask authentication triggers and allow the user to send ETH to the contact address.
* `function deposit() public payable return(uint256 balance);`
* `function withdrawfunds() owner return(bool status);`
* `function refund(address donor) public owner);`
* `modifier owner();`

### 5. Upon succesful transaction the balance updates on the website

* `event depositEvent(address donator, uint256 amount);`

## ADD-ONS

### 1.  Refund donors if the campaign minimum requirement is not reached by end of fundraising campaign,

* Introduces a timebased dependency on the smart contract, which may introduce security weekness if based on block number or epoc.
* What is the proper way of running a countdown counter? Oracle to check time?

### 2. ERC-20 airdropped
 * creating an second contract for generating the ERC-20
 * cross contract communication to trigger sending ERC-20 tokens to the donors upon succesful call to `Deposit()`

### 3. Donation matching up to 5k USD to offer a charity

### 4. Donors Leaderboard
* one way is to keep a public map of all donors and funds sent.
I'd be curious to see if by using the contract address we could fecth all transactions that sent Eth to the contract.
Likely not the most efficient way though


### 5. Allow several fundraising campaigns.

 * `function createCampaign(uint256 viableMinimum, uint256 goal) public owner`
 * Makes the frontend more complicated,
 * Requires a map to keep track of funds for each campaigns

### 6. Send NFT perks to every donor's wallet address
