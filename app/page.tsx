'use client';

import { useEffect, useState } from 'react';
import { AppShell } from './components/AppShell';
import { OpportunityCard } from './components/OpportunityCard';
import { UserProfile } from './components/UserProfile';
import { TrendingUp, Zap, Shield, Users } from 'lucide-react';
import type { DeFiOpportunity } from './types';

export default function Home() {
  const [opportunities, setOpportunities] = useState<DeFiOpportunity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching opportunities
    const mockOpportunities: DeFiOpportunity[] = [
      {
        id: '1',
        type: 'yield',
        chain: 'Solana',
        protocol: 'Marinade Finance',
        apy: 18.5,
        tokenPair: 'SOL-USDC',
        liquidity: 17455103675,
        riskScore: 7.5,
        link: 'https://marinade.finance',
        icon: '🌊',
      },
      {
        id: '2',
        type: 'staking',
        chain: 'Base',
        protocol: 'Aerodrome',
        apy: 15.2,
        tokenPair: 'ETH-USDC',
        liquidity: 45000000,
        riskScore: 6.0,
        link: 'https://aerodrome.finance',
        icon: '✈️',
      },
      {
        id: '3',
        type: 'yield',
        chain: 'Solana',
        protocol: 'Kamino Finance',
        apy: 22.8,
        tokenPair: 'USDC',
        liquidity: 125000000,
        riskScore: 8.0,
        link: 'https://kamino.finance',
        icon: '🎯',
      },
      {
        id: '4',
        type: 'swap',
        chain: 'Base',
        protocol: 'Uniswap V3',
        apy: 12.4,
        tokenPair: 'WETH-USDC',
        liquidity: 89000000,
        riskScore: 5.5,
        link: 'https://app.uniswap.org',
        icon: '🦄',
      },
    ];

    setTimeout(() => {
      setOpportunities(mockOpportunities);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <AppShell>
      <div className="min-h-screen bg-bg">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
          <div className="relative max-w-7xl mx-auto px-6 py-12 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-fg mb-4 animate-fade-in">
                DeFiPulse Base
              </h1>
              <p className="text-xl text-muted max-w-2xl mx-auto animate-fade-in">
                Discover, aggregate, and socialize DeFi opportunities across chains
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <div className="bg-surface rounded-lg p-6 shadow-card animate-fade-in">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted">Total TVL</span>
                </div>
                <p className="text-2xl font-bold text-fg">$276M</p>
              </div>
              <div className="bg-surface rounded-lg p-6 shadow-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-warning" />
                  <span className="text-sm text-muted">Avg APY</span>
                </div>
                <p className="text-2xl font-bold text-fg">17.2%</p>
              </div>
              <div className="bg-surface rounded-lg p-6 shadow-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-success" />
                  <span className="text-sm text-muted">Protocols</span>
                </div>
                <p className="text-2xl font-bold text-fg">24</p>
              </div>
              <div className="bg-surface rounded-lg p-6 shadow-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted">Active Users</span>
                </div>
                <p className="text-2xl font-bold text-fg">12.4K</p>
              </div>
            </div>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="max-w-7xl mx-auto px-6 mb-12 lg:px-8">
          <UserProfile />
        </div>

        {/* Opportunities Section */}
        <div className="max-w-7xl mx-auto px-6 pb-12 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-fg">Top Opportunities</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-200">
                All Chains
              </button>
              <button className="px-4 py-2 bg-surface text-fg rounded-lg hover:bg-primary/20 transition-colors duration-200">
                Solana
              </button>
              <button className="px-4 py-2 bg-surface text-fg rounded-lg hover:bg-primary/20 transition-colors duration-200">
                Base
              </button>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-surface rounded-lg p-6 animate-pulse">
                  <div className="h-6 bg-bg rounded w-3/4 mb-4" />
                  <div className="h-4 bg-bg rounded w-1/2 mb-2" />
                  <div className="h-4 bg-bg rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {opportunities.map((opportunity, index) => (
                <div
                  key={opportunity.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <OpportunityCard opportunity={opportunity} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-6 pb-12 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-center shadow-card">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to maximize your DeFi returns?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Connect your wallet to start tracking opportunities, building your reputation, and joining exclusive alpha communities.
            </p>
            <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-button">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
