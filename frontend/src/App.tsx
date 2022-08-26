import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      gomu gomu no...
    </ThemeProvider>
  );
}

export default App;
