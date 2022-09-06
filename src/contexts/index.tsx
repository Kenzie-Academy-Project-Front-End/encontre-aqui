import { ReactNode } from 'react';
import { ClaimProvider } from './ClaimContext';
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
        <ItemProvider>
          <ClaimProvider>{children}</ClaimProvider>
        </ItemProvider>
      </UserProvider>
    </AdminProvider>
  );
}

export default GlobalProvider;
