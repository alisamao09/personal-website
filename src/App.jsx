import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </Router>
  );
}

export default App; 