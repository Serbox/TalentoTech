import React, { useState } from 'react';
import "../../App.css";
import Container from 'react-bootstrap/Container';
import Header from "../../components/Header/Header";
import Actividades from "../../IMG/NumActividades.svg";
import EstAsistencia from "../../IMG/EstAsistencia.svg";
import DocAsistencia from "../../IMG/DocAsistencia.svg";
import EntActividades from "../../IMG/ActividadesEnt.svg";
import Actividad from "../../IMG/Actividades_Actividades.svg";
import Actividad_Calificada from "../../IMG/Actividades_calificadas.svg";
import Actividad_sin_calificar from "../../IMG/Actividades_Sin-Calificar.svg";
import TableActividades from "../../components/tables/TablaActividades/TablaActividades.jsx";
import TableNotas from "../../components/tables/tablaNotas/TableNotas.jsx";
import RegisterUser from '../../components/forms/ManageUsers/RegisterUser.jsx';
import EditarNotas from '../../components/forms/ManageNotas/EditarNotas.jsx'
import Modal from '../../components/forms/formModal.jsx';
import AddActividad from "../../IMG/AddActividad.svg";
import IMGTablaActividades from "../../IMG/Table_Actividades.svg";

const Menu = [{
    id: 1,
    title: "Actividades Desarrollo Web",
    Form: <EditarNotas titleData={"Crear Estudiante"}/>,
    Table: <TableActividades/>
  },{
    id: 2,
    title: "Actividades Block Chain",
    Form: <EditarNotas titleData={"Crear Administrador"}/>,
    Table: <TableActividades/>
  },{
    id: 3,
    title: "Actividades IA",
    Form: <EditarNotas titleData={"Crear Maestro"}/>,
    Table: <TableActividades/>
  },{
    id: 4,
    title: "Actividades Analisis de datos",
    Form: <EditarNotas titleData={"Crear Maestro"}/>,
    Table: <TableActividades/>
  }]



const CalificacionPage = () => {
    const [activeindex , setActiveIndex ] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index,className) => activeindex === index ? className : "";

    function changeFunction (){
        var selectBox = document.getElementById('Bootcamps_actividad');
        var selectValue = selectBox.options[selectBox.selectedIndex].value;
        switch(selectValue){
            case "DW":
                handleClick(1);
                checkActive(1, "bg-blue-400 border-b-4 border-blue-600 text-orange-100");
                break;
            case "BC":
                handleClick(2);
                checkActive(2, "bg-blue-400 border-b-4 border-blue-600 text-orange-100");
                break;
            case "IA":
                handleClick(3);
                checkActive(3, "bg-blue-400 border-b-4 border-blue-600 text-orange-100");
                break;
            case "AD":
                handleClick(4);
                checkActive(4, "bg-blue-400 border-b-4 border-blue-600 text-orange-100");
                break;
            default:
                console.log('Opcion Errada');

        }
    }

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
                                <h1 className=" font-bold text-white text-3xl p-0">Actividades</h1>
                            </li>
                            <li className='w-full h-full'>
                                <p className='font-bold text-blue-950 text-2xl'>Bootcamp:</p>
                                <select id='Bootcamps' className=" text-white relative flex flex-col items-center font-semibold md:my-0 bg-blue-900  border-b-4  border-blue-950 p-2 rounded-xl shadow z-2 outline-none">
                                    <option selected value="US" className='bg-white hover:bg-blue-300 text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold'>Desarrollo Web</option>
                                    <option value="CA" className='bg-white hover:bg-blue-300 text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold'>Block Chain</option>
                                    <option value="FR" className='bg-white hover:bg-blue-300 text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold'>Artificial Inteligence</option>
                                    <option value="DE" className='bg-white hover:bg-blue-300 text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold'>Analisis de datos</option>
                                </select>
                            </li>
                            <li>
                                <p className='font-bold text-blue-950 text-2xl'>Nivel:</p>
                                <select id='Nivel' className=" text-white relative flex flex-col items-center font-semibold md:my-0 bg-blue-900  border-b-4  border-blue-950 p-2 rounded-xl shadow z-2 outline-none">
                                    <option selected value="CA" className='bg-white hover:bg-blue-300 text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold'>Basico</option>
                                    <option value="FR" className='bg-white hover:bg-blue-300 text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold'>Intermedio</option>
                                    <option value="DE" className='bg-white hover:bg-blue-300 text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold'>Experto</option>
                                </select>
                            </li>
                        </ul>    

                    </li>
                    <li className="flex flex-row justify-between w-100  h-100">
                        <a href="/users" className="p-0 block w-[100%] h-100 bg-white rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-slate-400 hover:bg-slate-400 border-2 border-gray-300 ">
                        <div className="h-full w-full flex flex-column justify-center">
                            <div className="w-100 flex flex-row justify-center">
                                <img src={Actividad} alt="..." className="w-[70%]" />        
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
                                <img src={Actividad_Calificada} alt="..." className="w-[70%]" />
                            </div>        
                            <div className="w-100 h-100 bg-blue-100 rounded-b-xl p-2">
                                <p className="text-center font-bold text-3xl text-gray-400 mb-0">100</p>
                                <h4 className="text-center font-bold text-2xl text-gray-600 m-0 p-0">Actividades</h4>
                                <h4 className="text-center font-bold text-2xl text-gray-600 m-0 p-0">calificadas</h4>
                            </div>         
                        </div>
                        </a>
                    </li>
                    <li className="flex flex-row justify-between w-100 h-100 ">
                        <a href="/users" className="p-0 block w-[100%] h-100 bg-white rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-slate-400 hover:bg-slate-400 border-2 border-gray-300 ">
                        <div className="h-full w-full flex flex-column justify-center">
                            <div className="w-100 flex flex-row justify-center">
                            <img src={Actividad_sin_calificar} alt="..." className="w-[70%]" />  
                            </div>      
                            <div className="w-100 h-100 bg-blue-100 rounded-b-xl p-2">
                                <p className="text-center font-bold text-3xl text-gray-400 mb-0">100</p>
                                <h4 className="text-center font-bold text-2xl text-gray-600 m-0 p-0">Actividades</h4>
                                <h4 className="text-center font-bold text-2xl text-gray-600 m-0 p-0">sin calificadas</h4>
                            </div>         
                        </div>
                        </a>
                    </li>
                </ul>
                <div className="relative flex flex-row grid-rows-1 w-100 bg-blue-950 mt-3 rounded-xl p-6 border-b-8 border-x-2 border-sky-950">
                    <div className="absolute bottom-6 left-10">
                    <img src={IMGTablaActividades} alt=".." />
                    </div>
                    <div className="flex flex-col w-100 h-100 pr-5">
                        <p className='font-bold text-white text-xl text-center'>Bootcamp:</p>
                        <select id='Bootcamps_actividad' onChange={changeFunction} className=" w-100 h-100 bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 border-b-4 border-blue-400 hover:border-blue-500  rounded outline-none">
                            <option selected value="DW"className={`bg-white hover:bg-blue-300 text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold`}>Desarrollo Web</option>
                            <option value="BC" className='bg-white hover:bg-blue-300 text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold'>Block Chain</option>
                            <option value="IA" className='bg-white hover:bg-blue-300 text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold'>Inteligencia Artificial</option>
                            <option value="AD" className='bg-white hover:bg-blue-300 text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold'>Analisis de datos</option>
                        </select>
                    </div>
                    <div className="relative w-75 h-100 bg-blue-200 rounded-xl p-2 border-b-8 border-x-2 border-blue-400">
                    {Menu.map(item =>(<div key={item.id} className={`panel ${checkActive(item.id,"active")}`}>
                        <h1 className="text-gray-600 font-bold text-2xl text-center p-3">{item.title}</h1>
                        <select id='Bootcamps_level' className="flex flex-row absolute top-4 left-5 font-bold text-white gap-1 rounded-2xl p-2 justify-center align-middle outline-none" style={{background:"#9BD0D9"}}>
                            <option selected value="DW"className={`bg-white hover:bg-blue-300 text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold`}>Principiante</option>
                            <option value="BC" className='bg-white hover:bg-blue-300 text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold'>Intermedio</option>
                            <option value="IA" className='bg-white hover:bg-blue-300 text-gray-700 text-base font-bold w-100 hover:text-white hover:text-bases hover:font-bold'>Experto</option>
                        </select>
                        <Modal Form={item.Form} ButonTitle={"Agregar Actividad"} img={AddActividad} btnClass={'flex flex-row absolute top-5 right-1 font-bold text-white gap-1 rounded-2xl pt-1 justify-center align-middle'} style={{background:"#9BD0D9"}}/>
                        <div className="h-100 w-100 bg-white rounded-xl">
                        {item.Table}
                        </div>
                    </div>))}
                    </div>
                </div>
                <div className="flex flex-row grid-rows-1 w-100 bg-blue-300 mt-3 rounded-xl p-6 border-b-8 border-x-2 border-blue-400">
                    <div className="relative w-100 h-100 bg-blue-900 rounded-xl p-2 border-b-8 border-x-2 border-blue-950">
                        <h1 className="text-white font-bold text-2xl text-center p-3">Notas Estudiantes</h1>
                        <Modal Form= {<EditarNotas titleData={"Crear Notas"}/>} btnClass={'hidden'} style={{background:"#9BD0D9"}}/>
                        <div className="h-100 w-100 bg-white rounded-xl">
                        <TableNotas/>
                        </div>
                    </div>
                </div>
            </Container>

            
        </div>
    );
}

export default CalificacionPage;
