'use client';

import { ExternalLink, TrendingUp, Shield, Droplets } from 'lucide-react';
import type { DeFiOpportunity } from '../types';

interface OpportunityCardProps {
  opportunity: DeFiOpportunity;
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const getRiskColor = (score: number) => {
    if (score < 5) return 'text-success';
    if (score < 7) return 'text-warning';
    return 'text-error';
  };

  const getChainColor = (chain: string) => {
    if (chain === 'Solana') return 'bg-purple-500/20 text-purple-300';
    if (chain === 'Base') return 'bg-primary/20 text-primary';
    return 'bg-accent/20 text-accent';
  };

  return (
    <div className="bg-surface rounded-lg p-6 shadow-card hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-2xl">
            {opportunity.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-fg">{opportunity.protocol}</h3>
            <span className={`text-xs px-2 py-1 rounded ${getChainColor(opportunity.chain)}`}>
              {opportunity.chain}
            </span>
          </div>
        </div>
        <a
          href={opportunity.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-primary transition-colors duration-200"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted">Token Pair</span>
          <span className="text-sm font-semibold text-fg">{opportunity.tokenPair}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm text-muted">APY</span>
          </div>
          <span className="text-lg font-bold text-success">{opportunity.apy}%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted">Liquidity</span>
          </div>
          <span className="text-sm font-semibold text-fg">
            ${(opportunity.liquidity / 1000000).toFixed(1)}M
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-muted" />
            <span className="text-sm text-muted">Risk Score</span>
          </div>
          <span className={`text-sm font-semibold ${getRiskColor(opportunity.riskScore)}`}>
            {opportunity.riskScore}/10
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-200 font-semibold">
          View Details
        </button>
        <button className="px-4 py-2 bg-surface border border-primary/30 text-fg rounded-lg hover:bg-primary/10 transition-colors duration-200">
          Share
        </button>
      </div>
    </div>
  );
}
