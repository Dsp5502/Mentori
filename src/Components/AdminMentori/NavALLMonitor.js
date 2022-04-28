import { faChevronLeft, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const NavALLMonitor = () => {
  return (
    <div className='text-white w-10/12 mx-auto py-5 flex justify-between'>
      <Link to={-1} className='flex items-center gap-2 hover:text-green-700'>
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>Volver</span>
      </Link>
    </div>
  );
};

export default NavALLMonitor;
