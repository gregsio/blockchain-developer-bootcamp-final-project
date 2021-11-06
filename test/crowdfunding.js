const Crowdfunding = artifacts.require("Crowdfunding");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Crowdfunding", function (accounts) {

  const [_owner, alice, bob] = accounts;
  let instance;

  beforeEach(async () => {
    instance = await Crowdfunding.new();
  });

  it("should assert true", async function () {
    await Crowdfunding.deployed();
    return assert.isTrue(true);
  });
});
