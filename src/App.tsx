import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/UserContext';
import { RoutesMain } from './routes';
import { GlobalStyle } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <ToastContainer />
      <RoutesMain />
    </UserProvider>
  );
}
