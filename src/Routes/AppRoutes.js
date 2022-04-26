import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Navbar from '../Components/Navbar';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
