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
      <label for="btn-modal" className="lbl-modal">
        {Title}
      </label>
      <div className='background_modal fixed inset-0 flex justify-center items-center'>
        <input type="checkbox" id="btn-modal"/>
        <div className='modale bg-white rounded flex flex-col justify-center items-center max-w-4xl mt-15 mb-15 rounded-l-xl'>
          {Form}
        </div>

      </div>
    </>
  );
}

export default modal
