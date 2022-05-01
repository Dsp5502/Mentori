import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <section className='flex w-full flex-col-reverse lg:flex-row justify-center items-center  mx-5 px-5'>
      <div className='w-11/12 lg:w-1/2'>
        <h1 className='text-6xl text-white font-bold mr-5  mb-5'>
          Mentori Te acerca a tus Monitorias{' '}
        </h1>
        <p className='text-white pr-10  mb-5 italic'>
          ¿Quieres saber en que salon, horario o que Monitor va a dictar la
          siguiente monitoria en la materia que necesitas ayuda y poder mejorar
          en las areas que tienes dificultades.
        </p>
        <Link to='/mentori'>
          <button className='bg-green-600 px-5 py-2 rounded-2xl text-white  mb-5 lg:mb-5  w-full  lg:w-1/2 mx-auto'>
            Acceder a Mentori
          </button>
        </Link>
      </div>
      <div className='w-full lg:w-1/2  '>
        <img
          className='w-5/6'
          src='https://res.cloudinary.com/djjgtili7/image/upload/v1651008444/4630062-removebg_osensc.png'
          alt=''
        />
      </div>
    </section>
  );
};

export default Main;
