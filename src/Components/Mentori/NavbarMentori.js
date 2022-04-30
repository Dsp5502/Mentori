import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../Hooks/UseForm';
import {
  findMonitoriasSync,
  listMonitoriaAsync,
} from '../../Redux/Actions/actionMonitoria';

const NavbarMentori = ({ monitors, monitorias }) => {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    busqueda: '',
  });

  useEffect(() => {
    if (values.busqueda) {
      dispatch(listMonitoriaAsync());
    }
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.busqueda !== '') {
      dispatch(findMonitoriasSync(values.busqueda));
    } else {
      dispatch(listMonitoriaAsync());
    }

    reset();
  };

  return (
    <div className='my-5 flex justify-center'>
      <form onSubmit={handleSubmit}>
        <input
          name='busqueda'
          type='text'
          className='text-black'
          onChange={handleInputChange}
        />
        <button type='submit'>Buscar</button>
      </form>
    </div>
  );
};

export default NavbarMentori;
