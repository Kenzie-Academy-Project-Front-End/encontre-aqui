import { Routes, Route } from 'react-router-dom';
import AnonymousNavigate from '../pages/Anonymous';
import DashboardCompany from '../pages/DashboardCompany';
import { LandingPage } from '../pages/LandingPage';
import { UserRegister } from '../pages/UserRegister';
import { UserLogin } from '../pages/UserLogin';
import UserNavigate from '../pages/UserDashboard';
import { AdminLogin } from '../pages/AdminLogin';


export const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/register' element={<UserRegister />} />
    <Route path='/login' element={<UserLogin />} />
    <Route path='/anonymous' element={<AnonymousNavigate />} />
    <Route path='/company' element={<DashboardCompany/>}/>
    <Route path='/user' element={<UserNavigate />} />
    <Route path='/admin' element={<AdminLogin />} />

  </Routes>
);
