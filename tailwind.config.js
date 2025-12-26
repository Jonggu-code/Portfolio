const { transform } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Vite에서 사용하는 파일 확장자를 모두 포함
    ],
    theme: {
        extend: {
            colors: {
                customBlue: "#186ebd",
                customDark: "#0f172a",
                customGray: "#334155",
                customSky: "#71b1ff",
                pointText: "rgb(135 160 184)",
                basicFont: "#333333",
            },
        },
        keyframes: {
            slideInOut: {
                "0%": {
                    display: "flex",
                    opacity: "0",
                    transform: "translateY(20px)",
                },
                "40%": { opacity: "1", transform: "translateY(0)" },
                "70%": { opacity: "1", transform: "translateY(0)" },
                "99%": { opacity: "0", transform: "translateY(-20px)" },
                "100%": { opacity: "0", display: "none" },
            },
            textIn: {
                "0%": { opacity: "0", transform: "translateX(-20px)" },
                "100%": { opacity: "1", transform: "translateX(0)" },
            },
            skillsIn: {
                "0%": { opacity: "0", transform: "translateY(20px)" },
                "100%": { opacity: "1", transform: "translateY(0)" },
            },
            modalIn: {
                "0%": { opacity: "0", transform: "translateY(40px)" },
                "100%": { opacity: "1", transform: "translateY(0)" },
            },
        },
        animation: {
            slideInOut: "slideInOut 2s ease-in-out forwards",
            textIn: "textIn 0.5s ease-out forwards",
            skillsIn: "skillsIn 0.5s ease-out forwards",
            modalIn: "modalIn 0.3s ease-out forwards",
        },
    },
    plugins: [],
};
