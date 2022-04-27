import React from 'react';

const CreateMentori = () => {
  return (
    <div className='w-1/2 '>
      <div class='flex justify-center'>
        <div class='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
          <img
            class=' w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1651092365/Mathematics-bro-removebg-preview_qkjrtv.png'
            alt=''
          />
          <div class='p-6 flex flex-col justify-start'>
            <h5 class='text-gray-900 text-xl font-medium mb-2'>
              Crear Monitoria
            </h5>
            <p class='text-gray-700 text-base mb-4'>
              Aqui Puedes Crear, Editar o eliminar Monitores.
            </p>
            <p class='text-gray-600 text-xs'>Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMentori;
