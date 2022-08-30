import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';
import Main from './pages/Main';
import AppRoutes from './routes';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
  
      <GlobalStyle />

        <AppRoutes>
          <Main />
        </AppRoutes>
  
    </ThemeProvider>
  );
}

export default App;
