import { createTheme } from "@mui/material";
import { buttonTheme } from "./Button";
import { textFieldTheme } from "./TextField";

const font = "'Noto Sans Thai', sans-serif";

export const MyTheme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#4a60ac",
    },
    secondary: {
      main: "#f15624",
    },
    error: {
      main: "#ff4242",
    },
    lightblue: {
      main: "#80a8d9",
    },
    orange: "#f3722c",
    yellow: "#fcb43e",
    white: "#ffffff",
    black: "#000000",
    superlightgray: "#f5f5f5",
    lightgray: "#ebebeb",
    gray: "#b0b0b0",
    darkgray: "#5f6368",
  },
  typography: {
    fontFamily: font,
  },
  components: {
    ...buttonTheme.components,
    ...textFieldTheme.components,
  },
});
