import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../Hooks/UseForm';
import {
  findMonitoriasSync,
  listMonitoriaAsync,
} from '../../Redux/Actions/actionMonitoria';

const NavbarMentori = () => {
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    busqueda: '',
  });

  useEffect(() => {
    dispatch(listMonitoriaAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.busqueda !== '') {
      dispatch(findMonitoriasSync(values.busqueda));
    } else {
      dispatch(listMonitoriaAsync());
    }
  };

  return (
    <div className='w-full my-5 flex justify-center items-center'>
      <form
        className='w-full lg:w-4/6 flex flex-col lg:flex-row gap-5 justify-center items-center'
        onSubmit={handleSubmit}
      >
        <input
          name='busqueda'
          type='text'
          className='text-black w-2/3 rounded-lg border-2 border-gray-400 px-5 '
          onChange={handleInputChange}
          placeholder='Puedes buscar por materia, monitor, salon, Fecha o Hora'
        />
        <button
          className='w-1/3 bg-green-600 hover:bg-green-800 text-white rounded-lg'
          type='submit'
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default NavbarMentori;
