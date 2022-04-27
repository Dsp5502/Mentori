import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminMetori from '../Components/AdminMetori';

const DashRoutersRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/admin' element={<AdminMetori />} />
        <Route path='*' element={<Navigate to='admin' />} />
      </Routes>
    </>
  );
};

export default DashRoutersRoutes;
