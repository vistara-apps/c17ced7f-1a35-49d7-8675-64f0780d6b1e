export interface DeFiOpportunity {
  id: string;
  type: 'swap' | 'yield' | 'staking';
  chain: string;
  protocol: string;
  apy: number;
  tokenPair: string;
  liquidity: number;
  riskScore: number;
  link: string;
  icon: string;
}

export interface User {
  fid: number;
  username: string;
  displayName: string;
  pfpUrl: string;
  walletAddress: string;
  reputationScore: number;
  achievements: string[];
}

export interface UserOpportunity {
  userId: string;
  opportunityId: string;
  status: 'shared' | 'interacted_with' | 'liked';
  userInvestmentAmount?: number;
  userYield?: number;
}

export interface Comment {
  commentId: string;
  userId: string;
  opportunityId?: string;
  parentId?: string;
  text: string;
  timestamp: number;
}

export interface LeaderboardEntry {
  userId: string;
  performanceMetric: number;
  rank: number;
  timeframe: string;
}

export interface Community {
  communityId: string;
  name: string;
  description: string;
  adminUserId: string;
  access: 'public' | 'invite_only' | 'token_gated';
}
