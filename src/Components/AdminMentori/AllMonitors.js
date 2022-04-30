import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteMonitorAsync,
  listMonitorAsync,
} from '../../Redux/Actions/actionMonitor';
import ModalUpdateMonitor from './ModalUpdateMonitor';
import NavALLMonitor from './NavALLMonitor';
import NavSearch from './NavSearch';

const AllMonitors = () => {
  const [modalUpdate, setModalUpdate] = useState(false);
  const [monitorUpdate, setMonitorUpdate] = useState();
  const { monitors } = useSelector((state) => state.monitors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMonitorAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteMonitor = (id) => {
    console.log(id);
    dispatch(deleteMonitorAsync(id));
  };
  const handleUpdateMonitor = (monitor) => {
    setModalUpdate(true);
    console.log(monitor);
    setMonitorUpdate(monitor);
  };

  return (
    <>
      {modalUpdate && (
        <ModalUpdateMonitor
          setModalUpdate={setModalUpdate}
          monitorUpdate={monitorUpdate}
        />
      )}
      <div className='w-8/12  mx-auto'>
        <NavALLMonitor />
        <h2 className='text-center uppercase  font-bold text-4xl text-white p-5'>
          Monitores
        </h2>
        <NavSearch />
        {monitors.length === 0 && (
          <h1 className='text-white  w-full h-56 flex gap-5 justify-center items-center my-5 border-2 border-green-500'>
            <FontAwesomeIcon className='text-6xl' icon={faCircleExclamation} />
            <h2 className='font-bold text-6xl'>No hay monitores</h2>
          </h1>
        )}

        {monitors.map((monitor) => (
          <div key={monitor.cedula} className=' w-full h-56 lg:flex my-5'>
            <div className='h-48 lg:h-auto lg:w-48 flex-none  rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'>
              <img
                className='object-cover  h-48 lg:h-full lg:w-48'
                src={
                  monitor.foto1 === ''
                    ? 'https://res.cloudinary.com/djjgtili7/image/upload/v1650336872/ArtistApp/ICONO-PERFIL_gh23iu.png'
                    : monitor.foto1
                }
                alt=''
              />
            </div>
            <div className=' bg-white  w-full rounded-br-sm  p-4 flex flex-col   '>
              <div className='text-gray-900 font-bold text-xl mb-2'>
                {monitor.nombres} {monitor.apellidos}
              </div>
              <p className=' w-full text-gray-700 text-base'>
                Programa Academico: {monitor.programaAcademico}
              </p>
              <p className=' w-full text-gray-700 text-base'>
                Semestre : {monitor.semestre}
              </p>
              <p className=' w-full text-gray-700 text-base'>
                Cedula: {monitor.cedula}
              </p>
              <p className=' w-full text-gray-700 text-base'>
                Email: {monitor.email}
              </p>
              <div className='w-full flex gap-5 py-5 text-white'>
                <button
                  className='bg-blue-700 w-3/6 rounded-lg py-2'
                  onClick={() => {
                    handleUpdateMonitor(monitor);
                  }}
                >
                  Editar
                </button>
                <button
                  className='bg-red-700 w-3/6 rounded-lg py-2'
                  onClick={() => {
                    handleDeleteMonitor(monitor.id);
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllMonitors;
