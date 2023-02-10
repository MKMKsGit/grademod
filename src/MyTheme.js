import { createTheme } from "@mui/material";

const font = "'Noto Sans Thai', sans-serif";

export const MyTheme = createTheme({
    palette: {
        primary: {
            main: "#4a60ac",
        },
        secondary: {
            main: "#f15624",
        },
        error: {
            main: "#ff4242"
        },
        lightblue: {
            main: "#80a8d9"
        },
        yellow: {
            main: "#fcb43e"
        },
        white: {
            main: "#ffffff"
        },
        black: {
            main: "#000000"
        }
    },
    typography: {
        fontFamily: font,
    },
})