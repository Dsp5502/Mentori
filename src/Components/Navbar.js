import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAsync } from '../Redux/Actions/actionLogin';

const Navbar = ({ logueadoBtn }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutAsync());
  };
  return (
    <div className='w-full  border-red-700 bg-black'>
      <div className='flex justify-between items-center '>
        <img
          className='h-32 w-32 mx-5 my-2'
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1650996417/Mentori-removebg-preview_mldiit.png'
          alt=''
        />
        <ul className='text-white flex justify-center items-center mx-5'>
          <li>
            <Link to='/' className='mx-5 text-lg'>
              Inicio
            </Link>
          </li>
          <li>
            <Link to='/ourmonitor' className='mx-5 text-lg'>
              Nuestros Monitores
            </Link>
          </li>
          <li>
            <Link to='/' className='mx-5 text-lg'>
              Contactenos
            </Link>
          </li>
          <li>
            {logueadoBtn !== null ? (
              <button
                className='mx-5 text-lg bg-green-600 px-5 py-2 rounded-2xl'
                onClick={handleLogOut}
              >
                Salir
              </button>
            ) : (
              <Link
                to='/login'
                className='mx-5 text-lg bg-green-600 px-5 py-2 rounded-2xl '
              >
                Acceder
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
