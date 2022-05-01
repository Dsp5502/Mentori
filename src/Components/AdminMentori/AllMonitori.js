import {
  faCircleExclamation,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMonitorAsync } from '../../Redux/Actions/actionMonitor';
import {
  deleteMonitoriaAsync,
  listMonitoriaAsync,
} from '../../Redux/Actions/actionMonitoria';
import NavbarMentori from '../Mentori/NavbarMentori';
import ModalUpdateMonitoria from './ModalUpdateMonitoria';
import NavALLMonitor from './NavALLMonitor';

const AllMonitori = () => {
  const dispatch = useDispatch();
  const { monitorias } = useSelector((state) => state.monitorias);
  const { monitors } = useSelector((state) => state.monitors);

  const [modalUpdate, setModalUpdate] = useState(false);
  const [monitoriaUpdate, setMonitoriaUpdate] = useState();

  useEffect(() => {
    dispatch(listMonitoriaAsync());
    dispatch(listMonitorAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteMonitoria = (id) => {
    dispatch(deleteMonitoriaAsync(id));
  };

  const handleUpdateMonitoria = (monitoria) => {
    setModalUpdate(true);
    console.log(monitoria);
    setMonitoriaUpdate(monitoria);
  };

  monitorias.map((moni) =>
    monitors.map((mon) =>
      moni.monitorSelect === mon.id
        ? (moni.monitornombre = mon.nombres + ' ' + mon.apellidos)
        : null
    )
  );

  return (
    <>
      {modalUpdate && (
        <ModalUpdateMonitoria
          setModalUpdate={setModalUpdate}
          monitoriaUpdate={monitoriaUpdate}
        />
      )}
      <NavALLMonitor />
      <NavbarMentori />
      {monitorias.length === 0 && (
        <h1 className='text-white  w-full h-56 flex gap-5 justify-center items-center my-5 border-2 border-green-500'>
          <FontAwesomeIcon
            className='text-xl hover:text-6xl'
            icon={faCircleExclamation}
          />
          <h2 className='font-bold text-xl hover:text-6xl'>No hay monitores</h2>
        </h1>
      )}
      <div className=' w-10/12 mx-auto flex justify-center'>
        <table className=' w-screen lg:w-full   text-white'>
          <thead>
            <tr className='  lg:w-full border-b-2 border-b-green-700 '>
              <th className='text-xs lg:text-base lg:w-3/12 mx-auto'>
                Materia
              </th>
              <th className='text-xs lg:text-base lg:w-3/12 mx-auto'>
                Monitor
              </th>
              <th className='text-xs lg:text-base lg:w-1/12 mx-auto'>Salon</th>
              <th className='text-xs lg:text-base lg:w-2/12 mx-auto'>Fecha</th>
              <th className='text-xs lg:text-base lg:w-1/12 mx-auto'>Hora</th>
              <th className='text-xs lg:text-base lg:w-2/12 mx-auto'>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {monitorias.map((monitoria) => (
              <tr
                key={monitoria.idMonitoria}
                className=' w-full border-b-2 border-b-green-200 mx-auto hover:bg-green-200 hover:text-black '
              >
                <td className='w-3/12  text-center py-2 text-xs lg:text-base'>
                  {monitoria.materia}
                </td>
                <td className='w-3/12   text-center py-2 text-xs lg:text-base'>
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
                <td className='w-1/12  text-center py-2 text-xs lg:text-base'>
                  {monitoria.salon}
                </td>
                <td className='w-2/12  text-center py-2 text-xs lg:text-base'>
                  {monitoria.fecha}
                </td>
                <td className='w-1/12  text-center py-2 text-xs lg:text-base'>
                  {monitoria.hora}
                </td>
                <td className='w-2/12  text-center py-2 text-xs lg:text-base'>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className='mx-5 cursor-pointer hover:text-blue-600 text-xs lg:text-base'
                    onClick={() => {
                      handleUpdateMonitoria(monitoria);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className='mx-5 cursor-pointer hover:text-red-600 text-xs lg:text-base'
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
