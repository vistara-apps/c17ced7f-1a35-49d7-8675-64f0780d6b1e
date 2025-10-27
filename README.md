# DeFiPulse Base

A comprehensive DeFi aggregator and social platform built as a Base Mini App, enabling users to discover, track, and share DeFi opportunities across multiple chains with a focus on Solana integration.

## Features

- **Cross-Chain Yield Aggregation**: Compare DeFi opportunities across Solana, Base, and other chains
- **Social DeFi Research**: Share insights and validate opportunities with your Farcaster network
- **Reputation System**: Build verifiable on-chain reputation through DeFi activities
- **Alpha Communities**: Join exclusive communities and follow top performers
- **Gasless Transactions**: Powered by Coinbase Paymaster for seamless UX

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2), Solana integration
- **Wallet**: OnchainKit with Coinbase Wallet
- **Social**: Farcaster Frame SDK
- **Styling**: Tailwind CSS with Coinbase theme
- **State**: React Query for data fetching

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
# Add your OnchainKit API key and other configuration
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Base Mini App Integration

This app is built following Base Mini App best practices:

- Uses OnchainKit for wallet and transaction components
- Integrates Farcaster Frame SDK for social features
- Implements proper manifest configuration
- Supports gasless transactions via Paymaster
- Mobile-first responsive design

## Project Structure

```
app/
├── components/       # React components
├── types/           # TypeScript type definitions
├── page.tsx         # Main page
└── layout.tsx       # Root layout with providers

public/
└── .well-known/
    └── farcaster.json  # Frame manifest
```

## Key Components

- **AppShell**: Main layout with navigation
- **OpportunityCard**: Display DeFi opportunities
- **UserProfile**: User stats and reputation
- **Providers**: OnchainKit and React Query setup

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## Learn More

- [Base Documentation](https://docs.base.org)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Farcaster Frame SDK](https://miniapps.farcaster.xyz)

## License

MIT
