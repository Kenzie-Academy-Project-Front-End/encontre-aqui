import { Routes, Route } from 'react-router-dom';
import AnonymousNavigate from '../pages/Anonymous';
import { LandingPage } from '../pages/LandingPage';
import { RegisterUser } from '../pages/RegisterUser';
import { UserLogin } from '../pages/UserLogin';

export const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/register' element={<RegisterUser />} />
    <Route path='/login' element={<UserLogin />} />
    <Route path='/anonymous' element={<AnonymousNavigate />} />
  </Routes>
);
