import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../Hooks/UseForm';
import {
  findMonitorSync,
  listMonitorAsync,
} from '../../Redux/Actions/actionMonitor';

const NavSearch = () => {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    busqueda: '',
  });

  useEffect(() => {
    dispatch(listMonitorAsync());
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.busqueda !== '') {
      dispatch(findMonitorSync(values.busqueda));
    } else {
      dispatch(listMonitorAsync());
    }
  };

  return (
    <div className='w-full my-5 flex justify-center items-center'>
      <form
        className='w-5/6 flex gap-5 justify-center items-center'
        onSubmit={handleSubmit}
      >
        <input
          name='busqueda'
          type='text'
          className='text-black w-2/3 rounded-lg border-2 border-gray-400 px-5 '
          onChange={handleInputChange}
          placeholder='Puedes buscar por cualquier dato del Monitor'
        />
        <button
          className='w-1/3 bg-green-500 rounded-lg text-white'
          type='submit'
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default NavSearch;
