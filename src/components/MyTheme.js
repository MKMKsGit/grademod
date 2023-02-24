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
    success: {
      main: "#6BC684",
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
    superdarkgray: "#3c4043",
  },
  typography: {
    fontFamily: font,
    h1: {
      fontSize: 40,
      fontWeight: 600,
    },
    h2: {
      fontSize: 32,
      fontWeight: 600,
    },
    h3: {
      fontSize: 28,
      fontWeight: 600,
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 300,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 300,
    },
  },
  components: {
    ...buttonTheme.components,
    ...textFieldTheme.components,
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: 16,
          width: "100%",
          height: "100%",
        },
      },
    },
  },
});
