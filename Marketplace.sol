pragma solidity >=0.8.0 <0.9.0;
// SPDX-License-Identifier: MIT
contract Marketplace {
// Define the data structures for storing user accounts and listings
struct User {
address userAddress;
uint256 balance;
}
struct Listing {
    uint256 id;
    address seller;
    string productName;
    uint256 price;
    uint256 quantity;
}

// Store the user accounts and listings
mapping (address => User) public users;
mapping (uint256 => Listing) public listings;
uint256 public listingCounter;

// Create a new user account
function createUser(address userAddress) public {
    users[userAddress].userAddress = userAddress;
    users[userAddress].balance = 0;
}

// Add a new listing to the marketplace
function addListing(string memory productName, uint256 price, uint256 quantity) public {
    uint256 id = listingCounter;
    listingCounter++;
    listings[id].id = id;
    listings[id].seller = msg.sender;
    listings[id].productName = productName;
    listings[id].price = price;
    listings[id].quantity = quantity;
}

// Buy a product from a listing
function buyProduct(uint256 listingId) public payable {
    // Check if the listing exists
    if (listings[listingId].seller == address(0)) {
        revert("Listing not found");
    }

    // Check if the buyer has sufficient funds
    if (msg.value < listings[listingId].price) {
        revert("Insufficient funds");
    }

    // Check if the product is still available
    if (listings[listingId].quantity == 0) {
        revert("Product not available");
    }

    // Deduct the funds from the buyer's account
    users[msg.sender].balance -= msg.value;

    // Transfer the funds to the seller's account
    users[listings[listingId].seller].balance += msg.value;

    // Update the product quantity
    listings[listingId].quantity--;

    // Emit a "ProductBought" event
    emit ProductBought(listingId, msg.sender);
}

// Event for tracking when a product is bought
event ProductBought(uint256 listingId, address buyer);
}
