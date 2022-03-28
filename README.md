## ERC-721 NON-FUNGIBLE TOKEN STANDARD

### INTRODUCTION

##### What is a Non-Fungible Token?

A Non-Fungible Token (NFT) is used to identify something or someone in a unique way. This type of Token is perfect to be used on platforms that offer collectible items, access keys, lottery tickets, numbered seats for concerts and sports matches, etc. This special type of Token has amazing possibilities so it deserves a proper Standard, the ERC-721 came to solve that!

##### What is ERC-721?

The ERC-721 introduces a standard for NFT, in other words, this type of Token is unique and can have different value than another Token from the same Smart Contract, maybe due to its age, rarity or even something else like its visual. Wait, visual?

Yes! All NFTs have a uint256 variable called tokenId, so for any ERC-721 Contract, the pair contract address, uint256 tokenId must be globally unique. That said, a dApp can have a "converter" that uses the tokenId as input and outputs an image of something cool, like zombies, weapons, skills or amazing kitties!

### ABOUT 

This project consist basic ERC721 smart contract with name New NFT. In this project a user can mint an NFT and also can transfer to any other account. 

##### Contract Details

NewNFT.sol : This contract is to mint and set token URI using openzeppelin.

##### Scripts Details

deploy.js: contain code to deploy in ropsten test network.

mint.nft.js: contain ether.js code to mint uploaded IPFS data using NewNFT.sol contract address which is deployed in ropsten test network.
