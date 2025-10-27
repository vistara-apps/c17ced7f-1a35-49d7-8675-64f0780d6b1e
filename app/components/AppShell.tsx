'use client';

import { type ReactNode } from 'react';
import { Menu, Bell, Search, Home, TrendingUp, Users, User } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DP</span>
              </div>
              <h1 className="text-xl font-bold text-fg">DeFiPulse</h1>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button className="text-fg hover:text-primary transition-colors duration-200">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-fg hover:text-primary transition-colors duration-200 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full" />
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-200">
                Connect Wallet
              </button>
            </div>

            <button className="md:hidden text-fg">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-primary/20 z-50">
        <div className="flex items-center justify-around py-3">
          <button className="flex flex-col items-center gap-1 text-primary">
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-muted hover:text-primary transition-colors duration-200">
            <TrendingUp className="w-5 h-5" />
            <span className="text-xs">Markets</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-muted hover:text-primary transition-colors duration-200">
            <Users className="w-5 h-5" />
            <span className="text-xs">Social</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-muted hover:text-primary transition-colors duration-200">
            <User className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
