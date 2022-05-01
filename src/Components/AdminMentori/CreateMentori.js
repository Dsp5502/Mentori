import React from 'react';
import { Link } from 'react-router-dom';

const CreateMentori = () => {
  return (
    <div className='w-full lg:w-1/2 mb-5  '>
      <div className='flex justify-center'>
        <Link
          to='/admin/addMentori'
          className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'
        >
          <img
            className=' w-full lg:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1651092365/Mathematics-bro-removebg-preview_qkjrtv.png'
            alt=''
          />
          <div className='p-6 flex flex-col justify-start'>
            <h5 className='text-gray-900 text-xl font-medium mb-2'>
              Crear Monitoria
            </h5>
            <p className='text-gray-700 text-base mb-4'>
              Aqui Puedes Crear, Editar o eliminar Monitorias.
            </p>
            <p className='text-gray-600 text-xs'>
              Recuerda Tener toda la info para cada nueva Monitoria
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CreateMentori;
