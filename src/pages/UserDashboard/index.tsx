import { useContext } from 'react';
import HeaderUser from '../../components/HeaderUser';
import { UserContext } from '../../contexts/UserContext';

function UserNavigate() {
  const userID = window.localStorage.getItem('userID');
  const { redirectLadingPage } = useContext(UserContext);

  return <> {userID ? <HeaderUser /> : redirectLadingPage()} </>;
}

export default UserNavigate;
