import React from "react";
import PropTypes from "prop-types";

const useSesionForm = ({
  formData,
  handleChange,
  handleSubmit,
  handleCancel,
  errors,
  titleData,
  btnTitle,
}) => {
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="container text-left p-0">
        <div className="d-flex flex-row justify-content-center w-100 h-100">
          <div className="col p-3">
            <h2 className="font-extrabold text-3xl text-blue-900 text-left rounded-md">
              {titleData}
            </h2>
            <div className="border w-28 border-spacing-24 border-blue-950 mb-2"></div>

            {/* Fecha */}
            <div className="row m-0 d-flex flex-row justify-content-between py-2">
              <div className="col d-flex flex-column justify-content-center gap-1">
                <label
                  htmlFor="date-input"
                  className="block mb-2 text-base text-gray-700 font-medium"
                >
                  Fecha :
                </label>
                <input
                  type="date"
                  id="date-input"
                  aria-describedby="helper-text-explanation"
                  value={formData.fecha}
                  onChange={handleChange}
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />

                {errors.fecha && (
                  <p className="text-red-500 text-sm">{errors.fecha}</p>
                )}
              </div>

              {/* Nombre */}
              <div className="col d-flex flex-column justify-content-center gap-1">
                <label
                  htmlFor="nombre"
                  className="block mb-2 text-base text-gray-700 font-medium"
                >
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                  placeholder="elonmusk"
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm">{errors.nombre}</p>
                )}
              </div>
            </div>

            <div className="row m-0 flex flex-row justify-center py-3 ">
              {/* Descripcion */}
              <div className="col d-flex flex-column justify-content-center gap-1 w-full">
                <label
                  htmlFor="descripcion"
                  className="block mb-2 text-base text-gray-700 font-medium"
                >
                  Descripcion:
                </label>
                <input
                  type="text"
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                  placeholder="breve descripcion de la sesion"
                />
                {errors.descripcion && (
                  <p className="text-red-500 text-sm">{errors.descripcion}</p>
                )}
              </div>
            </div>

            <div className="col d-flex flex-column justify-content-center gap-1 py-3">
              <label
                htmlFor="estado_sesion"
                className="block mb-2 text-base text-gray-700 font-medium"
              >
                Estado de la sesión:
              </label>
              <select 
                    name="estado_sesion" 
                    id="estado_sesion"
                    class="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                <option value="proximamente">Proximamente</option>
                <option value="activo">Activo</option>
                <option value="finalizado">Finalizado</option>
              </select>
              {errors.estado_sesion && (
                <p className="text-red-500 text-sm">{errors.estado_sesion}</p>
              )}
            </div>
            <div className="col d-flex flex-column justify-content-center gap-1 py-3">
              <label
                htmlFor="enlace"
                className="block mb-1 text-base text-gray-700 font-medium"
              >
                Enlace:
              </label>
              <input
                type="text"
                id="enlace"
                name="enlace"
                value={formData.enlace}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="meet"
              />
              {errors.enlace && (
                <p className="text-red-500 text-sm">{errors.enlace}</p>
              )}
            </div>
          <div className="d-flex flex-row justify-start pt-4 px-2">
              <button
                type="submit"
                className="absolute bottom-6 right-50 btn bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-700 rounded"
              >
                {btnTitle}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </form>
  );
};

useSesionForm.propTypes = {
  formData: PropTypes.shape({
    fecha: PropTypes.string,
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    enlace: PropTypes.string,
    
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default useSesionForm;
