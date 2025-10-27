'use client';

import { Award, TrendingUp, Users, Star } from 'lucide-react';

export function UserProfile() {
  return (
    <div className="bg-surface rounded-lg p-6 shadow-card border border-primary/10">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold text-white">
          DU
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-fg mb-1">DeFi User</h3>
          <p className="text-sm text-muted mb-2">@defiuser.base.eth</p>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-semibold">
              Alpha Hunter
            </span>
            <span className="px-3 py-1 bg-success/20 text-success text-xs rounded-full font-semibold">
              Top 100
            </span>
          </div>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-200 text-sm font-semibold">
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-bg rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-xs text-muted">Total ROI</span>
          </div>
          <p className="text-xl font-bold text-fg">+127%</p>
        </div>
        <div className="bg-bg rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-warning" />
            <span className="text-xs text-muted">Reputation</span>
          </div>
          <p className="text-xl font-bold text-fg">8,542</p>
        </div>
        <div className="bg-bg rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-xs text-muted">Followers</span>
          </div>
          <p className="text-xl font-bold text-fg">1,234</p>
        </div>
        <div className="bg-bg rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted">Insights</span>
          </div>
          <p className="text-xl font-bold text-fg">89</p>
        </div>
      </div>
    </div>
  );
}
