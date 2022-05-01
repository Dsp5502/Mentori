import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAsync } from '../Redux/Actions/actionLogin';

const Navbar = ({ logueadoBtn }) => {
  const [hamburguer, setHamburguer] = useState(false);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutAsync());
    setHamburguer(!hamburguer);
  };
  return (
    <div className='w-full   bg-black'>
      {hamburguer && (
        <div className='bg-black bg-opacity-90 w-full  h-full p-4 absolute z-50 left-0 flex flex-col  text-white  ease-in'>
          <div className='w-full flex justify-end mt-6'>
            <FontAwesomeIcon
              className='text-xl text-white hover:text-orange-500   '
              icon={faClose}
              onClick={() => setHamburguer(!hamburguer)}
            />
          </div>

          <ul className='text-white flex  flex-col gap-10 justify-center items-center mx-5 '>
            <li>
              {logueadoBtn !== null ? (
                <Link
                  to='/admin'
                  className='mx-5  text-lg '
                  onClick={() => setHamburguer(!hamburguer)}
                >
                  Administar Mentori
                </Link>
              ) : (
                <Link
                  to='/'
                  className='mx-5 text-lg '
                  onClick={() => setHamburguer(!hamburguer)}
                >
                  Inicio
                </Link>
              )}
            </li>
            <li>
              <Link
                to='/ourmonitor'
                className={logueadoBtn !== null ? 'hidden' : 'mx-5 text-lg  '}
                onClick={() => setHamburguer(!hamburguer)}
              >
                Nuestros Monitores
              </Link>
            </li>
            <li>
              <Link
                to='/contacus'
                className={logueadoBtn !== null ? 'hidden' : 'mx-5 text-lg  '}
                onClick={() => setHamburguer(!hamburguer)}
              >
                Contactenos
              </Link>
            </li>
            <li>
              {logueadoBtn !== null ? (
                <button
                  className='mx-5 text-lg bg-green-600 px-5 py-2 rounded-2xl '
                  onClick={handleLogOut}
                >
                  Salir
                </button>
              ) : (
                <Link
                  to='/login'
                  className='mx-5 text-lg bg-green-600 px-5 py-2 rounded-2xl  '
                  onClick={() => setHamburguer(!hamburguer)}
                >
                  Acceder
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
      <div className='flex justify-between items-center '>
        <img
          className='h-32 w-32 mx-5 my-2'
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1650996417/Mentori-removebg-preview_mldiit.png'
          alt=''
        />

        <ul className='text-white flex justify-center items-center mx-5'>
          <div className=' h-12 mr-4 flex items-center  self-start md:hidden'>
            <FontAwesomeIcon
              className='  text-white text-xl hover:text-orange-peel-500  '
              icon={faBars}
              onClick={() => setHamburguer(!hamburguer)}
            />
          </div>
          <li>
            {logueadoBtn !== null ? (
              <Link
                to='/admin'
                className='mx-5  text-lg hidden md:inline-block'
              >
                Administar Mentori
              </Link>
            ) : (
              <Link to='/' className='mx-5 text-lg hidden md:inline-block'>
                Inicio
              </Link>
            )}
          </li>
          <li>
            <Link
              to='/ourmonitor'
              className={
                logueadoBtn !== null
                  ? 'hidden'
                  : 'mx-5 text-lg hidden md:inline-block '
              }
            >
              Nuestros Monitores
            </Link>
          </li>
          <li>
            <Link
              to='/contacus'
              className={
                logueadoBtn !== null
                  ? 'hidden'
                  : 'mx-5 text-lg hidden md:inline-block '
              }
            >
              Contactenos
            </Link>
          </li>
          <li>
            {logueadoBtn !== null ? (
              <button
                className='mx-5 text-lg bg-green-600 px-5 py-2 rounded-2xl hidden md:inline-block'
                onClick={handleLogOut}
              >
                Salir
              </button>
            ) : (
              <Link
                to='/login'
                className='mx-5 text-lg bg-green-600 px-5 py-2 rounded-2xl  hidden md:inline-block'
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
