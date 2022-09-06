import { ReactNode } from 'react';
import { AdminProvider } from './AdminContext';
import { ItemProvider } from './ItemContext';
import { UserProvider } from './UserContext';

interface IGlobalProvider {
  children: ReactNode;
}

function GlobalProvider({ children }: IGlobalProvider) {
  return (
    <AdminProvider>
      <UserProvider>
        <ItemProvider>{children}</ItemProvider>
      </UserProvider>
    </AdminProvider>
  );
}

export default GlobalProvider;
