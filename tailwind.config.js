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
                customGray: "#6c87a1",
                customSky: "#71b1ff",
                pointText: "rgb(135 160 184)",
            },
        },
    },
    plugins: [],
};
