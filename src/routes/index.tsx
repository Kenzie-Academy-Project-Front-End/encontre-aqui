import { Routes, Route } from 'react-router-dom';
import AnonymousNavigate from '../pages/Anonymous';
import { RegisterUser } from '../pages/RegisterUser';

export const RoutesMain = () => (
  <Routes>
    <Route path='/register' element={<RegisterUser />} />
    <Route path='/anonymous' element={<AnonymousNavigate />} />
  </Routes>
);
