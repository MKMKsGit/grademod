import "@fontsource/noto-sans-thai";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { MyTheme } from "themes/MyTheme";
import MyRoutes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <CssBaseline />
      <MyRoutes />
    </ThemeProvider>
  );
}

export default App;
