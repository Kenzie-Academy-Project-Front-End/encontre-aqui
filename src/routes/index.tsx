import { Routes, Route } from 'react-router-dom';
import { RegisterUser } from '../pages/RegisterUser';
import { UserLogin } from '../pages/UserLogin';

export const RoutesMain = () => (
  <Routes>
    <Route path='/register' element={<RegisterUser />} />
    <Route path='/login' element={<UserLogin />} />
  </Routes>
);
