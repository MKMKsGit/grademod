import { MyTheme } from "../src/themes/MyTheme";
import { ThemeProvider } from "@mui/material";
import "@mui/icons-material";
import "../src/i18n";

import "@fontsource/material-icons";
import "@fontsource/noto-sans-thai";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={MyTheme}>
    <Story />
  </ThemeProvider>
);

export const decorators = [withMuiTheme];
