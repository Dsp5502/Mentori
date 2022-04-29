import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMonitorAsync } from '../Redux/Actions/actionMonitor';
import { listMonitoriaAsync } from '../Redux/Actions/actionMonitoria';

const MentoriHome = () => {
  const dispatch = useDispatch();
  const { monitorias } = useSelector((state) => state.monitorias);
  const { monitors } = useSelector((state) => state.monitors);

  useEffect(() => {
    dispatch(listMonitoriaAsync());
    dispatch(listMonitorAsync());
  }, []);

  return (
    <div className='text-white w-full '>
      <h2 className='text-center uppercase  font-bold text-4xl text-white mb-5 p-5'>
        Mentor Home
      </h2>
      <div className='mx-5 bg-white text-black p-5 rounded-lg '>
        <div className='flex flex-wrap justify-center'>
          <ul className='w-full flex gap-5'>
            <li className='w-3/12 text-center border-b-2 border-green-700  font-bold'>
              Materia
            </li>
            <li className='w-3/12 text-center border-b-2 border-green-700 font-bold '>
              Monitoria
            </li>
            <li className='w-2/12 text-center border-b-2 border-green-700 font-bold '>
              Salon
            </li>
            <li className='w-2/12 text-center border-b-2 border-green-700  font-bold'>
              Fecha
            </li>
            <li className='w-1/12 text-center border-b-2 border-green-700  font-bold'>
              Hora
            </li>
            <li className='w-1/12 text-center border-b-2 border-green-700 font-bold'>
              Acciones
            </li>
          </ul>
          {monitorias.map((monitoria) => (
            <ul className='w-full flex '>
              <li className='w-3/12 text-center border-b-2 border-green-200 '>
                {monitoria.materia}
              </li>
              <li className='w-3/12 text-center border-b-2 border-green-200 '>
                {monitors.map((monitor) =>
                  monitoria.monitorSelect === monitor.id ? (
                    <>
                      {monitor.nombres} {monitor.apellidos}
                    </>
                  ) : (
                    ''
                  )
                )}
              </li>
              <li className='w-2/12 text-center border-b-2 border-green-200 '>
                {monitoria.salon}
              </li>
              <li className='w-2/12 text-center border-b-2 border-green-200 '>
                {monitoria.fecha}
              </li>
              <li className='w-1/12 text-center border-b-2 border-green-200 '>
                {monitoria.hora}
              </li>
              <li className='w-1/12 text-center border-b-2 border-green-200'>
                Recordatorio
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentoriHome;
