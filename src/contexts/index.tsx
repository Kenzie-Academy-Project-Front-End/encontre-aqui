import { ReactNode } from 'react';
import { ItemProvider } from './ItemContext';
import { RequiredContext, RequiredProvider } from './RequiredContext';
import { UserProvider } from './UserContext';

interface IGlobalProvider {
  children: ReactNode;
}

function GlobalProvider({ children }: IGlobalProvider) {
  return (
    <UserProvider>
      <ItemProvider>
        <RequiredProvider>{children}</RequiredProvider>
      </ItemProvider>
    </UserProvider>
  );
}

export default GlobalProvider;
