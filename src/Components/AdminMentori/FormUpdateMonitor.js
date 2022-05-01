import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { FileUp } from '../../Helpers/FileUp';
import { useForm } from '../../Hooks/UseForm';
import { updateMonitorAsync } from '../../Redux/Actions/actionMonitor';

const FormUpdateMonitor = ({ monitorUpdate, setModalUpdate }) => {
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    nombres: monitorUpdate.nombres,
    apellidos: monitorUpdate.apellidos,
    cedula: monitorUpdate.cedula,
    celular: monitorUpdate.celular,
    email: monitorUpdate.email,
    programaAcademico: monitorUpdate.programaAcademico,
    semestre: monitorUpdate.semestre,
    foto1: monitorUpdate.foto1,
    id: monitorUpdate.id,
  });

  const {
    nombres,
    apellidos,
    cedula,
    email,
    programaAcademico,
    semestre,
    celular,
  } = values;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateMonitorAsync(values));
    setModalUpdate(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    FileUp(file)
      .then((resp) => {
        values.foto1 = resp;
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col w-11/12  py-5 mx-auto '
      >
        <div className='w-full flex justify-center items-center  '>
          <div className='w-1/2'>
            <label className='uppercase mb-2 '>Nombres:</label>
            <input
              type='text'
              name='nombres'
              onChange={handleInputChange}
              value={nombres}
              placeholder='Ingresa nombre'
              className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 '
            />
          </div>
          <div className='w-1/2'>
            <label className='uppercase mb-2 '>Apellidos:</label>
            <input
              type='text'
              name='apellidos'
              onChange={handleInputChange}
              value={apellidos}
              placeholder='Ingresa apellidos'
              className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 '
            />
          </div>
        </div>
        <label className='uppercase mb-2'>Programa Académico:</label>
        <input
          type='text'
          name='programaAcademico'
          onChange={handleInputChange}
          value={programaAcademico}
          placeholder='Ingresa programa académico'
          className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 '
        />
        <div className='w-full flex '>
          <div className='w-1/2'>
            <label className='uppercase mb-2 '>Semestre:</label>
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
          </div>
          <div className='w-1/2  flex '>
            <label className=' uppercase mb-2 '>Cédula:</label>
            <input
              type='number'
              name='cedula'
              onChange={handleInputChange}
              value={cedula}
              placeholder='Ingresa cédula'
              className=' rounded-sm px-2 outline-none mb-5 border-b-2 border-green-100 '
            />
          </div>
        </div>
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
          <span>Cambiar Foto</span>
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
          Editar Monitor
        </button>
      </form>
    </>
  );
};

export default FormUpdateMonitor;
