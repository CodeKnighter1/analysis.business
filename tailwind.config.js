/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fade-in 0.6s ease-out forwards',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
                'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
                'scale-in': 'scale-in 0.6s ease-out forwards',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shine': 'shine 1.5s ease-out infinite',
            },
            keyframes: {
                'fade-in': {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' }
                },
                'fade-in-up': {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-in-down': {
                    'from': { opacity: '0', transform: 'translateY(-20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' }
                },
                'slide-in-right': {
                    'from': { opacity: '0', transform: 'translateX(-30px)' },
                    'to': { opacity: '1', transform: 'translateX(0)' }
                },
                'scale-in': {
                    'from': { opacity: '0', transform: 'scale(0.95)' },
                    'to': { opacity: '1', transform: 'scale(1)' }
                },
                'shine': {
                    '0%': { left: '-100px' },
                    '60%': { left: '100%' },
                    '100%': { left: '100%' }
                }
            }
        },
    },
    plugins: [],
}