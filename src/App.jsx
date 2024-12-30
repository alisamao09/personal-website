import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import AppRoutes from './routes/AppRoutes';

function App() {
  console.log('App is rendering');
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div style={{ color: 'white' }}>
          <AppRoutes />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App; 