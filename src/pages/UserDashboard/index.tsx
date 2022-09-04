import { useContext } from 'react';
import HeaderUser from '../../components/HeaderUser';
import MainUser from '../../components/MainUser';
import { UserContext } from '../../contexts/UserContext';

function UserNavigate() {
  const userID = window.localStorage.getItem('userID');
  const { redirectLadingPage } = useContext(UserContext);

  function userDashboard() {
    return (
      <>
        <HeaderUser />
        <MainUser />
      </>
    );
  }

  return <>{userID ? userDashboard() : redirectLadingPage()} </>;
}

export default UserNavigate;
