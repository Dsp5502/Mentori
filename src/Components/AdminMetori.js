import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutAsync } from '../Redux/Actions/actionLogin';

const AdminMetori = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutAsync());
  };

  return (
    <div>
      <button className='text-white' onClick={handleLogOut}>
        logOut
      </button>
    </div>
  );
};

export default AdminMetori;
