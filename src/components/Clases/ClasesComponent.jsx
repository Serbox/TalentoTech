import { Container, Tab, Tabs } from "react-bootstrap";

import React from "react";

const ClasesComponent = () => {
  return (
    <Container>
      <Tabs
        className="mt-5"
        
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="Ingles" title="Ingles" className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae.
        </Tab>
        <Tab eventKey="Tecnico" title="Tecnico" className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae.
        </Tab>
        <Tab eventKey="Power Skills" title="Power Skills" className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae.
        </Tab>
        <Tab eventKey="Gestion de proyectos" title="Gestion de proyectos" className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi hic esse iusto repellat dolorum magnam amet, non eius iure reprehenderit rem! Veniam obcaecati nihil saepe, odit expedita quos recusandae.
        </Tab>
      </Tabs>
      
    </Container>
  );
};

export default ClasesComponent;
