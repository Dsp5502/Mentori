import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/UseForm';
import { updateMonitoriaAsync } from '../../Redux/Actions/actionMonitoria';

const FormUpdateMentoria = ({ setModalUpdate, monitoriaUpdate }) => {
  const dispatch = useDispatch();
  const { monitors } = useSelector((state) => state.monitors);
  const [values, handleInputChange] = useForm({
    materia: monitoriaUpdate.materia,
    monitorSelect: monitoriaUpdate.monitorSelect,
    salon: monitoriaUpdate.salon,
    fecha: monitoriaUpdate.fecha,
    hora: monitoriaUpdate.hora,
    id: monitoriaUpdate.idMonitoria,
  });

  const { materia, monitorSelect, salon, fecha, hora } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(updateMonitoriaAsync(values));
    setModalUpdate(false);
  };

  return (
    <>
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
          className='bg-green-700 text-white py-2 px-4 rounded'
        >
          Agregar Monitoria
        </button>
      </form>
    </>
  );
};

export default FormUpdateMentoria;
