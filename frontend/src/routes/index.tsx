import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Main from '../pages/Main';
import UserDetails from '../pages/Users';

interface IProps {};

const AppRoutes: React.FC<IProps> = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={ <Navigate to='/users' /> } />
        <Route path='/users' element={ <Main /> } />
        <Route path='/user/:id' element={ <UserDetails /> } />

      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;
