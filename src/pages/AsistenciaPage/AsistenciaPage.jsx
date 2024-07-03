import { Container } from "react-bootstrap";
import "../../App.css";
import FormModal from "../../components/forms/formModal";
import RegisterUser from "../../components/forms/ManageUsers/RegisterUser";
import Header from "../../components/Header/Header";
import TableAsis from "../../components/tables/tableAsis/TableAsis";
import CrearSesion from "../../components/forms/fromsSesion/CrearSesion";
import AddUsuario from "../../IMG/AddUsuario.svg";

const AsistenciaPage = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="mt-[200px]"></div> 
      <Container>
        <div className="flex flex-row grid-rows-1 w-100 bg-blue-300 mt-3 rounded-xl p-6 border-b-8 border-x-2 border-blue-400">
          <div className="relative w-100 h-100 bg-blue-950 rounded-xl p-2 border-b-8 border-x-2 border-sky-950">
            <h1 className="text-white font-bold text-2xl text-center p-3">
              Administracion sesiones
            </h1>
            <FormModal Form={<CrearSesion/>} ButonTitle={"Crear"} img={AddUsuario} btnClass={'flex flex-row absolute top-4 right-2 font-bold text-white gap-1 rounded-2xl pt-1 justify-center align-middle'} style={{background:"#9BD0D9"}}/>
            <div className="h-100 w-100 bg-white rounded-xl">
              <TableAsis />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AsistenciaPage;
