import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KpiCards from './components/KpiCards';
import MainChart from './components/MainChart';
import AssetList from './components/AssetList';
import Transactions from './components/Transactions';

function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Simulate data loading
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex h-screen overflow-hidden bg-navy-darker font-sans text-slate-100 selection:bg-accent-cyan/30">
            {/* Sidebar - Desktop & Mobile */}
            <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col h-full relative z-0 overflow-hidden">
                <Header onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

                {/* Scrollable Main Area */}
                <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 lg:p-8 custom-scrollbar">
                    <div className="max-w-7xl mx-auto space-y-6 pb-20 md:pb-0">

                        {isLoading ? (
                            // Skeleton Loaders
                            <div className="space-y-6 animate-pulse">
                                {/* KPI Skeletons */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-32 bg-navy-panel/40 rounded-2xl border border-slate-800/50"></div>
                                    ))}
                                </div>
                                {/* Mid Section Skeletons */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    <div className="lg:col-span-2 h-[400px] bg-navy-panel/40 rounded-2xl border border-slate-800/50"></div>
                                    <div className="h-[400px] bg-navy-panel/40 rounded-2xl border border-slate-800/50"></div>
                                </div>
                                {/* Bottom Section Skeleton */}
                                <div className="h-64 bg-navy-panel/40 rounded-2xl border border-slate-800/50 mt-6"></div>
                            </div>
                        ) : (
                            // Actual Dashboard Content
                            <>
                                {/* KPI Cards Row (Top) */}
                                <KpiCards />

                                {/* Middle Row: Main Chart & Asset List (Bento Grid) */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    {/* Main Chart spans 2 columns on large screens */}
                                    <div className="lg:col-span-2">
                                        <MainChart />
                                    </div>

                                    {/* Asset List spans 1 column */}
                                    <div className="h-[400px] lg:h-auto">
                                        <AssetList />
                                    </div>
                                </div>

                                {/* Bottom Row: Transactions */}
                                <Transactions />
                            </>
                        )}

                    </div>
                </main>
            </div>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </div>
    );
}

export default App;
