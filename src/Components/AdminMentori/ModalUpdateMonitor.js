import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FormUpdateMonitor from './FormUpdateMonitor';

const ModalUpdateMonitor = ({ setModalUpdate, monitorUpdate }) => {
  const cerrarModal = () => {
    setModalUpdate(false);
  };
  return (
    <div className='w-full h-screen bg-black outline-none bg-opacity-50 fixed  top-0 left-0 flex justify-center items-center '>
      <div className='w-8/12 bg-white shadow-2xl rounded-lg  absolute top-0 flex flex-col  '>
        <div className='w-full px-5 py-2 flex  justify-end  '>
          {' '}
          <FontAwesomeIcon
            className='text-xl text-black hover:text-orange-peel-500 pt-1   '
            icon={faClose}
            onClick={cerrarModal}
          />
        </div>
        <h2 className='text-center uppercase  font-bold text-4xl text-black p-5'>
          Editar Monitor
        </h2>
        <FormUpdateMonitor
          monitorUpdate={monitorUpdate}
          setModalUpdate={setModalUpdate}
        />
      </div>
    </div>
  );
};

export default ModalUpdateMonitor;
