import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import AppRoutes from './routes/AppRoutes';

function App() {
  console.log('App is rendering');
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