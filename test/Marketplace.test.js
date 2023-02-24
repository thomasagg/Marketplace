const Marketplace = artifacts.require("Marketplace");

contract("Marketplace", () => {
  it("Should create a new user account", async () => {
    const instance = await Marketplace.deployed();
    await instance.createUser("0x123456789");
    const user = await instance.users("0x123456789");
    assert.equal(user.userAddress, "0x123456789", "The user address does not match");
    assert.equal(user.balance, 0, "The user balance is not 0");
  });

  it("Should add a new listing to the marketplace", async () => {
    const instance = await Marketplace.deployed();
    await instance.addListing("Product 1", 10, 5);
    const listing = await instance.listings(1);
    assert.equal(listing.id, 1, "The listing id does not match");
    assert.equal(listing.seller, "0x123456789", "The seller address does not match");
    assert.equal(listing.productName, "Product 1", "The product name does not match");
    assert.equal(listing.price, 10, "The product price does not match");
    assert.equal(listing.quantity, 5, "The product quantity does not match");
  });

  it("Should buy a product from a listing", async () => {
    const instance = await Marketplace.deployed();
    const buyer = "0x987654321";
    await instance.createUser(buyer);
    await instance.buyProduct(1, { value: 10, from: buyer });
    const user = await instance.users(buyer);
    assert.equal(user.balance, 10, "The buyer's balance is incorrect");
    const listing = await instance.listings(1);
    assert.equal(listing.quantity, 4, "The product quantity is incorrect");
  });
});

// Your code here

// module.exports = {
//   createUser: createUser,
//   addListing: addListing,
//   buyProduct: buyProduct
// };

"module.exports = { createUser: createUser }"
