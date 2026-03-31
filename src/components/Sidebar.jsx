import React from 'react';
import { LayoutDashboard, Wallet, LineChart, Settings, LogOut, X } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, active: true },
        { name: 'Portfolio', icon: Wallet },
        { name: 'Markets', icon: LineChart },
        { name: 'Settings', icon: Settings },
    ];

    return (
        <aside
            className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-navy-deep border-r border-slate-border transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        >
            {/* Mobile close button */}
            <button
                className="lg:hidden absolute top-4 right-4 text-slate-400 hover:text-white"
                onClick={() => setIsOpen(false)}
            >
                <X size={20} />
            </button>

            {/* Logo Area */}
            <div className="h-20 flex items-center px-6 border-b border-white/5">
                <div className="flex items-center gap-2">
                    {/* Stylized Logo Marker */}
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                        <span className="font-bold text-white text-xl leading-none">D</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">DashCapital</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto custom-scrollbar">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href="#"
                        className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group ${item.active
                                ? 'bg-accent-cyan/10 text-accent-cyan border-l-2 border-accent-cyan'
                                : 'text-slate-400 hover:bg-white/5 hover:text-slate-200 border-l-2 border-transparent'
                            }`}
                    >
                        <item.icon
                            size={20}
                            className={item.active ? 'text-accent-cyan' : 'text-slate-500 group-hover:text-slate-300 transition-colors'}
                        />
                        <span className="font-medium">{item.name}</span>
                    </a>
                ))}
            </nav>

            {/* User Profile Area */}
            <div className="p-4 border-t border-white/5">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-700">
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="User avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">Alex Jensen</p>
                        <p className="text-xs text-slate-500 truncate font-mono">Pro Member</p>
                    </div>
                    <LogOut size={16} className="text-slate-500 group-hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
