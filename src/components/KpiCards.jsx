import React from 'react';
import CountUp from 'react-countup';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';
import { kpiData } from '../mockData';

const KpiCard = ({ data, index }) => {
    const isPositive = data.change > 0;

    // Create a minimal dataset for the sparkline
    const sparklineData = data.sparkline.map((val, i) => ({ value: val, index: i }));

    return (
        <div className="glass-panel rounded-2xl p-5 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            {/* Subtle glow effect behind the card */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-accent-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-full z-0 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-white/5 text-slate-400">
                            <Activity size={18} />
                        </div>
                        <h3 className="text-sm font-medium text-slate-400">{data.title}</h3>
                    </div>

                    <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${isPositive ? 'bg-accent-green/10 text-accent-green' : 'bg-accent-red/10 text-accent-red'
                        }`}>
                        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        {Math.abs(data.change)}%
                    </div>
                </div>

                <div className="flex items-end justify-between">
                    <div>
                        <div className="text-3xl font-bold text-white font-numbers tracking-tight flex items-center">
                            {!data.isPercentage && <span className="text-slate-500 mr-1">$</span>}
                            <CountUp
                                end={data.value}
                                decimals={data.isPercentage ? 1 : 2}
                                duration={2}
                                separator=","
                                useEasing={true}
                            />
                            {data.isPercentage && <span className="text-slate-500 ml-1">%</span>}
                        </div>
                        {data.subtitle && (
                            <p className="text-xs text-slate-500 mt-1">{data.subtitle}</p>
                        )}
                    </div>

                    {/* Sparkline overlaying the bottom right */}
                    <div className="w-24 h-12 opacity-60 mix-blend-screen">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={sparklineData}>
                                <YAxis domain={['dataMin - 5', 'dataMax + 5']} hide />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke={isPositive ? '#10B981' : '#EF4444'}
                                    strokeWidth={2}
                                    dot={false}
                                    isAnimationActive={true}
                                    animationDuration={1500}
                                    animationBegin={index * 200} // Stagger animations
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

const KpiCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kpiData.map((kpi, index) => (
                <KpiCard key={kpi.id} data={kpi} index={index} />
            ))}
        </div>
    );
};

export default KpiCards;
