/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                alabaster: {
                    50: "#ffffff",
                    100: "#fefeff",
                    200: "#fdfefe",
                    300: "#fcfdfd",
                    400: "#fafbfc",
                    500: "#f8f9fa",
                    600: "#dfe0e1",
                    700: "#babbbc",
                    800: "#959596",
                    900: "#7a7a7b",
                },
                masala: {
                    50: "#f5f5f5",
                    100: "#ececec",
                    200: "#cfcfcf",
                    300: "#b2b2b2",
                    400: "#797979",
                    500: "#3f3f3f",
                    600: "#393939",
                    700: "#2f2f2f",
                    800: "#262626",
                    900: "#1f1f1f",
                },
                "rolling-stone": {
                    50: "#f9f9f9",
                    100: "#f2f3f3",
                    200: "#dfe0e2",
                    300: "#cbced1",
                    400: "#a5a9ae",
                    500: "#7e848b",
                    600: "#71777d",
                    700: "#5f6368",
                    800: "#4c4f53",
                    900: "#3e4144",
                },
            },
            boxShadow: {
                "3xl": "0px 3px 10px rgba(32, 165, 207, 0.1)",
            },
            padding: {
                9: "9px",
                5.5: "22px",
                7.5: "30px",
                11: "11px",
                23: "23px",
                46: "46px",
            },
            fontFamily: {
                Inter: "Inter, sans-serif",
            },
            fontSize: {
                15: ["15px", "18px"],
            },
            lineHeight: {
                19: "19px",
            },
            borderRadius: {
                20: "20px",
            },
        },
    },
    plugins: [],
};
