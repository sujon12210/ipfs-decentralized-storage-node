# IPFS Decentralized Storage Node

A robust utility for managing off-chain data in a decentralized ecosystem. This repository provides a clean interface for interacting with IPFS, ensuring your application's data remains immutable and persistent across the distributed web.

## Features
* **Decentralized Uploads:** Standardized methods to push files and directories to the IPFS network.
* **CID Management:** Helpers for handling Content Identifiers and generating gateway URLs.
* **Local Pinning:** Logic to ensure data remains available by pinning it to a specific node or service.

## Use Cases
* **NFT Metadata:** Storing JSON and image files for smart contracts.
* **dApp Frontends:** Hosting static websites on a peer-to-peer network.
* **Private Data:** Managing encrypted chunks for decentralized cloud storage.

## Quick Start
1. Configure your API endpoint in `config.js`.
2. Install dependencies: `npm install`.
3. Run the storage script: `node storage.js`.

## License
MIT
