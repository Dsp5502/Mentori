import { faChevronLeft, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const NavMonitor = () => {
  return (
    <div className='text-white w-10/12 mx-auto p-5 flex justify-between'>
      <Link
        to='/admin'
        className='flex items-center gap-2 hover:text-green-700'
      >
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>Volver</span>
      </Link>
      <Link
        to='/admin/allMonitors'
        className='flex items-center gap-2 hover:text-green-700'
      >
        <FontAwesomeIcon icon={faUsers} />
        Monitores
      </Link>
    </div>
  );
};

export default NavMonitor;
