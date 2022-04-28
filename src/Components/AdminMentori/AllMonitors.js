import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteMonitorAsync,
  listMonitorAsync,
} from '../../Redux/Actions/actionMonitor';
import NavALLMonitor from './NavALLMonitor';

const AllMonitors = () => {
  const { monitors } = useSelector((state) => state.monitors);
  const dispatch = useDispatch();
  console.log(monitors);
  useEffect(() => {
    dispatch(listMonitorAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteMonitor = (cedula) => {
    console.log(cedula);
    dispatch(deleteMonitorAsync(cedula));
  };

  return (
    <div className='w-8/12  mx-auto'>
      <NavALLMonitor />
      <h2 className='text-center uppercase  font-bold text-4xl text-white p-5'>
        Monitores
      </h2>
      {monitors.map((monitor) => (
        <div
          key={monitor.cedula}
          className='max-w-sm w-full lg:max-w-full h-56 lg:flex my-5'
        >
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
              <button className='bg-blue-700 w-3/6 rounded-lg py-2'>
                Editar
              </button>
              <button
                className='bg-red-700 w-3/6 rounded-lg py-2'
                onClick={() => {
                  handleDeleteMonitor(monitor.cedula);
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllMonitors;
