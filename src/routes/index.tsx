import { Routes, Route } from 'react-router-dom';
import { RegisterUser } from '../pages/RegisterUser';

export const RoutesMain = () => (
  <Routes>
    <Route path='/register' element={<RegisterUser />} />
  </Routes>
);
