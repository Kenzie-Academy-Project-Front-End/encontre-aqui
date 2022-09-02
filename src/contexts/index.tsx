import { ReactNode } from 'react';
import { ItemProvider } from './ItemContext';
import { UserProvider } from './UserContext';

interface IGlobalProvider {
  children: ReactNode;
}

function GlobalProvider({ children }: IGlobalProvider) {
  return (
    <UserProvider>
      <ItemProvider>{children}</ItemProvider>
    </UserProvider>
  );
}

export default GlobalProvider;
