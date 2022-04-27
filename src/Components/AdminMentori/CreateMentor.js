import React from 'react';

const CreateMentor = () => {
  return (
    <div className='w-1/2 '>
      <div class='flex justify-center'>
        <div class='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
          <img
            class=' w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
            src='https://res.cloudinary.com/djjgtili7/image/upload/v1651092209/Webinar-amico-removebg-preview_xxrond.png'
            alt=''
          />
          <div class='p-6 flex flex-col justify-start'>
            <h5 class='text-gray-900 text-xl font-medium mb-2'>
              Crear Monitor
            </h5>
            <p class='text-gray-700 text-base mb-4'>
              Aqui Puedes crear, editar o eliminar Monitores.
            </p>
            <p class='text-gray-600 text-xs'>
              Recuerda Tener toda la info para cada nuevo Monitor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMentor;