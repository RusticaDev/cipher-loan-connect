# Cipher Loan Connect

A privacy-first decentralized lending platform built with Fully Homomorphic Encryption (FHE) technology. This platform enables secure, confidential lending and borrowing without compromising user privacy.

## Features

- **Privacy-First Architecture**: Built with FHE to ensure all sensitive financial data remains encrypted
- **Decentralized Lending**: Peer-to-peer lending without intermediaries
- **Smart Contract Integration**: Secure, transparent loan management on blockchain
- **Multi-Wallet Support**: Connect with various Web3 wallets including Rainbow, MetaMask, and more
- **Credit Scoring**: Encrypted credit assessment and reputation system
- **Collateral Management**: Secure collateral verification and management

## Technology Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Web3**: Wagmi, RainbowKit, Viem, Ethers.js
- **Blockchain**: Ethereum (Sepolia Testnet)
- **Encryption**: Zama FHE Library
- **UI Components**: shadcn/ui, Radix UI

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Web3 wallet (MetaMask, Rainbow, etc.)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RusticaDev/cipher-loan-connect.git
cd cipher-loan-connect
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Start the development server:
```bash
npm run dev
```

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Chain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

# Wallet Connect Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id

# Contract Configuration
NEXT_PUBLIC_CONTRACT_ADDRESS=your_deployed_contract_address
```

## Smart Contract

The platform uses a custom smart contract `CipherLoanConnect.sol` that implements:

- Encrypted loan requests and approvals
- Privacy-preserving payment tracking
- Credit score management
- Collateral verification
- Reputation system

### Contract Functions

- `requestLoan()`: Create a new loan request
- `approveLoan()`: Approve a loan request
- `fundLoan()`: Fund an approved loan
- `makePayment()`: Make loan payments
- `completeLoan()`: Mark loan as completed

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

## Security Features

- **FHE Encryption**: All sensitive data encrypted using Zama's FHE library
- **Zero-Knowledge Proofs**: Verify transactions without revealing details
- **Smart Contract Security**: Audited contracts with proper access controls
- **Privacy by Design**: No personal data stored in plaintext

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue on GitHub or contact the development team.

## Roadmap

- [ ] Mobile app development
- [ ] Additional blockchain support
- [ ] Advanced FHE features
- [ ] Integration with DeFi protocols
- [ ] Cross-chain lending capabilities
