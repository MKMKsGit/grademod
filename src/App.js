import "@fontsource/noto-sans-thai";
import { ThemeProvider } from "@mui/material";
import { MyTheme } from "themes/MyTheme";
import MyRoutes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <MyRoutes />
    </ThemeProvider>
  );
}

export default App;
