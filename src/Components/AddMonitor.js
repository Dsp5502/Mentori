import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FileUp } from '../Helpers/FileUp';
import { useForm } from '../Hooks/UseForm';
import { addMonitorAsync } from '../Redux/Actions/actionMonitor';
import NavMonitor from './AdminMentori/NavMonitor';
import uuid from 'react-uuid';

const AddMonitor = () => {
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(false);
  const [values, handleInputChange, reset] = useForm({
    nombres: '',
    apellidos: '',
    programaAcademico: '',
    semestre: '',
    cedula: '',
    celular: '',
    email: '',
    foto1: '',
    id: uuid(),
  });

  const {
    nombres,
    apellidos,
    programaAcademico,
    semestre,
    cedula,
    celular,
    email,
  } = values;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSpinner(true);

    FileUp(file)
      .then((resp) => {
        values.foto1 = resp;
        console.log(resp);
        if (resp) {
          setSpinner(false);
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(addMonitorAsync(values));
    reset();
  };

  return (
    <>
      <NavMonitor />
      <div className=' flex flex-col w-7/12 mx-auto p-5  my-5 bg-white rounded-xl'>
        <h2 className='text-center uppercase  font-bold text-4xl text-black p-5'>
          Agrega Monitor
        </h2>
        <form onSubmit={handleSubmit} className='flex flex-col w-8/12 mx-auto'>
          <label className='uppercase mb-2'>Nombres:</label>
          <input
            type='text'
            name='nombres'
            onChange={handleInputChange}
            value={nombres}
            placeholder='Ingresa nombre'
            className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 '
          />
          <label className='uppercase mb-2'>Apellidos:</label>
          <input
            type='text'
            name='apellidos'
            onChange={handleInputChange}
            value={apellidos}
            placeholder='Ingresa apellidos'
            className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 '
          />
          <label className='uppercase mb-2'>Programa Académico:</label>
          <input
            type='text'
            name='programaAcademico'
            onChange={handleInputChange}
            value={programaAcademico}
            placeholder='Ingresa programa académico'
            className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 '
          />
          <label className='uppercase mb-2'>Semestre:</label>
          <select
            name='semestre'
            value={semestre}
            onChange={handleInputChange}
            className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 bg-transparent '
          >
            <option className='bg-white ' defaultValue='0'>
              Elige Semestre
            </option>
            <option className='bg-white '>1</option>
            <option className='bg-white '>2</option>
            <option className='bg-white '>3</option>
            <option className='bg-white '>4</option>
            <option className='bg-white '>5</option>
            <option className='bg-white '>7</option>
            <option className='bg-white '>8</option>
            <option className='bg-white '>9</option>
            <option className='bg-white '>10</option>
          </select>
          <label className='uppercase mb-2'>Cédula:</label>
          <input
            type='number'
            name='cedula'
            onChange={handleInputChange}
            value={cedula}
            placeholder='Ingresa cédula'
            className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 '
          />
          <label className='uppercase mb-2'>Celular:</label>
          <input
            type='number'
            name='celular'
            onChange={handleInputChange}
            value={celular}
            placeholder='Ingresa celular'
            className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 '
          />
          <label className='uppercase mb-2'>Email:</label>
          <input
            type='text'
            name='email'
            onChange={handleInputChange}
            value={email}
            placeholder='Ingresa email'
            className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 '
          />
          <label
            htmlFor='imafoto'
            className=' w-1/3 flex items-center gap-2 bg-green-600  hover:bg-green-800 mb-5 text-white font-bold py-2 px-4 rounded uppercase'
          >
            <FontAwesomeIcon icon={faFileUpload} />
            <span>Subir Foto</span>
          </label>
          <input
            type='file'
            id='imafoto'
            name='foto1'
            onChange={handleFileChange}
            className='hidden'
          />

          <button
            type='submit'
            className='bg-blue-500 text-white py-2 px-4 rounded'
          >
            Agregar Monitor
          </button>
          {spinner && (
            <div className='w-full h-screen bg-black outline-none bg-opacity-50 fixed  top-0 left-0 flex justify-center items-center '>
              <div className='spinner'>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default AddMonitor;
