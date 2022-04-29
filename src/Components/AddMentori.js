import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { useForm } from '../Hooks/UseForm';
import { listMonitorAsync } from '../Redux/Actions/actionMonitor';
import { addMonitoriaAsync } from '../Redux/Actions/actionMonitoria';
import NavMonitori from './AdminMentori/Monitori/NavMonitori';

const AddMentori = () => {
  const { monitors } = useSelector((state) => state.monitors);
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    materia: '',
    monitorSelect: '',
    fecha: '',
    hora: '',
    salon: '',
    idMonitoria: uuid(),
  });

  useEffect(() => {
    dispatch(listMonitorAsync());
  }, []);

  const { materia, monitorSelect, fecha, hora, salon } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(addMonitoriaAsync(values));
    reset();
  };

  return (
    <>
      <NavMonitori />
      <div className=' flex flex-col w-7/12 mx-auto p-5  my-5 bg-white rounded-xl'>
        <h2 className='text-center uppercase  font-bold text-4xl text-black p-5'>
          Agrega Monitoria
        </h2>
        <form onSubmit={handleSubmit} className='flex flex-col w-8/12 mx-auto'>
          <label className='uppercase mb-2'>Materia:</label>
          <input
            type='text'
            name='materia'
            onChange={handleInputChange}
            value={materia}
            placeholder='Ingresa nombre'
            className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 '
          />
          <select
            name='monitorSelect'
            value={monitorSelect}
            onChange={handleInputChange}
            className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 bg-transparent '
          >
            <option className='bg-white ' defaultValue='0'>
              Elige monitor
            </option>
            {monitors.map((monitor) => (
              <option key={monitor.id} value={monitor.id}>
                {monitor.nombres} {monitor.apellidos} - {''}
                {monitor.programaAcademico}
              </option>
            ))}
          </select>
          <label className='uppercase mb-2'>Fecha:</label>
          <input
            type='date'
            name='fecha'
            onChange={handleInputChange}
            value={fecha}
            placeholder='Ingresa monitor'
            className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 '
          />
          <label className='uppercase mb-2'>Hora:</label>
          <input
            type='time'
            name='hora'
            onChange={handleInputChange}
            value={hora}
            placeholder='Ingresa hora'
            className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 '
          />
          <label className='uppercase mb-2'>Salón:</label>
          <input
            type='text'
            name='salon'
            onChange={handleInputChange}
            value={salon}
            placeholder='Ingresa salon'
            className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 '
          />

          <button
            type='submit'
            className='bg-blue-500 text-white py-2 px-4 rounded'
          >
            Agregar Monitor
          </button>
        </form>
      </div>
    </>
  );
};

export default AddMentori;
