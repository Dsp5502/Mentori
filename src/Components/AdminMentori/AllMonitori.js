import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMonitorAsync } from '../../Redux/Actions/actionMonitor';
import {
  deleteMonitoriaAsync,
  listMonitoriaAsync,
} from '../../Redux/Actions/actionMonitoria';
import NavALLMonitor from './NavALLMonitor';

const AllMonitori = () => {
  const dispatch = useDispatch();
  const { monitorias } = useSelector((state) => state.monitorias);
  const { monitors } = useSelector((state) => state.monitors);

  useEffect(() => {
    dispatch(listMonitoriaAsync());
    dispatch(listMonitorAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteMonitoria = (id) => {
    dispatch(deleteMonitoriaAsync(id));
  };

  return (
    <>
      <NavALLMonitor />
      <div className='w-10/12 mx-auto flex justify-center'>
        <table className=' w-full   text-white'>
          <thead>
            <tr className=' w-full border-b-2 border-b-green-700 '>
              <th className='w-3/12 mx-auto'>Materia</th>
              <th className='w-3/12 mx-auto'>Monitor</th>
              <th className='w-1/12 mx-auto'>Salon</th>
              <th className='w-2/12 mx-auto'>Fecha</th>
              <th className='w-1/12 mx-auto'>Hora</th>
              <th className='w-2/12 mx-auto'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {monitorias.map((monitoria) => (
              <tr
                key={monitoria.idMonitoria}
                className=' w-full border-b-2 border-b-green-200 mx-auto hover:bg-green-200 hover:text-black '
              >
                <td className='w-3/12  text-center py-2'>
                  {monitoria.materia}
                </td>
                <td className='w-3/12   text-center py-2'>
                  {monitors.map((monitor) =>
                    monitoria.monitorSelect === monitor.id ? (
                      <>
                        {monitor.nombres} {monitor.apellidos}
                      </>
                    ) : (
                      ''
                    )
                  )}
                </td>
                <td className='w-1/12  text-center py-2'>{monitoria.salon}</td>
                <td className='w-2/12  text-center py-2'>{monitoria.fecha}</td>
                <td className='w-1/12  text-center py-2'>{monitoria.hora}</td>
                <td className='w-2/12  text-center py-2'>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className='mx-5 cursor-pointer'
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className='mx-5 cursor-pointer hover:text-red-600'
                    onClick={() => {
                      deleteMonitoria(monitoria.idMonitoria);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllMonitori;
