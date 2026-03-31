import React from 'react';
import { Search, Bell, Calendar, Menu } from 'lucide-react';

const Header = ({ onMenuToggle }) => {
    return (
        <header className="h-20 flex items-center justify-between px-4 md:px-6 lg:px-8 bg-navy-deep/80 backdrop-blur-md border-b border-slate-border sticky top-0 z-20">

            <div className="flex items-center gap-4 flex-1">
                {/* Mobile Menu Toggle */}
                <button
                    onClick={onMenuToggle}
                    className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                    <Menu size={24} />
                </button>

                {/* Global Search */}
                <div className="relative max-w-md w-full hidden sm:block group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search size={16} className="text-slate-500 group-focus-within:text-accent-cyan transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-full leading-5 bg-navy-panel/50 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-navy-panel focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all sm:text-sm shadow-inner"
                        placeholder="Search assets, symbols, or transactions..."
                    />
                </div>
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-3 sm:gap-6">
                {/* Date Selector */}
                <div className="hidden md:flex items-center gap-2 text-sm text-slate-400 bg-white/5 py-1.5 px-3 rounded-full border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer">
                    <Calendar size={14} className="text-accent-cyan" />
                    <span className="font-medium">Today, Mar 2</span>
                </div>

                {/* Notifications */}
                <div className="relative">
                    <button className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors relative">
                        <Bell size={20} />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent-red border border-navy-deep animate-pulse"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
