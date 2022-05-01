import React from 'react';

const CardMonitor = ({ monitors }) => {
  return (
    <div className='flex flex-col lg:flex-row gap-5'>
      {monitors.map((monitor) => (
        <section
          key={monitor.cedula}
          className='w-full lg:w-1/4   flex flex-col items-center bg-slate-50 hover:border-2 hover:border-green-700 text-black shadow-2xl rounded-xl py-3'
        >
          <img
            className='w-40 h-40 rounded-full object-cover my-5  mx-auto border-4 border-green-700 '
            src={monitor.foto1}
            alt=''
          />
          <h3 className='text-sm mt-2'>{monitor.nombres}</h3>
          <h3 className='text-2xl font-bold mt-2'>{monitor.apellidos}</h3>
          <p className='text-md text-green-700 mt-2'>
            {monitor.programaAcademico}
          </p>
          <p className='text-md text-green-700 mt-2'>
            {' '}
            Semestre {monitor.semestre}{' '}
          </p>
        </section>
      ))}
    </div>
  );
};

export default CardMonitor;
