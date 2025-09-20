import { createPublicClient, createWalletClient, http, parseEther, formatEther } from 'viem';
import { sepolia } from 'viem/chains';

// Contract ABI for CipherLoanConnect
export const CIPHER_LOAN_CONNECT_ABI = [
  {
    "inputs": [
      {"internalType": "address", "name": "_verifier", "type": "address"},
      {"internalType": "uint256", "name": "_platformFee", "type": "uint256"}
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "loanId", "type": "uint256"},
      {"indexed": true, "internalType": "address", "name": "borrower", "type": "address"},
      {"indexed": false, "internalType": "uint32", "name": "amount", "type": "uint32"}
    ],
    "name": "LoanRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "loanId", "type": "uint256"},
      {"indexed": true, "internalType": "address", "name": "lender", "type": "address"}
    ],
    "name": "LoanApproved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "loanId", "type": "uint256"},
      {"indexed": false, "internalType": "uint32", "name": "amount", "type": "uint32"}
    ],
    "name": "LoanFunded",
    "type": "event"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "amount", "type": "uint256"},
      {"internalType": "uint256", "name": "interestRate", "type": "uint256"},
      {"internalType": "uint256", "name": "duration", "type": "uint256"},
      {"internalType": "string", "name": "purpose", "type": "string"},
      {"internalType": "string", "name": "description", "type": "string"}
    ],
    "name": "requestLoan",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "loanId", "type": "uint256"}],
    "name": "approveLoan",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "loanId", "type": "uint256"}],
    "name": "fundLoan",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "loanId", "type": "uint256"},
      {"internalType": "uint256", "name": "amount", "type": "uint256"}
    ],
    "name": "makePayment",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "loanId", "type": "uint256"}],
    "name": "completeLoan",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "loanId", "type": "uint256"}],
    "name": "getLoanInfo",
    "outputs": [
      {"internalType": "uint32", "name": "amount", "type": "uint32"},
      {"internalType": "uint32", "name": "interestRate", "type": "uint32"},
      {"internalType": "uint32", "name": "duration", "type": "uint32"},
      {"internalType": "bool", "name": "isActive", "type": "bool"},
      {"internalType": "bool", "name": "isApproved", "type": "bool"},
      {"internalType": "bool", "name": "isFunded", "type": "bool"},
      {"internalType": "string", "name": "purpose", "type": "string"},
      {"internalType": "string", "name": "description", "type": "string"},
      {"internalType": "address", "name": "borrower", "type": "address"},
      {"internalType": "address", "name": "lender", "type": "address"},
      {"internalType": "uint256", "name": "requestTime", "type": "uint256"},
      {"internalType": "uint256", "name": "approvalTime", "type": "uint256"},
      {"internalType": "uint256", "name": "fundingTime", "type": "uint256"},
      {"internalType": "uint256", "name": "dueDate", "type": "uint256"}
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

// Contract address (will be deployed)
export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x0000000000000000000000000000000000000000';

// Create public client for reading from blockchain
export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(process.env.NEXT_PUBLIC_RPC_URL || 'https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990'),
});

// Helper functions for contract interactions
export const contractHelpers = {
  // Convert ETH to Wei
  parseEther: (value: string) => parseEther(value),
  
  // Convert Wei to ETH
  formatEther: (value: bigint) => formatEther(value),
  
  // Get loan information
  getLoanInfo: async (loanId: number) => {
    try {
      const result = await publicClient.readContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: CIPHER_LOAN_CONNECT_ABI,
        functionName: 'getLoanInfo',
        args: [BigInt(loanId)],
      });
      
      return {
        amount: Number(result[0]),
        interestRate: Number(result[1]),
        duration: Number(result[2]),
        isActive: result[3],
        isApproved: result[4],
        isFunded: result[5],
        purpose: result[6],
        description: result[7],
        borrower: result[8],
        lender: result[9],
        requestTime: Number(result[10]),
        approvalTime: Number(result[11]),
        fundingTime: Number(result[12]),
        dueDate: Number(result[13]),
      };
    } catch (error) {
      console.error('Error fetching loan info:', error);
      return null;
    }
  },
};
