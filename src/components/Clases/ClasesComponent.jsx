import { Container, Tab, Tabs } from "react-bootstrap";

import React from "react";
import SesionesClase from "./SesionesClase/SesionesClase";

const ClasesComponent = () => {
  return (
    <div className=" h-auto mb-4">

    <Container>
      <Tabs
        className="mt-5"
        
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="Ingles" title="Ingles" className="mb-3">
          <SesionesClase 
          title={"Sesion ingles"} 
          fecha={"15/07/2024"} 
          estadoSesion={"finalizado"}
          horario={"8 a 12"}
          asistencia={"100%"}
          descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae."}
          enlace={"https://ejemplo.com/sesion1"}
          />          
          <SesionesClase 
          title={"Sesion ingles 2"} 
          fecha={"16/07/2024"} 
          estadoSesion={"proximamente"}
          horario={"8 a 12"}
          asistencia={"100%"}
          descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae."}
          enlace={"https://ejemplo.com/sesion1"}
          />          
          <SesionesClase 
          title={"Sesion ingles 2"} 
          fecha={"16/07/2024"} 
          estadoSesion={"activo"}
          horario={"8 a 12"}
          asistencia={"5%"}
          descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae."}
          enlace={"https://ejemplo.com/sesion1"}
          />          
          
        </Tab>
        <Tab eventKey="Tecnico" title="Tecnico" className="mb-3">
        <SesionesClase 
          title={"Sesion Tecnica"} 
          fecha={"15/07/2024"} 
          estadoSesion={"finalizado"}
          horario={"8 a 12"}
          asistencia={"100%"}
          descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae."}
          enlace={"https://ejemplo.com/sesion1"}
          />          
          <SesionesClase 
          title={"Sesion Tecnica 2"} 
          fecha={"16/07/2024"} 
          estadoSesion={"proximamente"}
          horario={"8 a 12"}
          asistencia={"100%"}
          descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae."}
          enlace={"https://ejemplo.com/sesion1"}
          />          
          <SesionesClase 
          title={"Sesion Tecnica 3"} 
          fecha={"16/07/2024"} 
          estadoSesion={"activo"}
          horario={"8 a 12"}
          asistencia={"5%"}
          descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae."}
          enlace={"https://ejemplo.com/sesion1"}
          />          
          
        </Tab>
        <Tab eventKey="Power Skills" title="Power Skills" className="mb-3">
        <SesionesClase 
          title={"Sesion power skills"} 
          fecha={"15/07/2024"} 
          estadoSesion={"finalizado"}
          horario={"8 a 12"}
          asistencia={"100%"}
          descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae."}
          enlace={"https://ejemplo.com/sesion1"}
          />          
          <SesionesClase 
          title={"Sesion power skills 2"} 
          fecha={"16/07/2024"} 
          estadoSesion={"proximamente"}
          horario={"8 a 12"}
          asistencia={"100%"}
          descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae."}
          enlace={"https://ejemplo.com/sesion1"}
          />          
          <SesionesClase 
          title={"Sesion power skills 3"} 
          fecha={"16/07/2024"} 
          estadoSesion={"activo"}
          horario={"8 a 12"}
          asistencia={"5%"}
          descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae."}
          enlace={"https://ejemplo.com/sesion1"}
          />          
          
        </Tab>
        <Tab eventKey="Gestion de proyectos" title="Gestion de proyectos" className="mb-3">
        <SesionesClase 
          title={"Sesion Gestion de proyectos"} 
          fecha={"15/07/2024"} 
          estadoSesion={"finalizado"}
          horario={"8 a 12"}
          asistencia={"100%"}
          descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae."}
          enlace={"https://ejemplo.com/sesion1"}
          />          
          <SesionesClase 
          title={"Sesion Gestion de proyectos 2"} 
          fecha={"16/07/2024"} 
          estadoSesion={"proximamente"}
          horario={"8 a 12"}
          asistencia={"100%"}
          descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae."}
          enlace={"https://ejemplo.com/sesion1"}
          />          
          <SesionesClase 
          title={"Sesion Gestion de proyectos 3"} 
          fecha={"16/07/2024"} 
          estadoSesion={"activo"}
          horario={"8 a 12"}
          asistencia={"5%"}
          descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae."}
          enlace={"https://ejemplo.com/sesion1"}
          />          
          
        </Tab>
      </Tabs>
      
    </Container>
    </div>
  );
};

export default ClasesComponent;

//forma de la que podemos traer las sesiones de la base de datos por componente
//if (session.componente === "Ingles")
// {sessions.map((session, index) => (
//   <CustomAccordion
//     key={index}
//     title={session.nombre}
//     fecha={session.fecha_Sesion}
//     estadoSesion={session.estado_sesion}
//     horario={session.horario}
//     asistencia={session.asistencia}
//     descripcion={session.descripcion}
//     enlace={session.enlace}
//   />
// ))}