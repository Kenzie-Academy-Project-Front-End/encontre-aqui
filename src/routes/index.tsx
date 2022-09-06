import { Routes, Route } from 'react-router-dom';
import AnonymousNavigate from '../pages/Anonymous';
import DashboardCompany from '../pages/DashboardCompany';
import { RegisterUser } from '../pages/RegisterUser';

export const RoutesMain = () => (
  <Routes>
    <Route path='/register' element={<RegisterUser />} />
    <Route path='/anonymous' element={<AnonymousNavigate />} />
    <Route path='/company' element={<DashboardCompany/>}/>
  </Routes>
);
