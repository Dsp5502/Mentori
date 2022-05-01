import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { listMonitorAsync } from '../Redux/Actions/actionMonitor';
import { listMonitoriaAsync } from '../Redux/Actions/actionMonitoria';
import NavbarMentori from './Mentori/NavbarMentori';

const MentoriHome = () => {
  const dispatch = useDispatch();
  const { monitorias } = useSelector((state) => state.monitorias);
  const { monitors } = useSelector((state) => state.monitors);

  useEffect(() => {
    dispatch(listMonitoriaAsync());
    dispatch(listMonitorAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  monitorias.map((moni) =>
    monitors.map((mon) =>
      moni.monitorSelect === mon.id
        ? (moni.monitornombre = mon.nombres + ' ' + mon.apellidos)
        : null
    )
  );

  return (
    <div className='text-white w-full '>
      <h2 className='text-center uppercase  font-bold text-4xl lg:text-6xl text-white mb-5 p-5'>
        Monitorias
      </h2>
      <NavbarMentori />

      <div className='mx-2 lg:mx-5 bg-white text-black p-2 lg:p-5 rounded-lg '>
        <div className='flex flex-wrap justify-center'>
          <ul className='w-full flex gap-5'>
            <li className='w-3/12 text-center border-b-2 border-green-700  font-bold text-xs lg:text-base'>
              Materia
            </li>
            <li className='w-3/12 text-center border-b-2 border-green-700 font-bold text-xs lg:text-base '>
              Monitor
            </li>
            <li className='w-2/12 text-center border-b-2 border-green-700 font-bold  text-xs lg:text-base'>
              Salon
            </li>
            <li className='w-2/12 text-center border-b-2 border-green-700  font-bold text-xs lg:text-base'>
              Fecha
            </li>
            <li className='w-2/12 text-center border-b-2 border-green-700  font-bold text-xs lg:text-base'>
              Hora
            </li>
          </ul>
          {monitorias.length === 0 && (
            <h1 className='text-green-500  w-full h-56 flex gap-5 justify-center items-center my-5 '>
              <FontAwesomeIcon
                className='text-3xl lg:text-6xl'
                icon={faCircleExclamation}
              />
              <span className='font-bold text-3xl lg:text-6xl'>
                No hay Monitorias
              </span>
            </h1>
          )}
          {monitorias.map((monitoria) => (
            <ul key={monitoria.idMonitoria} className='w-full flex my-3 gap-5'>
              <li className='w-3/12 lg:text-center border-b-2 border-green-200 text-xs lg:text-base '>
                {monitoria.materia}
              </li>
              <li
                data-tip
                data-for={monitoria.idMonitoria}
                className='w-3/12 lg:text-center border-b-2 border-green-200 relative cursor-pointer  hover:text-green-600 hover:font-bold text-xs lg:text-base'
              >
                {monitors.map((monitor) =>
                  monitoria.monitorSelect === monitor.id ? (
                    <div key={monitor.id}>
                      {monitor.nombres} {monitor.apellidos}
                      <ReactTooltip
                        id={monitoria.idMonitoria}
                        place='bottom'
                        type='success'
                      >
                        <section
                          key={monitor.cedula}
                          className=' px-10  flex flex-col items-center bg-slate-50 hover:border-2 hover:border-green-700 text-black shadow-2xl rounded-xl py-3  '
                        >
                          <img
                            className='w-40 h-40 rounded-full object-cover my-5  mx-auto border-4 border-green-700 '
                            src={monitor.foto1}
                            alt=''
                          />
                          <h3 className='text-sm mt-2'>{monitor.nombres}</h3>
                          <h3 className='text-2xl font-bold mt-2'>
                            {monitor.apellidos}
                          </h3>
                          <p className='text-md text-green-700 mt-2'>
                            {monitor.programaAcademico}
                          </p>
                          <p className='text-md text-green-700 mt-2'>
                            {' '}
                            Semestre {monitor.semestre}{' '}
                          </p>
                        </section>
                      </ReactTooltip>
                    </div>
                  ) : (
                    ''
                  )
                )}
              </li>

              <li className='w-2/12 text-center border-b-2 border-green-200 text-xs lg:text-base '>
                {monitoria.salon}
              </li>
              <li className='w-2/12  text-center border-b-2 border-green-200 text-xs lg:text-base '>
                {monitoria.fecha}
              </li>
              <li className='w-2/12 text-center border-b-2 border-green-200 text-xs lg:text-base '>
                {monitoria.hora}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentoriHome;
