import { ToastContainer } from 'react-toastify';
import GlobalProvider from './contexts';
import { RoutesMain } from './routes';
import { GlobalStyle } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <ToastContainer />
      <RoutesMain />
    </GlobalProvider>
  );
}
