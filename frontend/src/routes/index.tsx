import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Main from '../pages/Main';

interface IProps {};

const AppRoutes: React.FC<IProps> = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={ <Navigate to='/users' /> } />
        <Route path='/users' element={ <Main /> } />

        {/* <Route path='/users/details' element={ <UsersDetails /> } /> */}
        {/* <Route path='/user/:id' element={ <UserDetail /> } /> */}

      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;
