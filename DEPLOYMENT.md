# Vercel Deployment Guide for Cipher Loan Connect

## Prerequisites

1. GitHub account with access to the repository
2. Vercel account (free tier available)
3. Environment variables ready

## Step-by-Step Deployment

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import the `RusticaDev/cipher-loan-connect` repository
5. Select the repository and click "Import"

### Step 2: Configure Build Settings

1. **Framework Preset**: Select "Vite"
2. **Root Directory**: Leave as default (./)
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. **Install Command**: `npm install`

### Step 3: Set Environment Variables

In the Vercel dashboard, go to Settings > Environment Variables and add:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id
NEXT_PUBLIC_INFURA_API_KEY=your_infura_api_key
NEXT_PUBLIC_CONTRACT_ADDRESS=your_deployed_contract_address
```

### Step 4: Deploy

1. Click "Deploy" button
2. Wait for the build to complete (usually 2-3 minutes)
3. Your app will be available at the provided Vercel URL

### Step 5: Custom Domain (Optional)

1. Go to Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for SSL certificate to be issued

## Post-Deployment Configuration

### Smart Contract Deployment

1. Deploy the `CipherLoanConnect.sol` contract to Sepolia testnet
2. Update the `NEXT_PUBLIC_CONTRACT_ADDRESS` environment variable
3. Redeploy the application

### Environment Variables Reference

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `NEXT_PUBLIC_CHAIN_ID` | Ethereum chain ID | `11155111` (Sepolia) |
| `NEXT_PUBLIC_RPC_URL` | RPC endpoint URL | `https://sepolia.infura.io/v3/YOUR_KEY` |
| `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` | WalletConnect project ID | `your_project_id` |
| `NEXT_PUBLIC_INFURA_API_KEY` | Infura API key | `your_infura_key` |
| `NEXT_PUBLIC_CONTRACT_ADDRESS` | Deployed contract address | `0x...` |

## Troubleshooting

### Common Issues

1. **Build Fails**: Check that all dependencies are in package.json
2. **Environment Variables Not Working**: Ensure variables start with `NEXT_PUBLIC_`
3. **Wallet Connection Issues**: Verify WalletConnect project ID is correct
4. **Contract Interaction Fails**: Check contract address and RPC URL

### Build Optimization

The project is configured for optimal Vercel deployment:

- Vite for fast builds
- Tree shaking enabled
- Code splitting for better performance
- Static asset optimization

### Performance Monitoring

1. Enable Vercel Analytics in dashboard
2. Monitor Core Web Vitals
3. Check build logs for any issues
4. Use Vercel Speed Insights

## Security Considerations

1. Never commit `.env` files to repository
2. Use Vercel's environment variable encryption
3. Regularly rotate API keys
4. Monitor for security vulnerabilities

## Scaling

For production scaling:

1. Upgrade to Vercel Pro for better performance
2. Enable Edge Functions for global distribution
3. Configure CDN settings
4. Set up monitoring and alerts

## Support

For deployment issues:

1. Check Vercel documentation
2. Review build logs in dashboard
3. Contact Vercel support
4. Check GitHub repository for updates
