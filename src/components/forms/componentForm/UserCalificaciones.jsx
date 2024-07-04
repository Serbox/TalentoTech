import React from "react";
import PropTypes from "prop-types";

const UserForm = ({
  formData,
  handleChange,
  handleSubmit,
  errors,
  titleData,
  btnTitle,
}) => {
  return (
    <form onSubmit={handleSubmit} className="w-100 h-100">
      <div className="container text-left p-0 w-100 h-100">
        <div className="d-flex flex-col justify-content-center w-100 h-100">
          <div className="flex flex-col p-3 content-between w-100 h-100 shadow-sm">
            <h2 className="font-extrabold text-3xl text-blue-900 text-left rounded-md">
              {titleData}
            </h2>
            <div className="border w-28 border-spacing-24 border-blue-950 mb-2 gap-2"></div>
            {/* Nombre */}
            <div className="col d-flex flex-column justify-content-center pb-2">
              <label
                className="block text-base font-medium text-gray-400"
              >
                Nombre Actividad :
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="nombreActividad"
                  name="nombreActividad"
                  value={formData.nombreActividad}
                  onChange={handleChange}
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                  placeholder="Ingrese el nombre de la actividad"
                  required
                />
              </div>
              {errors.nombre && (
                <p className="text-red-500 text-sm">{errors.nombreActividad}</p>
              )}
            </div>
            {/*descripcion*/}
            <div className="col d-flex flex-column justify-content-center gap-1 pb-2">
              <label
                className="block text-base font-medium text-gray-400"
              >
                Descripcion Actividad:
              </label>
              <div className="flex w-100 h-100">
                <textarea
                  rows="8"
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Ingrese los requerimientos"
                  required
                />
              </div>
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

UserForm.propTypes = {
  formData: PropTypes.shape({
    nombreActividad: PropTypes.string,
    descripcion: PropTypes.string,
    // rol: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default UserForm;
