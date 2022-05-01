import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginFacebook, loginGoogle } from '../../Redux/Actions/actionLogin';
import LoginFormBasic from './LoginFormBasic';

const FormLogin = () => {
  const dispatch = useDispatch();

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };
  const handleFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
    <section className='w-full flex flex-col lg:flex-row justify-center items-center text-white p-5'>
      <div className='w-full lg:w-2/5 m-5 '>
        <img
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1651010251/Login-amico-removebg-preview_f5a2la.png'
          alt=''
        />
      </div>
      <div className='w-full lg:w-3/5 border-2 flex flex-col justify-between items-center bg-white rounded-xl'>
        <h2 className='font-bold text-4xl text-black p-5'>Ingresar</h2>
        <div className='text-black w-full flex justify-center my-5 '>
          <button
            onClick={handleFacebook}
            className='shadow-2xl  mx-5  px-9 lg:px-5 py-2 w-64  bg-blue-700 hover:bg-blue-900 text-white rounded-2xl flex items-center'
          >
            <FontAwesomeIcon className='w-1/3' icon={faFacebookF} />
            <p className='w-2/3  text-left'>Facebook</p>
          </button>
          <button
            onClick={handleGoogle}
            className='shadow-2xl bordebasico mx-5 px-5 py-2  w-64  rounded-2xl flex items-center hover:bg-red-500 hover:text-white hover:border-white '
          >
            <img
              className='w-5'
              src='https://res.cloudinary.com/djjgtili7/image/upload/v1651011541/google_pu39vd.png'
              alt=''
            />
            <span className='w-2/3 text-left mx-5'>Google</span>
          </button>
        </div>
        <span className='text-2xl text-black font-bold '>O</span>
        <LoginFormBasic />
      </div>
    </section>
  );
};

export default FormLogin;
