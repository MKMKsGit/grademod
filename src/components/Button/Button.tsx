import { createTheme } from "@mui/material/styles";

const buttonTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
        },
      },
    },
  },
});

export default buttonTheme;
