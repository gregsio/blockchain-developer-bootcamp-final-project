const Crowdfunding = artifacts.require("Crowdfunding");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Crowdfunding", function (accounts) {

  const [_owner, alice, bob] = accounts;
  let instance;
  let tryCatch = require("./exceptions.js").tryCatch;
  let errTypes = require("./exceptions.js").errTypes;

  beforeEach(async () => {
    instance = await Crowdfunding.new();
  });
  describe("Deployment", () => {
    it("should assert true", async function () {
      await Crowdfunding.deployed();
      return assert.isTrue(true);
    });
  });

  describe("State Variables", () => {
    it("should have a campaignBalance", async () => {
      assert.equal(typeof instance.campaignBalance, 'function', "the contract has no campaignBalance");
    });
    it("should have requiredMin", async () => {
      assert.equal(typeof instance.requiredMinFunds, 'function', "the contract has no requiredMinFunds");
    });
    it("should have a targetGoal", async () => {
      assert.equal(typeof instance.targetGoal, 'function', "the contract has no targetGoal");
    });
  });

  describe("Use cases", () => {
    let campaignBalance = web3.utils.toWei('0');
    let requiredMinFunds = web3.utils.toWei('3');
    let targetGoal = web3.utils.toWei('12');

    it("should retrieve the current campaignBalance, requiredMin and targetGoal", async () => {
      var result = await instance.campaignBalance();//.then(console.log);
      assert.equal(
        result,
        campaignBalance,
        "the campaignBalance does not match the expected value",
      );
      result = await instance.requiredMinFunds();
      assert.equal(
        result,
        requiredMinFunds,
        "the requiredMinFunds does not match the expected value",
      );
      result = await instance.targetGoal();
      assert.equal(
        result,
        targetGoal,
        'the targetGoal does not match the expected value',
      );
    });

    it("should deposit ETH to the campaign", async () => {
      var deposit = await instance.deposit({ from: alice, value: 1});
      const result = await instance.campaignBalance();
      assert.equal(
        web3.utils.toWei(result),
        web3.utils.toWei('1'),
        "the campaignBalance does not match the expected value",
      )
    });
    it("should emit a deposit event", async () => {
      const result = await instance.deposit({ from: alice, value: 1});
      assert.equal(
        result.logs[0].event == 'depositEvent',
        true,
        "deposit event has not been emitted",
      )
    });

    it("should allow the contract owner to withdraw funds", async () => {
      await instance.deposit({from: alice, value: 1});
      await instance.withdrawFunds({ from: _owner });
      const campaignBalance = await instance.campaignBalance();
      assert.equal(campaignBalance, 0, "withdrawing funds was not sucessful")
    });

    it("should emit a withdraw event", async () => {
      await instance.deposit({from: alice, value: 1});
      result = await instance.withdrawFunds({ from: _owner });
      assert.equal(
        result.logs[0].event == 'withdrawEvent',
        true,
        "withdraw event has not been emitted",
      )
    });
    it("should only allow the contract owner to withdraw funds", async () => {
      await instance.deposit({from: alice, value: 1});
      await tryCatch(instance.withdrawFunds({from: bob}), errTypes.revert);
    });
  });
});
