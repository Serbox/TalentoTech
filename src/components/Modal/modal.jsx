import React, { useState } from 'react'
import './modal.css';
import { Button } from 'bootstrap';

function modal({Form, Title}) {
  return (
    /*<div className="content_editar_usuario">
      <input type="checkbox" id="btn-modal" />
      <label for="btn-modal" className="lbl-modal">
        {Title}
      </label>
      <div className="modale">
        <div className="contenedor_editar">
              <div className="contenido_editar p-2">
                {Form}
              </div>
        </div>
      </div>
    </div>*/
    <>
      <button className='bg-gray-400 rounded-sm text-white font-bold'>
        {Title}
      </button>
      <div className='background_modal fixed inset-0 flex justify-center items-center'>
        <div className='modal bg-white rounded flex flex-col justify-center items-center'>
          {Form}
        </div>

      </div>
    </>
  );
}

export default modal
