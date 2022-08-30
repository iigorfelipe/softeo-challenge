import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';
import Main from './pages/Main';
import AppRoutes from './routes';
import UserContextProvider from './contexts/UserProvider';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
  
      <GlobalStyle />

      <UserContextProvider>

          <AppRoutes>
            <Main />
          </AppRoutes>

      </UserContextProvider>
  
    </ThemeProvider>
  );
}

export default App;
