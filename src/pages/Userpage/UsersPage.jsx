import Header from "../../components/Header/Header";
import "../../App.css";
import TableUsers from "../../components/tables/tableUsers/TableUsers.jsx";
import Container from "react-bootstrap/Container";
import Profesor from "../../IMG/Profesor.svg";
import Estudiante from "../../IMG/Estudiantes.svg";
import Admin from "../../IMG/Admin.svg";
import AddUsuario from "../../IMG/AddUsuario.svg";
import Modal from '../../components/forms/formModal.jsx';
import RegisterUser from '../../components/forms/ManageUsers/RegisterUser.jsx';
import ImgTables from '../../IMG/Tables.svg'
import { useState } from "react";

const Menu = [{
  id: 1,
  titleTab: "Estudiante",
  title: "Administrar estudiantes",
  titleButton: "Agregar estudiante",
  Form: <RegisterUser titleData={"Crear Estudiante"}/>,
  Table: <TableUsers className="w-100 h-100"/>
},{
  id: 2,
  titleTab: "Administrador",
  title: "Administrar administradores",
  titleButton: "Agregar administrador",
  Form: <RegisterUser titleData={"Crear Administrador"}/>,
  Table: <TableUsers className="w-100 h-100"/>
},{
  id: 3,
  titleTab: "Maestro",
  title: "Administrar Maestros",
  titleButton: "Agregar Maestro",
  Form: <RegisterUser titleData={"Crear Maestro"}/>,
  Table: <TableUsers className="w-100 h-100"/>
}]

const UsersPage = () => {
  const [activeindex , setActiveIndex ] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index,className) => activeindex === index ? className : "";
  return (
    <>
      <div className="container-users">
        <Header/>
        <Container className=" my-5 w-[86%] h-full bg-gray-100 rounded-xl">
          {/*Titulo*/}
          <div className="flex flex-row gap-2">
            <h1 className=" font-bold text-gray-500">Administrar</h1>
            <h1 className=" font-bold text-blue-400">Usuario</h1>
          </div> 
          {/*Add User Table*/}
          <ul className="grid grid-cols-4 grid-rows-1 gap-2 px-3">
            <li className="flex flex-row justify-center">
              <a href="/users" className="block w-64 h-40 p-3 bg-red-400 rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-red-600 hover:bg-red-500">
                <div className="flex flex-row justify-center align-middle ">
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
          {/*Data User Table*/}
          <ul className="grid grid-cols-3 grid-rows-1 bg-blue-300 w-full mt-6 rounded-xl p-6 border-b-8 border-x-2 border-blue-400">
              <li className="flex flex-row justify-between w-100 h-100">
                <a href="/users" className="p-0 block w-[100%] h-100 bg-white rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-slate-400 hover:bg-slate-400 border-2 border-gray-300 ">
                  <div className="h-full w-full flex flex-column justify-center">
                      <div className="w-100 flex flex-row justify-center">
                        <img src={Profesor} alt="..." className="w-[60%]" />        
                      </div>
                      <div className="w-100 h-100 bg-blue-100 rounded-b-xl p-2">
                        <p className="text-center font-bold text-3xl text-gray-400 mb-0">5</p>
                        <h4 className="text-center font-bold text-2xl text-gray-600 m-0 p-0">Docentes</h4>
                        <h4 className="text-center font-bold text-2xl text-gray-600 m-0 p-0">Registrados</h4>
                      </div>         
                  </div>
                </a>
              </li>
              <li className="flex flex-row justify-between w-100 h-100">
                <a href="/users" className="p-0 block w-[100%] h-100 bg-white rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-slate-400 hover:bg-slate-400 border-2 border-gray-300 ">
                  <div className="h-full w-full flex flex-column justify-center">
                      <div className="w-100 flex flex-row justify-center">
                        <img src={Admin} alt="..." className="w-[60%]" />
                      </div>        
                      <div className="w-100 h-100 bg-blue-100 rounded-b-xl p-2">
                        <p className="text-center font-bold text-3xl text-gray-400 mb-0">2</p>
                        <h4 className="text-center font-bold text-2xl text-gray-600 m-0 p-0">Administradores</h4>
                        <h4 className="text-center font-bold text-2xl text-gray-600 m-0 p-0">Registrados</h4>
                      </div>         
                  </div>
                </a>
              </li>
              <li className="flex flex-row justify-between w-100 h-100">
                <a href="/users" className="p-0 block w-[100%] h-100 bg-white rounded-xl hover:rounded-xl text-sm hover:text-sm shadow-xl hover:shadow-slate-400 hover:bg-slate-400 border-2 border-gray-300 ">
                  <div className="h-full w-full flex flex-column justify-center">
                    <div className="w-100 flex flex-row justify-center">
                      <img src={Estudiante} alt="..." className="w-[60%]" />  
                    </div>      
                      <div className="w-100 h-100 bg-blue-100 rounded-b-xl p-2">
                        <p className="text-center font-bold text-3xl text-gray-400 mb-0">100</p>
                        <h4 className="text-center font-bold text-2xl text-gray-600 m-0 p-0">Estudiantes</h4>
                        <h4 className="text-center font-bold text-2xl text-gray-600 m-0 p-0">Registrados</h4>
                      </div>         
                  </div>
                </a>
              </li>
          </ul>
          <div className="relative flex flex-row grid-rows-1 w-100 bg-blue-950 mt-3 rounded-xl p-6 border-b-8 border-x-2 border-sky-950">
            <div className="absolute bottom-6 left-4">
              <img src={ImgTables} alt=".." />
            </div>
            <div className="flex flex-col  gap-2">
              {Menu.map(item => (<button onClick={()=> handleClick(item.id)} key={item.id} type="button" className={`btn bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 border-b-4 border-blue-400 hover:border-blue-500 rounded ${checkActive(item.id, "bg-blue-400 border-b-4 border-blue-600 text-orange-100")}`}>{item.titleTab}</button>))}
            </div>
            <div className="relative w-100 h-100 bg-blue-200 rounded-xl p-2 border-b-8 border-x-2 border-blue-400">
              {Menu.map(item =>(<div key={item.id} className={`panel ${checkActive(item.id,"active")}`}>
                <h1 className="text-gray-600 font-bold text-2xl text-center p-3">{item.title}</h1>
                <Modal Form={item.Form} ButonTitle={item.titleButton} img={AddUsuario} btnClass={'flex flex-row absolute top-4 right-2 font-bold text-white gap-1 rounded-2xl pt-1 justify-center align-middle'} style={{background:"#9BD0D9"}}/>
                <div className="h-100 w-100 bg-white rounded-xl">
                  {item.Table}
                </div>
              </div>))}
            </div>
          </div>
        </Container>
      </div>

    </>
  )
}

export default UsersPage
