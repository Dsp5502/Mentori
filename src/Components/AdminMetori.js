import React from 'react';
import CreateMentor from './AdminMentori/CreateMentor';
import CreateMentori from './AdminMentori/CreateMentori';

const AdminMetori = () => {
  return (
    <div className='w-full  px-10 flex flex-col lg:flex-row gap-5'>
      <CreateMentor />
      <CreateMentori />
    </div>
  );
};

export default AdminMetori;
