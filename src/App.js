import logo from './logo.svg';
import '@fontsource/noto-sans-thai';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import { MyTheme } from './MyTheme';
import MyRoutes from './Routes';

function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <MyRoutes />
    </ThemeProvider>
  );
}

export default App;
