import { sendForm } from '@emailjs/browser';
import React from 'react';

const ContacUS = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    sendForm(
      'service_9inug7v',
      'template_lan6yqd',
      e.target,
      'oGebfnu9ojAiyVSwm'
    )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className=' w-full py-5'>
      <form
        className=' border-2 w-10/12 lg:w-6/12  flex flex-col justify-center items-center mx-auto bg-white rounded-lg shadow-lg py-5'
        onSubmit={handleSubmit}
      >
        <label className='w-full px-8   text-lg uppercase'>Nombre</label>
        <input
          className='bordebasico w-11/12 px-5     border-gray-600'
          name='user_name'
          type='text'
        />

        <label className='w-full px-8 mt-5 text-lg'>Correo</label>
        <input
          className='w-11/12 px-5  bordebasico border-gray-600'
          name='user_email'
          type='email'
        />

        <label className='w-full  px-8 mt-5  text-lg'>Mensaje</label>
        <textarea
          name='user_message'
          className='w-11/12  px-5  bordebasico border-gray-600'
          type='text'
        />

        <button className='text-white w-11/12 mt-8 bg-green-500 px-5 py-2 rounded-2xl'>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContacUS;
