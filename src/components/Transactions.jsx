import React from 'react';
import { transactionsData } from '../mockData';
import { ArrowUpRight, ArrowDownRight, ArrowRightLeft } from 'lucide-react';

const getTransactionIcon = (type) => {
    switch (type) {
        case 'Buy':
        case 'Deposit':
            return <div className="p-2 bg-accent-green/10 text-accent-green rounded-lg"><ArrowDownRight size={16} /></div>;
        case 'Sell':
        case 'Withdraw':
            return <div className="p-2 bg-accent-red/10 text-accent-red rounded-lg"><ArrowUpRight size={16} /></div>;
        default:
            return <div className="p-2 bg-slate-700 text-slate-300 rounded-lg"><ArrowRightLeft size={16} /></div>;
    }
};

const Transactions = () => {
    return (
        <div className="glass-panel rounded-2xl overflow-hidden mt-6">
            <div className="p-5 border-b border-slate-border flex justify-between items-center bg-navy-panel/50">
                <h2 className="text-lg font-semibold text-white">Recent Transactions</h2>
                <button className="btn-ghost text-sm py-1.5 px-3">View All History</button>
            </div>

            <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-border/50 text-xs font-semibold text-slate-400 uppercase tracking-wider bg-navy-darker/30">
                            <th className="px-6 py-4 font-medium">Transaction</th>
                            <th className="px-6 py-4 font-medium">Date</th>
                            <th className="px-6 py-4 font-medium text-right">Amount</th>
                            <th className="px-6 py-4 font-medium text-right">Price</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50">
                        {transactionsData.map((tx) => (
                            <tr key={tx.id} className="hover:bg-slate-800/30 transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        {getTransactionIcon(tx.type)}
                                        <div>
                                            <p className="text-white font-medium group-hover:text-accent-cyan transition-colors">
                                                {tx.type} {tx.asset}
                                            </p>
                                            <p className="text-slate-500 text-xs">{tx.asset}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-slate-400 text-sm">
                                    {tx.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-white font-numbers font-medium">
                                    {tx.type === 'Withdraw' || tx.type === 'Sell' ? '-' : '+'}{tx.amount}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-slate-300 font-numbers text-sm">
                                    {tx.price}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${tx.status === 'Completed'
                                            ? 'bg-accent-green/10 text-accent-green border-accent-green/20'
                                            : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                                        }`}>
                                        {tx.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transactions;
