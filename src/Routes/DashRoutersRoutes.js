import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddMentori from '../Components/AddMentori';
import AddMonitor from '../Components/AddMonitor';
import AllMonitori from '../Components/AdminMentori/AllMonitori';
import AllMonitors from '../Components/AdminMentori/AllMonitors';
import AdminMetori from '../Components/AdminMetori';

const DashRoutersRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/admin' element={<AdminMetori />} />

        <Route path='/admin/addMonitor' element={<AddMonitor />} />
        <Route path='/admin/addMentori' element={<AddMentori />} />
        <Route path='/admin/allMonitors' element={<AllMonitors />} />
        <Route path='/admin/allMonitori' element={<AllMonitori />} />
        <Route path='*' element={<Navigate to='admin' />} />
      </Routes>
    </>
  );
};

export default DashRoutersRoutes;
