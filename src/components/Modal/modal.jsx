import React, { useState } from 'react'
import './modal.css';
import { Button } from 'bootstrap';

function modal({Form, Title}) {
  return (

    <>
      <button className='bg-gray-400 rounded-sm text-white font-bold'>
        {Title}
      </button>
      <div className='background_modal fixed inset-0 flex justify-center items-center'>
        <div className='bg-white rounded flex flex-col justify-center items-center max-w-4xl mt-15 mb-15 rounded-l-xl'>
          {Form}
        </div>

      </div>
    </>
  );
}

export default modal
