import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listMonitorAsync } from '../Redux/Actions/actionMonitor';
import CardMonitor from './OurMonitor/CardMonitor';

const OurMonitor = () => {
  const { monitors } = useSelector((state) => state.monitors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMonitorAsync());
  }, []);

  console.log(monitors);

  return (
    <div className='w-full  p-5 bg-white '>
      <h2 className='text-center uppercase  font-bold text-4xl  p-5'>
        Nuestros Monitores
      </h2>
      <CardMonitor monitors={monitors} />
    </div>
  );
};

export default OurMonitor;
