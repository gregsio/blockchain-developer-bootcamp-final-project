# blockchain-developer-bootcamp-final-project

# *CROWDFUNDING*
## *Crowdfunding for a given project or cause.*


## MVP

### 1. Users visit the website and read about the project/cause raising funds.

### 2. The website displays: balance of funds donated, minimum funds required to kick-off the project/cause, an optimal target goal.

* `function campaignstatus() public view return(uint campaignbalance, uint minfunds, uint targetgoal );`

### 3. Users willing to participate in the crowdfunding click on the "Donate" button. Metamask authentication triggers and allow the user to send ETH to the contact address.
* `function deposit() public payable return(uint256 balance);`

### 4. Upon succesful transaction the balance updates on the website.
* `event depositEvent(address donator, uint256 amount);`

### 5. Contract/campaign owner can withdraw or refund funds.
* `modifier owner();`
* `function withdrawfunds() public owner;`
* `function refund(address donor) public owner;`
* `event withdrawEvent(uint256 amount) private owner`;


## ADD-ONS

### 1. Refund donors if the campaign minimum requirement is not reached by end of fundraising campaign
* Introduces a timebased dependency on the smart contract, which may introduce security weakness if based on block number or epoc [SWC-116](https://swcregistry.io/docs/SWC-116)
* What is the proper way of running a timebased countdown counter? What's a good Oracle to check time? Or is use of `block.timestamp` OK here?

### 2. ERC-20 airdrop
 * Creating an second contract for generating an ERC-20
 * Cross contract communication to trigger sending ERC-20 tokens to the donors upon succesful call to `deposit()`

### 3. Donation matching up to 5k USD to offer a charity
* Charity and supporting company joins the campaign together for matching rewards
* For each Eth donated to the campaign up to 5k USD, the company commits to sends ETH to the Charity
* Requires uses of Chainlink oracle ETH/USD

### 4. Donors Leaderboard
* One way is to keep a public map of all donors and funds sent. The frontend will need to fetch and order by value.
* `mapping(string => uint256) internal donors;`
* `function getDonors() public view return(mapping(string => uint256) donors);`
* I'd be curious to see how, by using the contract address, the frontend could simply fetch all transactions that sent ETH to the contract.
Likely not the most efficient way though but would avoid contract call.


### 5. Allow several fundraising campaigns
 * `function createCampaign(uint256 viableMinimum, uint256 goal) public owner`
 * Makes the frontend more complicated
 * Requires a map to keep track of funds for each campaigns

### 6. Send NFT perks to every donors'wallet addresses
* requires creation of some sort of random art or collectibles
