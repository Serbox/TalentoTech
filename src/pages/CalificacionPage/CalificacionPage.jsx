import React, { useState } from 'react';
import "../../App.css";
import Container from 'react-bootstrap/Container';
import Header from "../../components/Header/Header";
import Actividades from "../../IMG/NumActividades.svg";
import EstAsistencia from "../../IMG/EstAsistencia.svg";
import DocAsistencia from "../../IMG/DocAsistencia.svg";
import EntActividades from "../../IMG/ActividadesEnt.svg";
import Profesor from "../../IMG/Profesor.svg";
import Estudiante from "../../IMG/Estudiantes.svg";
import Admin from "../../IMG/Admin.svg";



const CalificacionPage = () => {
    let [isOpenBootcamp, setisOpenBootcamp] = useState(false)
    return (
        <div className="container-users">
            <Header/>
            <Container className=" my-5 w-[86%] h-full bg-gray-100 rounded-xl">
                {/*Titulo*/}
                <div className="flex flex-row gap-2">
                    <h1 className=" font-bold text-gray-500">Administrar</h1>
                    <h1 className=" font-bold text-blue-400">Actividades</h1>
                </div> 
                {/*Add User Table*/}
                <ul className="grid grid-cols-4 grid-rows-1 gap-2 px-3">
                    <li className="flex flex-row justify-center">
                    <a href="/users" className="block w-64 h-40 p-3 bg-red-400 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-red-600 hover:bg-red-500">
                        <div className="flex flex-row justify-center align-middle ">
                            <img src={Actividades} alt="..." className="w-100 h-100" />                 
                            <div className="flex flex-col">
                            <h4 className="text-center font-bold text-xl">Numero de actividades</h4>
                            <p className="text-center font-bold text-2xl">999</p>
                        </div>  
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                        <div className="bg-red-700 h-4 rounded-full dark:bg-red-600 shadow-md shadow-red-800" style={{width:'45%'}} >
                        </div>
                        </div>

                    </a>
                    </li>
                    <li className="flex flex-row justify-center">
                    <a href="/users" className="block w-64 h-40 p-3 bg-blue-400 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-blue-600 hover:bg-blue-500">
                        <div className="flex flex-row justify-center align-middle ">
                            <img src={EstAsistencia} alt="..." className="w-[80%]" />                 
                            <div className="flex flex-col">
                            <h4 className="text-center font-bold text-xl">Asistencia estudiantes</h4>
                            <p className="text-center font-bold text-2xl">233/242</p>
                        </div>  
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                        <div className="bg-blue-700 h-4 rounded-full dark:bg-blue-600 shadow-md shadow-blue-800" style={{width:'96%'}} >
                        </div>
                        </div>
                    </a>
                    </li>
                    <li className="flex flex-row justify-center">
                    <a href="/users" className="block w-64 h-40 p-3 bg-purple-500 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-purple-700 hover:bg-purple-600">
                        <div className="flex flex-row justify-center align-middle ">
                            <img src={DocAsistencia} alt="..." className="w-100" />                 
                            <div className="flex flex-col">
                            <h4 className="text-center font-bold text-xl">Asistencia docentes</h4>
                            <p className="text-center font-bold text-2xl">242/242</p>
                        </div>  
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                        <div className="bg-purple-800 h-4 rounded-full dark:bg-purple-600 shadow-md shadow-purple-900" style={{width:'100%'}} >
                        </div>
                        </div>
                    </a>
                    </li>
                    <li className="flex flex-row justify-center">
                    <a href="/users" className="block w-64 h-40 p-3 bg-yellow-300 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-yellow-500 hover:bg-yellow-400 ">
                        <div className="flex flex-row justify-center align-middle pb-1">
                            <img src={EntActividades} alt="..." className="w-[60%]" />                 
                            <div className="flex flex-col">
                            <h4 className="text-center font-bold text-xl">Entrega de Actividades</h4>
                            <p className="text-center font-bold text-2xl">25/50</p>
                            </div>  
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                        <div className="bg-yellow-600 h-4 rounded-full dark:bg-yellow-500 shadow-md shadow-yellow-900" style={{width:'30%'}} >
                        </div>
                        </div>
                    </a>
                    </li>
                </ul>
                {/*Content calificaciones Global*/}
                <ul className="grid grid-cols-4 grid-rows-1 bg-blue-300 w-full mt-6 rounded-xl p-6 border-b-8 border-x-2 border-blue-400">
                    <li className="flex flex-col justify-between">
                        <ul className='flex flex-col'>
                            <li>
                                <h1 className=" font-bold text-white">Actividades</h1>
                            </li>
                            <li className='w-full h-full'>
                                <p className='font-bold text-blue-900 text-xl'>Bootcamp:</p>
                                <div className=" relative flex flex-col items-center font-semibold md:my-0 bg-blue-900  border-b-4  border-sky-950 p-2 rounded-xl shadow z-20">
                                    <a href='#' onClick={() => setisOpenBootcamp((prev) => !prev)} className='flex justify-between font-semibold text-white text-lg decoration-transparent p-0 gap-2 items-start px-3 hover:text-lg hover:font-semibold tracking-wider'>
                                        Desarrollo Web
                                        {!isOpenBootcamp ?(
                                            <i className="bi bi-caret-down-fill"></i>
                                        ) :(
                                            <i className="bi bi-caret-up-fill"></i>
                                        )}
                                        {isOpenBootcamp &&(
                                            <div className='bg-white absolute top-12 left-0 flex flex-col items-start rounded-lg p-2 w-full shadow-black border-2 border-blue-900'>
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
                                                    <a href='/' className='text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold  '><i className="bi bi-nut-fill mx-1"></i >Config. cuenta</a>
                                                </div>
                                                <div className='bg-slate-50 w-full rounded-sm text-center mt-1 hover:bg-red-600 '>
                                                    <a to={'/login'} className='text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold  '><i className="bi bi-door-open text-xl"></i> Cerrar Sesiòn</a>
                                                </div>
                                            </div>
                                        )}
                                    </a>
                                </div>
                            </li>
                            <li>
                                <p className='font-bold text-blue-900 text-xl'>Nivel:</p>
                            </li>
                            <li>

                            </li>
                        </ul>    

                    </li>
                    <li className="flex flex-row justify-between w-100  h-100">
                        <a href="/users" className="p-0 block w-[100%] h-100 bg-white rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-slate-400 hover:bg-slate-400 border-2 border-gray-300 ">
                        <div className="h-full w-full flex flex-column justify-center">
                            <div className="w-100 flex flex-row justify-center">
                                <img src={Profesor} alt="..." className="w-[60%]" />        
                            </div>
                            <div className="w-full h-full bg-blue-100 rounded-b-xl p-2">
                                <p className="text-center font-bold text-3xl text-gray-400 mb-0">20</p>
                                <h4 className="text-center font-bold text-2xl text-gray-600 m-0 p-0">Actividades</h4>
                            </div>         
                        </div>
                        </a>
                    </li>
                    <li className="flex flex-row justify-between w-100  h-100">
                        <a href="/users" className="p-0 block w-[100%] h-100 bg-white rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-slate-400 hover:bg-slate-400 border-2 border-gray-300 ">
                        <div className="h-full w-full flex flex-column justify-center">
                            <div className="w-100 flex flex-row justify-center">
                                <img src={Admin} alt="..." className="w-[60%]" />
                            </div>        
                            <div className="w-100 h-100 bg-blue-100 rounded-b-xl p-2">
                                <p className="text-center font-bold text-3xl text-gray-400 mb-0">100</p>
                                <h4 className="text-center font-bold text-2xl text-gray-600 m-0 p-0">Actividades</h4>
                                <h4 className="text-center font-bold text-2xl text-gray-600 m-0 p-0">Calificadas</h4>
                            </div>         
                        </div>
                        </a>
                    </li>
                    <li className="flex flex-row justify-between w-100 h-100 ">
                        <a href="/users" className="p-0 block w-[100%] h-100 bg-white rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-slate-400 hover:bg-slate-400 border-2 border-gray-300 ">
                        <div className="h-full w-full flex flex-column justify-center">
                            <div className="w-100 flex flex-row justify-center">
                            <img src={Estudiante} alt="..." className="w-[60%]" />  
                            </div>      
                            <div className="w-100 h-100 bg-blue-100 rounded-b-xl p-2">
                                <p className="text-center font-bold text-3xl text-gray-400 mb-0">100</p>
                                <h4 className="text-center font-bold text-2xl text-gray-600 m-0 p-0">Actividades</h4>
                                <h4 className="text-center font-bold text-2xl text-gray-600 m-0 p-0">No Calificadas</h4>
                            </div>         
                        </div>
                        </a>
                    </li>
                </ul>
            </Container>

            
        </div>
    );
}

export default CalificacionPage;
