import { expect } from "chai";
import { ethers } from "hardhat";

describe("Test", function () {
  describe("Test", function () {
    it("Basic operations", async function () {
      const ContractFactory = await ethers.getContractFactory("Test");
      const contract = await ContractFactory.deploy();

      await contract.doStuff(42);
      expect((await contract.getNumber()).toNumber()).eq(42);

      await expect(contract.doStuff(0)).revertedWithCustomError(contract, "CustomError");
    });
  });
});
