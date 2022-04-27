import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Navbar from '../Components/Navbar';
import PublicRouters from './PublicRouters';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/FirebaseConfig';
import PrivateRouters from './PrivateRouters';
import DashRoutersRoutes from './DashRoutersRoutes';

function AppRoutes() {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [setIsLoggedIn, setChecking]);

  if (checking) {
    return <h1 className='text-6xl text-white'>hola</h1>;
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <PublicRouters isLoggedIn={isLoggedIn}>
              <Home />
            </PublicRouters>
          }
        />
        <Route
          path='/login'
          element={
            <PublicRouters isLoggedIn={isLoggedIn}>
              <Login />
            </PublicRouters>
          }
        />
        <Route
          path='/*'
          element={
            <PrivateRouters isLoggedIn={isLoggedIn}>
              <DashRoutersRoutes />
            </PrivateRouters>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
