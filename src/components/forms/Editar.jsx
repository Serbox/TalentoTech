//import Swal from "sweetalert2";

const Editar = () => {

  return (

                    <form action="/update" method="POST">
                      <div className="container text-left p-0">
                        <div className="d-flex flex-row justify-content-center w-100 h-100">
                          
                          <div className="col p-3 ">
                            <div className="border w-28 border-spacing-24 border-blue-950 mb-2"></div>
                            <div className="row m-0 d-flex flex-row justify-content-between py-2">
                              <div className="col d-flex flex-column justify-content-center gap-1">
                              <label for="website-admin" className="block mb-2 text-base text-gray-700 font-medium">Nombres y Apellidos:</label>
                                <div className="flex">
                                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                    </svg>
                                  </span>
                                  <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  " placeholder="elonmusk"/>
                                </div>
                              </div>
                            </div>
                            <div className="row m-0 d-flex flex-row justify-content-between">
                              <div className="col d-flex flex-column justify-content-center p-0">
                                <label for="number-input" className="block mb-2 text-base text-gray-700 font-medium">Cedula :</label>
                                <div className="flex">
                                  <span className="inline-flex items-center px-1 w-32 text-base text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                                      <select className="bg-transparent border-transparent text-gray-900 text-sm rounded-e-lg focus:ring-blue-500 block w-full p-2.5">
                                          <option value="Cedula" selected>CC</option>
                                          <option value="Tarjeta de identidad">TI</option>
                                      </select>
                                  </span>
                                  <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-blue-400 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="90210" required />
                                </div>
                              </div>
                              <div className="col d-flex flex-column justify-content-center gap-1">
                                <label for="zip-input" className="block mb-2 text-base text-gray-700 font-medium">Fecha de nacimiento :</label>
                                <div className="relative max-w-sm">
                                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                  </div>
                                  <input datepicker type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Select date"/>
                                </div>
                              </div>
                            </div>
                            <div className="row m-0 d-flex flex-row justify-content-between py-2">
                              <div className="col d-flex flex-column justify-content-center gap-1">
                              <label for="input-group-1" className="block mb-1 text-base text-gray-700 font-medium">Correo :</label>
                              <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                  </svg>
                                </div>
                                <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " placeholder="name@flowbite.com"/>
                              </div>
                              </div>
                              <div className="col d-flex flex-column justify-content-center gap-1">
                                <label for="phone-input" className="block mb-1 text-base text-gray-700 font-medium">Numero de telefono :</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                                        </svg>
                                    </div>
                                    <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                                </div>    
                              </div>
                            </div>
                            <div className="row m-0 d-flex flex-row justify-content-between py-2">
                              <div className="col d-flex flex-column justify-content-center gap-1">
                                <div className="mb-1">
                                    <label for="password" className="block mb-1 text-base text-gray-700 font-medium">Contrasena :</label>
                                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
                                </div> 
                              </div>
                              <div className="col d-flex flex-column justify-content-center gap-1">
                                <div className="mb-1">
                                    <label for="password" className="block mb-1 text-base text-gray-700 font-medium">Confirmar contrasena:</label>
                                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
                                </div> 
                              </div>
                            </div>
                            <div className="mb-1 d-flex flex-column justify-content-between gap-2">
                              <h6 className=" block mx-2 text-base text-gray-700 font-medium">Rol</h6>
                                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                        <div className="flex items-center ps-3">
                                            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label for="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Administrador </label>
                                        </div>
                                    </li>
                                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                        <div className="flex items-center ps-3">
                                            <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                            <label for="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Docente</label>
                                        </div>
                                    </li>
                                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                        <div className="flex items-center ps-3">
                                            <input id="horizontal-list-radio-military" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
                                            <label for="horizontal-list-radio-military" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Estudiante</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                              <div className="d-flex flex-row justify-content-evenly pt-2">
                                <button type="submit" className="btn bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-700 rounded">Actualizar</button>
                                <label for="btn-modal" className="btn bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-red-900 hover:border-red-700 rounded">Cancelar</label>
                              </div>
                          </div>
                        </div>
                      </div>
                    </form>
  );
};

export default Editar;
