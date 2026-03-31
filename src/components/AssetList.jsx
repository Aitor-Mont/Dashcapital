import React from 'react';
import { assetsData } from '../mockData';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';

const AssetList = () => {
    return (
        <div className="glass-panel rounded-2xl flex flex-col h-full overflow-hidden">
            <div className="p-5 border-b border-slate-border flex justify-between items-center bg-navy-panel/50">
                <h2 className="text-lg font-semibold text-white">Your Assets</h2>
                <button className="text-accent-cyan text-sm font-medium hover:text-blue-400 transition-colors">See All</button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                <div className="flex flex-col gap-1">
                    {assetsData.map((asset) => {
                        const isPositive = asset.change > 0;
                        const trendData = asset.trend.map((val, i) => ({ value: val, index: i }));

                        return (
                            <div
                                key={asset.id}
                                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/50 transition-colors group cursor-pointer"
                            >
                                {/* Asset Info */}
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-inner"
                                        style={{ backgroundColor: asset.color }}
                                    >
                                        {asset.ticker.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium group-hover:text-accent-cyan transition-colors">{asset.ticker}</h4>
                                        <p className="text-slate-500 text-xs">{asset.name}</p>
                                    </div>
                                </div>

                                {/* Mini Chart */}
                                <div className="w-16 h-8 opacity-70 group-hover:opacity-100 transition-opacity">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={trendData}>
                                            <YAxis domain={['dataMin', 'dataMax']} hide />
                                            <Line
                                                type="monotone"
                                                dataKey="value"
                                                stroke={isPositive ? '#10B981' : '#EF4444'}
                                                strokeWidth={2}
                                                dot={false}
                                                isAnimationActive={false}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>

                                {/* Price Info */}
                                <div className="text-right">
                                    <p className="text-white font-numbers font-medium whitespace-nowrap">
                                        ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </p>
                                    <p className={`text-xs font-medium font-numbers ${isPositive ? 'text-accent-green' : 'text-accent-red'}`}>
                                        {isPositive ? '+' : ''}{asset.change}%
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AssetList;
