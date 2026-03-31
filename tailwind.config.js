/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    cyan: '#0EA5E9',
                    green: '#10B981',
                    red: '#EF4444'
                },
                navy: {
                    deep: '#0F1E2C',
                    panel: '#152535',
                    darker: '#0a1520'
                },
                slate: {
                    border: '#1e293b',    // custom darker slate
                    subtext: '#64748b'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            }
        },
    },
    plugins: [],
}
