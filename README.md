# 🛒 Blockchain Marketplace

Blockchain Marketplace is a decentralized application (DApp) that enables users to create, view, and purchase products using Ethereum smart contracts. The project integrates a React frontend, Node.js/Express backend, and Solidity smart contracts to provide a complete full-stack blockchain solution.

All product ownership and transaction records are stored on the blockchain, ensuring transparency, security, and decentralization.

## Features

* Connect MetaMask wallet
* Create products with name and price
* View all available products
* Purchase products using ETH
* Ownership transfer after purchase
* Secure blockchain transactions
* Smart contract-based product management
* Express backend integration
* Decentralized and transparent marketplace

## Tech Stack

### Frontend

* React.js
* Bootstrap
* Web3.js

### Backend

* Node.js
* Express.js
* Axios

### Blockchain

* Solidity
* Truffle
* Ganache
* MetaMask

## Project Architecture

```text
User
 ↓
React Frontend
 ↓
Express Backend
 ↓
Ethereum Smart Contract
 ↓
Ganache Blockchain
```
## Project Structure

```text
blockchain-marketplace/
│
├── backend/
│   ├── server.js
│   └── package.json
│
├── migrations/
│
├── src/
│   ├── abis/
│   ├── components/
│   ├── contracts/
│   └── App.js
│
├── truffle-config.js
├── package.json
└── README.md
```
## Installation

### Clone Repository

```bash
git clone https://github.com/mummanavasanthi/blockchain-marketplace.git
cd blockchain-marketplace
```

### Install Dependencies

```bash
npm install
```

### Install Backend Dependencies

```bash
cd backend
npm install
cd ..
```

## Running the Project

### Start Ganache

Launch Ganache and create a local Ethereum blockchain network.

### Deploy Smart Contracts

```bash
truffle migrate --reset
```

### Start Backend

```bash
cd backend
node server.js
```

Backend runs on:

```text
http://localhost:5000
```

### Start Frontend

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

## Workflow

1. User connects MetaMask wallet.
2. User creates a product through the React frontend.
3. Product information is stored on the Ethereum blockchain.
4. Buyers can browse listed products.
5. Buyers purchase products using ETH.
6. Smart contract validates the transaction.
7. Ownership is transferred to the buyer.
8. Backend APIs support application integration.

## Output

<img width="1052" height="743" alt="Screenshot 2026-06-02 153748" src="https://github.com/user-attachments/assets/4e9870bf-f45f-4cbb-a070-26c8dabdfc2c" />


Blockchain Marketplace developed as part of a Full-Stack Blockchain Integration project.
