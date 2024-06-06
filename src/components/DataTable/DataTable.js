import DataTable from "react-data-table-component";
import './SesionDataTable.css';
import React, {useState } from "react";


function SesionDataTable() {
  const [selectCell, setSelectCell] = useState(null);
  const [search, setSearch] =useState("");

  const handleCellClick = (cellId) => {
    setSelectCell(prevSelectCell => prevSelectCell === cellId ? null : cellId);
  };

  const columns = [
    {
      name: "Clases",
      selector: row => row.nombre, 
      cell: row => {
        const cellId = `cell-${row.sesion}`;
        return (
          <div 
            id={cellId} 
            className={`cell ${selectCell === cellId ? "class-cell" : "class-small"}`} 
            onClick={() => handleCellClick(cellId)}
          >
            <div className="class-header">
              <div className="class-title">Sesión {row.sesion}</div>
              <div className={`class-status ${row.status === "Finalizado" ? "finished" : "in-progress"}`}>
                {row.status}
              </div>
            </div>
            <div className="class-date">{row.fecha}</div>
            <div id="schedule" className={`cell ${selectCell === cellId ? "class-schedule" : "class-false "}`}>Horario de la sesión: <span className="text-schedule">{row.horario}</span></div>
            <div id="attendance" className={`cell ${selectCell === cellId ? "class-attendance" : "class-false "}`}>Asistencia: <span className={` ${row.asistencia === "Asistencia marcada" ? "text-attendance" : "text-dontattendance"}`}>{row.asistencia}</span></div>
            <div id="description" className={`cell ${selectCell === cellId ? "class-description" : "class-false "}`}>Descripción: <span className="text-description">{row.descripcion}</span></div>
            <div id="actions" className={`cell ${selectCell === cellId ? "class-actions" : "class-false "}`}>
              <a href="https://meet.google.com/ffg-uten-sjo">
                <button className="btn join-button">Ingresar a la sesión</button>
              </a>
              <button className="btn recording-button" disabled>Ingresar a la grabación</button>
            </div>
          </div>
        );
      }
    }
  ];

  const data = [
    { sesion: 4, fecha: "miércoles, 27 de marzo de 2024", horario: "miércoles, 27 de marzo de 2024 a las 5:55 AM", asistencia: "Asistencia marcada", descripcion: "Descripción de la Sesión 4", status: "Finalizado" },
    { sesion: 50, fecha: "viernes, 31 de mayo de 2024", horario: "viernes, 31 de mayo de 2024 a las 5:55 AM", asistencia: "Asistencia marcada", descripcion: "Descripción de la Sesión 50", status: "En curso" },
    { sesion: 101, fecha: "sábado, 1 de junio de 2024", horario: "sábado, 1 de junio de 2024 a las 9:00 AM", asistencia: "No asistio", descripcion: "Reunión de revisión de proyectos", status: "Finalizado" },
    { sesion: 23, fecha: "lunes, 3 de julio de 2023", horario: "lunes, 3 de julio de 2023 a las 8:30 AM", asistencia: "Asistencia marcada", descripcion: "Reunión de planificación", status: "Finalizado" },
    { sesion: 78, fecha: "martes, 15 de agosto de 2023", horario: "martes, 15 de agosto de 2023 a las 10:00 AM", asistencia: "Asistencia pendiente", descripcion: "Presentación de resultados", status: "En curso" },
    { sesion: 135, fecha: "jueves, 27 de septiembre de 2023", horario: "jueves, 27 de septiembre de 2023 a las 2:15 PM", asistencia: "Asistencia pendiente", descripcion: "Entrevistas de reclutamiento", status: "Finalizado" }
  ];





  //funcion para buscar en el data table react component
  const searcher = (e) =>{
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  const filteredData = data.filter(item =>
    item.sesion.toString().includes(search) ||
    (item.nombre && item.nombre.toLowerCase().includes(search.toLowerCase())) ||
    (item.nombre && item.nombre.toLowerCase().includes(search.toLowerCase())) ||
    (item.fecha && item.fecha.toLowerCase().includes(search.toLowerCase())) ||
    (item.horario && item.horario.toLowerCase().includes(search.toLowerCase())) ||
    (item.asistencia && item.asistencia.toLowerCase().includes(search.toLowerCase())) ||
    (item.descripcion && item.descripcion.toLowerCase().includes(search.toLowerCase())) ||
    (item.status && item.status.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <>
      <h1 className="title-datatable">Consulta la clase</h1>
      <DataTable 
        columns={columns}
        data={filteredData} 
        pagination
        paginationPerPage={2}
        subHeader
        subHeaderComponent={
            <input 
            type="text" 
            placeholder="Buscar...                                🔎" 
            className="search-bar"
            value={search}
            onChange={searcher}
          />
          
        }
      />
        <div className="meet">
            <iframe id="sesion-meet" title="GoogleMeet" src="https://meet.google.com/ffg-uten-sjo"></iframe>
        </div>
    </>
  );
}

export default SesionDataTable;
