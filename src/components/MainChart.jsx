import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { portfolioPerformanceData } from '../mockData';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="glass-panel p-3 rounded-lg border border-accent-cyan/20 shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                <p className="text-slate-400 text-xs mb-1 font-medium">{label}</p>
                <p className="text-white font-numbers font-bold text-lg">
                    ${payload[0].value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
            </div>
        );
    }
    return null;
};

const MainChart = () => {
    const [timeRange, setTimeRange] = useState('1Y');
    const ranges = ['1D', '1W', '1M', '1Y'];

    return (
        <div className="glass-panel rounded-2xl p-5 md:p-6 h-full flex flex-col group">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-white">Portfolio Performance</h2>
                    <p className="text-slate-500 text-sm">Value over time</p>
                </div>

                {/* Time Range Selector */}
                <div className="flex items-center bg-navy-darker rounded-lg p-1 border border-slate-800">
                    {ranges.map((range) => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${timeRange === range
                                    ? 'bg-accent-cyan/10 text-accent-cyan shadow-sm border border-accent-cyan/20'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
                                }`}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chart Area */}
            <div className="flex-1 w-full min-h-[300px] -ml-2">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={portfolioPerformanceData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" opacity={0.4} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 12 }}
                            tickFormatter={(value) => `$${value / 1000}k`}
                            dx={-10}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#334155', strokeWidth: 1, strokeDasharray: '4 4' }} />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#0EA5E9"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                            activeDot={{ r: 6, fill: '#0EA5E9', stroke: '#0b121c', strokeWidth: 2 }}
                            animationDuration={2000}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MainChart;
