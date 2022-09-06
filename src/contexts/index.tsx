import { ReactNode } from 'react';
import { ClaimProvider } from './ClaimContext';
import { ItemProvider } from './ItemContext';
import { UserProvider } from './UserContext';

interface IGlobalProvider {
  children: ReactNode;
}

function GlobalProvider({ children }: IGlobalProvider) {
  return (
    <UserProvider>
      <ItemProvider>
        <ClaimProvider>{children}</ClaimProvider>
      </ItemProvider>
    </UserProvider>
  );
}

export default GlobalProvider;
