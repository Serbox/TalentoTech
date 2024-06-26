import React from 'react'
import './modal.css';
function modal({Form, Title}) {
  return (
    <div className="content_editar_usuario">
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
    </div>
  )
}

export default modal
