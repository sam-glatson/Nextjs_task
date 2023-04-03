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
                "athens-gray": {
                    50: "#fefefe",
                    100: "#fdfefe",
                    200: "#fbfbfc",
                    300: "#f8f9fa",
                    400: "#f2f5f7",
                    500: "#edf0f3",
                    600: "#d5d8db",
                    700: "#b2b4b6",
                    800: "#8e9092",
                    900: "#747677",
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
                abbey: {
                    50: "#f6f7f7",
                    100: "#eeeeef",
                    200: "#d3d5d6",
                    300: "#b9bcbd",
                    400: "#858a8c",
                    500: "#50585b",
                    600: "#484f52",
                    700: "#3c4244",
                    800: "#303537",
                    900: "#272b2d",
                },
                "storm-gray": {
                    50: "#f8f8f9",
                    100: "#f1f1f3",
                    200: "#dcdce0",
                    300: "#c7c7cd",
                    400: "#9e9ea8",
                    500: "#747482",
                    600: "#686875",
                    700: "#575762",
                    800: "#46464e",
                    900: "#393940",
                },
                "cape-cod": {
                    50: "#f5f6f6",
                    100: "#ececed",
                    200: "#cfd0d1",
                    300: "#b2b4b5",
                    400: "#787b7e",
                    500: "#3e4347",
                    600: "#383c40",
                    700: "#2f3235",
                    800: "#25282b",
                    900: "#1e2123",
                },
                "mine-shaft": {
                    50: "#f5f5f5",
                    100: "#eaeaea",
                    200: "#cbcbcb",
                    300: "#acacac",
                    400: "#6d6d6d",
                    500: "#2f2f2f",
                    600: "#2a2a2a",
                    700: "#232323",
                    800: "#1c1c1c",
                    900: "#171717",
                },
                shark: {
                    50: "#f4f4f4",
                    100: "#e9e9e9",
                    200: "#c8c8c8",
                    300: "#a7a7a7",
                    400: "#656464",
                    500: "#232222",
                    600: "#201f1f",
                    700: "#1a1a1a",
                    800: "#151414",
                    900: "#111111",
                },
                mercury: {
                    50: "#fefefe",
                    100: "#fcfdfd",
                    200: "#f8f9f9",
                    300: "#f4f5f6",
                    400: "#eceeef",
                    500: "#e4e6e8",
                    600: "#cdcfd1",
                    700: "#abadae",
                    800: "#898a8b",
                    900: "#707172",
                },
                elephant: {
                    50: "#f4f5f6",
                    100: "#e9ebed",
                    200: "#c9cdd1",
                    300: "#a8aeb5",
                    400: "#67727e",
                    500: "#263547",
                    600: "#223040",
                    700: "#1d2835",
                    800: "#17202b",
                    900: "#131a23",
                },
            },
            boxShadow: {
                "3xl": "0px 3px 10px rgba(32, 165, 207, 0.1)",
                "4xl": "0px 2px 8px rgba(32, 165, 207, 0.18)",
            },
            padding: {
                9: "9px",
                5.5: "22px",
                7.5: "30px",
                11: "11px",
                23: "23px",
                46: "46px",
                120: "120px",
                55: "55px",
                8.5: "33px",
                38: "38px",
                19: "19px",
                6.5: "25px",
                70: "70px",
                72: "72px",
                52: "52px",
                26: "26px",
                33: "33px",
                32: "32px",
                13: "13px",
                100: "100px",
                34: "34px",
                35: "35px",
            },
            dropShadow: {
                "4xl": "0px 3px 9px rgba(0, 0, 0, 0.17)",
            },
            margin: {
                6.5: "25px",
                11: "11px",
                5.5: "22px",
                21: "21px",
            },
            space: {
                6.5: "25px",
                4.5: "9px",
                24: "24px",
            },
            fontFamily: {
                Inter: "Inter, sans-serif",
            },
            fontSize: {
                15: ["15px", "18px"],
            },
            lineHeight: {
                19: "19px",
                29: "29px",
                25: "25px",
                17: "17px",
                31: "31px",
                15: "15px",
            },
            borderRadius: {
                20: "20px",
                10: "10px",
                14: "14px",
            },
            fontSize: {
                "10xl": "1.563rem",
            },
        },
    },
    plugins: [],
};
