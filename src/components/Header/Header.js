import React, { useState } from 'react'
import './Header.css'
import img1 from '../../IMG/logo_talento.svg'
import img2 from '../../IMG/tec-presidencia.svg'
import LogoTalento from '../../IMG/TalentoTech.png'
import { Link } from 'react-router-dom'
const Header = () => {
    let [isOpen, setisOpen] = useState(false)
    let [isOpenUser, setisOpenUser] = useState(false)
    let [isOpenOptions, setisOpenOptions] = useState(false)


  return (
    <>
    <header>
        <nav className='shadow-md w-full fixed top-0 left-0  z-10'>
            <div className='md:px-10 py-1 px-7 md:flex justify-between items-center bg-blue-900'>
            {/*Logo Aqui*/}
                <Link to={'/'} className='flex text-2xl cursor-pointer items-center gap-2'>
                    <img src={LogoTalento} alt="..." className='w-36 sm:w-full' />    
                </Link>  
            {/*Icono Muni Desplegable*/}
                <div onClick={()=> setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-1 cursor-pointer md:hidden'>
                    {
                        isOpen ? <i class="bi bi-list text-white text-2xl"></i> : <i class="bi bi-x-lg text-white text-xl"></i>
                    }
                </div>
            {/*Nav Link*/}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${!isOpen ? 'top-12':'top-[-490px]'}`}>
                    <li className='font-semibold my-6 md:my-0 md:ml-8'>
                        <a href='/' className='block font-semibold text-white text-lg decoration-transparent p-0 hover:text-xl hover:font-bold'><i className="bi bi-house-fill px-2"> </i>Inicio</a>
                    </li>
                    <li className='relative flex flex-col font-semibold my-6 md:my-0 md:ml-8 hover:bg-blue-950 p-2 rounded-xl hover:shadow'>
                        <a href='#' onClick={() => setisOpenOptions((prev) => !prev)} className='w-full flex justify-between font-semibold text-white text-lg decoration-transparent p-0 gap-2 items-center px-3 hover:text-lg hover:font-bold tracking-wider'>
                            Opciones
                            {!isOpenOptions ?(
                                <i className="bi bi-grid-fill px-2"></i>
                            ):(
                                <i class="bi bi-ui-checks-grid px-2 "></i>
                            )}
                            {isOpenOptions && (
                                <div className='bg-blue-950 absolute top-14 left-0 flex flex-col items-start rounded-lg p-2 w-full shadow-black'>
                                    <div className='bg-slate-50 w-full rounded-sm text-center mt-1 hover:bg-blue-950'>
                                        <a href='/users' className='text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold  '><i class="bi bi-people-fill px-1"></i>Usuario</a>
                                    </div>
                                    <div className='bg-slate-50 w-full rounded-sm text-center mt-1 hover:bg-blue-950'>
                                        <a href='/asistencia' className='text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold  '><i class="bi bi-calendar-event-fill px-1"></i>Sesiones</a>
                                    </div>
                                    <div className='bg-slate-50 w-full rounded-sm text-center mt-1 hover:bg-blue-950'>
                                        <a href='/' className='text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold  '><i class="bi bi-newspaper px-1"></i>Noticias</a>
                                    </div>
                                    <div className='bg-slate-50 w-full rounded-sm text-center mt-1 hover:bg-blue-950'>
                                        <a href='/' className='text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold  '><i class="bi bi-inboxes-fill px-1"></i>Bootcamp </a>
                                    </div>
                                </div>
                            )}
                        </a>
                    </li>
                    <li className='font-semibold my-6 md:my-0 md:ml-8'>
                        <a href='/' className='block font-semibold text-white text-lg decoration-transparent p-0 hover:text-xl hover:font-bold'><i className="bi bi-question-circle-fill px-2"> </i>Ayuda</a>
                    </li>
                    <li className=" relative flex flex-col items-center font-semibold my-7 md:my-0 md:ml-8 bg-blue-950  border-b-4  border-sky-950 p-2 rounded-xl shadow">
                            <a href='#' onClick={() => setisOpenUser((prev) => !prev)} className='w-full flex justify-between font-semibold text-white text-lg decoration-transparent p-0 gap-2 items-center px-3 hover:text-lg hover:font-semibold tracking-wider'>
                                <div className='rounded-full bg-gray-400 p-1 text-sm hover:text-sm hover:font-bold'>
                                    SM
                                </div>
                                Sylvanas
                                {!isOpenUser ?(
                                    <i class="bi bi-caret-down-fill"></i>
                                ) :(
                                    <i class="bi bi-caret-up-fill"></i>
                                )}
                                {isOpenUser &&(
                                    <div className='bg-blue-950 absolute top-14 left-0 flex flex-col items-start rounded-lg p-2 w-full shadow-black'>
                                        <div className='flex flex-row w-full h-full items-center bg-slate-50 hover:bg-slate-200 rounded-lg p-1'>
                                            <div className='flex flex-col px-2 w-full '>
                                                    <h4 className='text-gray-700 text-xl font-bold p-0 m-0 text-center'>Sylvanas</h4>
                                                    <h4 className='text-gray-700 text-xl font-bold p-0 m-0 text-center'>Hayase</h4>
                                                <div className='text-base text-center text-sky-700 font-bold'>
                                                    Sylvanas@
                                                </div>

                                            </div>
                                            <div className='bg-gray-300 rounded-full p-0 mx-2 border-2 border-gray-400 shadow'>
                                                <h5 className='p-2 text-center font-medium'>SM</h5>
                                            </div>
                                        </div>
                                        <div className='bg-slate-50 w-full rounded-sm text-center mt-1 hover:bg-blue-950'>
                                            <a href='/' className='text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold  '><i class="bi bi-nut-fill mx-1"></i >Config. cuenta</a>
                                        </div>
                                        <div className='bg-slate-50 w-full rounded-sm text-center mt-1 hover:bg-red-600 '>
                                            <Link to={'/login'} className='text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold  '><i class="bi bi-door-open text-xl"></i> Cerrar Sesiòn</Link>
                                        </div>
                                    </div>
                                )}
                            </a>
                    </li>
                </ul>
            </div>
        </nav>
         {/*<div className='imgs'>
            <Link to={"/"}><img className='img' src={img1}/></Link>
            <a href='#'><img className='img' src={img2}></img></a>
         </div>
         <div className='nav-bar'>
            <nav className='options'>
                <ul>
                    <li className='dropdown'>
                        <Link to={"/"} href='#'>Inicio</Link>
                        <div className='dropdown-content'>
                            <a href='#'>Bootcamps</a>
                        </div>
                    </li>
                    <li className='dropdown'>
                        <a href='#'>Opciones</a>
                        <div className='dropdown-content'>
                            <a href='#'>Hackathons</a>
                            <a href='#'>Job Connections</a>
                            <a href='#'>Marketplace</a>
                            <Link to={"/asistencia"}>Crud Asistencia</Link>
                        </div>
                    </li>
                    <li className='dropdown'>
                        <a href='#'>Ayuda</a>
                        <div className='dropdown-content'>
                            <a href='#'>Manual de Usuario</a>
                            <a href='#'>Preguntas Frecuentes</a>
                        </div>
                    </li>
                    <li className='dropdown user'>
                        <a href='#'>JR</a>
                        <div className='dropdown-content user-dropdown'>
                            <p>JUAN SEBASTIÁN HERNÁNDEZ REYES</p>
                            <hr/>
                            <p>juanserbox@gmail.com</p>
                            <div className='user-info'>
                                <span>🏆 0</span>
                            </div>
                            <button className='logout-button'>Salir</button>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>*/}
    </header>
    </>
  )
}

export default Header