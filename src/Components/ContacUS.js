import { sendForm } from '@emailjs/browser';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ContacUS = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    sendForm(
      'service_9inug7v',
      'template_lan6yqd',
      e.target,
      'oGebfnu9ojAiyVSwm'
    )
      .then((result) => {
        if (result.text === 'OK') {
          Swal.fire({
            title: 'Mensaje enviado',
            text: 'Gracias por contactarnos',
            icon: 'success',
          });
          navigate('/');
        }
      })
      .catch((error) => {
        if (error.text) {
          Swal.fire({
            title: 'Error',
            text: error.text,
            icon: 'error',
          });
        }
      });
  };

  return (
    <div className=' w-full py-5'>
      <form
        className=' border-2 w-10/12 lg:w-6/12  flex flex-col justify-center items-center mx-auto bg-white rounded-lg shadow-lg py-5'
        onSubmit={handleSubmit}
      >
        <label className='w-full px-8   text-lg font-bold '>Nombre:</label>
        <input
          className='bordebasico w-11/12 px-5     outline-none  border-gray-600'
          name='user_name'
          type='text'
          required
        />

        <label className='w-full px-8 mt-5 text-lg font-bold'>Correo:</label>
        <input
          className='w-11/12 px-5  bordebasico outline-none  border-gray-600'
          name='user_email'
          type='email'
          required
        />

        <label className='w-full  px-8 mt-5  text-lg font-bold'>Mensaje:</label>
        <textarea
          name='user_message'
          className='w-11/12  px-5  bordebasico outline-none  border-gray-600'
          type='text'
          required
        />

        <button className='text-white w-11/12 mt-8 bg-green-600 hover:bg-green-800 px-5 py-2 rounded-2xl'>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContacUS;
