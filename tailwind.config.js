/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0f172a', // Slate 900
                    light: '#334155', // Slate 700
                },
                accent: {
                    DEFAULT: '#0ea5e9', // Sky 500
                    hover: '#0284c7', // Sky 600
                }
            },
            animation: {
                blob: "blob 7s infinite",
                float: "float 6s ease-in-out infinite",
                marquee: "marquee 60s linear infinite",
            },
            keyframes: {
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                },
                float: {
                    "0%, 100%": { transform: "translate(-50%, -50%) translate(0, 0)" },
                    "50%": { transform: "translate(-50%, -50%) translate(0, -20px)" },
                },
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                }
            },
        },
    },
    plugins: [],
}
