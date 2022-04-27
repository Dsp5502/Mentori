import React from 'react';
import { FileUp } from '../Helpers/FileUp';
import { useForm } from '../Hooks/UseForm';

const AddMonitor = () => {
  const [values, handleInputChange, reset] = useForm({
    nombres: '',
    apellidos: '',
    programaAcadémico: '',
    semestre: '',
    cédula: '',
    celular: '',
    email: '',
    foto1: '',
  });

  const {
    nombres,
    apellidos,
    programaAcadémico,
    semestre,
    cedula,
    celular,
    email,
  } = values;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);

    FileUp(file)
      .then((resp) => {
        values.foto1 = resp;
        console.log(resp);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    reset();
  };

  return (
    <div className=' w-full px-5 text-white'>
      <h2 className='text-center uppercase py-5 text-5xl'>Agrega Monitor</h2>
      <form onSubmit={handleSubmit} className='flex flex-col w-8/12 mx-auto'>
        <label>Nombres:</label>
        <input
          type='text'
          name='nombres'
          onChange={handleInputChange}
          value={nombres}
          className='text-black px-2'
        />
        <label>Apellidos:</label>
        <input
          type='text'
          name='apellidos'
          onChange={handleInputChange}
          value={apellidos}
          className='text-black px-2'
        />
        <label>Programa Académico:</label>
        <input
          type='text'
          name='programaAcadémico'
          onChange={handleInputChange}
          value={programaAcadémico}
          className='text-black px-2'
        />
        <label>Semestre:</label>
        <select
          name='semestre'
          value={semestre}
          onChange={handleInputChange}
          className='text-black px-2'
        >
          <option disabled>Elige Semestre</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <label>Cédula:</label>
        <input
          type='number'
          name='cédula'
          onChange={handleInputChange}
          value={cedula}
          className='text-black px-2'
        />
        <label>Celular:</label>
        <input
          type='text'
          name='celular'
          onChange={handleInputChange}
          value={celular}
          className='text-black px-2'
        />
        <label>Email:</label>
        <input
          type='text'
          name='email'
          onChange={handleInputChange}
          value={email}
          className='text-black px-2'
        />
        <label>Foto:</label>
        <input type='file' name='foto1' onChange={handleFileChange} />

        <button
          type='submit'
          className='bg-blue-500 text-white py-2 px-4 rounded'
        >
          Agregar Monitor
        </button>
      </form>
    </div>
  );
};

export default AddMonitor;
