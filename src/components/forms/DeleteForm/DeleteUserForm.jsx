import React from 'react';
import PropTypes from 'prop-types';

const DeleteUserForm = ({ formData, handleChange, handleSubmit, errors, titleData, btnTitle }) => {
  return (
    <form onSubmit={handleSubmit} className="w-100 h-100">
      <div className="container text-left p-0 w-100 h-100">
        <div className="d-flex flex-col justify-content-center w-100 h-100">
          <div className="flex flex-col p-3 content-between w-100 h-100 shadow-sm">
            <h2 className="font-extrabold text-3xl text-blue-900 text-left rounded-md">
              {titleData}
            </h2>
            <div className="border w-28 border-spacing-24 border-blue-950 mb-2 gap-2"></div>
            {/* Cedula */}
            <div className="col d-flex flex-column justify-content-center pb-2">
              <label
                htmlFor="cedula"
                className="block text-base font-medium text-gray-400"
              >
                Cedula Usuario:
              </label>
              <div className="flex">
                <input
                  type="number"
                  id="cedula"
                  name="cedula"
                  value={formData.cedula}
                  onChange={handleChange}
                  className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
                  placeholder="1014229886"
                />
              </div>
              {errors.cedula && (
                <p className="text-red-500 text-sm">{errors.cedula}</p>
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

DeleteUserForm.propTypes = {
  formData: PropTypes.shape({
    cedula: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  titleData: PropTypes.string.isRequired,
  btnTitle: PropTypes.string.isRequired,
};

export default DeleteUserForm;