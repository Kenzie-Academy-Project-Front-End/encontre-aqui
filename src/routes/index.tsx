import { Routes, Route } from 'react-router-dom';
import AnonymousNavigate from '../pages/Anonymous';
import { LandingPage } from '../pages/LandingPage';
import { RegisterUser } from '../pages/RegisterUser';

export const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/register' element={<RegisterUser />} />
    <Route path='/anonymous' element={<AnonymousNavigate />} />
  </Routes>
);
