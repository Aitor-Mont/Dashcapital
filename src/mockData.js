// Mock Data for DashCapital Dashboard

export const kpiData = [
    {
        id: 'total-balance',
        title: 'Total Balance',
        value: 124592.50,
        change: 4.2,
        sparkline: [40, 45, 42, 50, 48, 55, 60]
    },
    {
        id: 'monthly-profit',
        title: 'Monthly Profit',
        value: 8430.20,
        change: 12.5,
        sparkline: [10, 20, 15, 30, 25, 40, 45]
    },
    {
        id: 'asset-allocation',
        title: 'Top Performer',
        value: 23.4, // Percentage
        isPercentage: true,
        subtitle: 'Bitcoin (BTC)',
        change: 8.1,
        sparkline: [30, 25, 35, 30, 45, 50, 55]
    }
];

export const portfolioPerformanceData = [
    { name: 'Jan', value: 95000 },
    { name: 'Feb', value: 98000 },
    { name: 'Mar', value: 94000 },
    { name: 'Apr', value: 102000 },
    { name: 'May', value: 108000 },
    { name: 'Jun', value: 105000 },
    { name: 'Jul', value: 112000 },
    { name: 'Aug', value: 118000 },
    { name: 'Sep', value: 115000 },
    { name: 'Oct', value: 120000 },
    { name: 'Nov', value: 122000 },
    { name: 'Dec', value: 124592 },
];

export const assetsData = [
    { id: '1', ticker: 'BTC', name: 'Bitcoin', price: 64230.50, change: +2.4, color: '#F7931A', trend: [60, 62, 64, 63, 65, 66] },
    { id: '2', ticker: 'ETH', name: 'Ethereum', price: 3450.20, change: +1.8, color: '#627EEA', trend: [30, 32, 31, 33, 34, 35] },
    { id: '3', ticker: 'AAPL', name: 'Apple Inc.', price: 178.40, change: -0.5, color: '#A2AAAD', trend: [180, 179, 181, 178, 177, 178] },
    { id: '4', ticker: 'MSFT', name: 'Microsoft', price: 410.25, change: +1.2, color: '#00A4EF', trend: [400, 405, 402, 408, 410, 412] },
    { id: '5', ticker: 'TSLA', name: 'Tesla', price: 195.30, change: -3.4, color: '#E31937', trend: [205, 200, 198, 199, 190, 195] },
    { id: '6', ticker: 'NVDA', name: 'Nvidia', price: 890.10, change: +5.6, color: '#76B900', trend: [820, 840, 860, 850, 880, 890] },
];

export const transactionsData = [
    { id: 'tx1', type: 'Buy', asset: 'BTC', amount: '0.15', price: '$63,500', date: 'Mar 2, 2026', status: 'Completed' },
    { id: 'tx2', type: 'Deposit', asset: 'USD', amount: '$5,000.00', price: '-', date: 'Mar 1, 2026', status: 'Completed' },
    { id: 'tx3', type: 'Sell', asset: 'TSLA', amount: '20', price: '$198.50', date: 'Feb 28, 2026', status: 'Completed' },
    { id: 'tx4', type: 'Withdraw', asset: 'USD', amount: '$1,200.00', price: '-', date: 'Feb 25, 2026', status: 'Pending' },
    { id: 'tx5', type: 'Buy', asset: 'ETH', amount: '2.5', price: '$3,400', date: 'Feb 20, 2026', status: 'Completed' },
];
