import React from 'react';
import DataTable from 'react-data-table-component';
import './TableUsers.css'

const users = [
  { name: 'Invitación pendiente', email: '', role: '', sites: 'Todos los sitios' },
  { name: 'Juan Sebastian Hernandez Reyes', email: 'auxiliarsistemas@gep.com.co', role: 'Administrador', sites: 'Todos los sitios' },
  { name: 'Juan Sebastian Hernandez Reyes', email: 'auxiliarsistemas@gep.com.co', role: 'Administrador', sites: 'Todos los sitios' },
  { name: 'Juan Sebastian Hernandez Reyes', email: 'auxiliarsistemas@gep.com.co', role: 'Operador SAC', sites: 'Algunos sitios' }
];

const columns = [
  { name: 'Nombre', selector: row => row.name, sortable: true },
  { name: 'Email', selector: row => row.email, sortable: true },
  { name: 'Rol', selector: row => row.role, sortable: true },
  { name: 'Sitios', selector: row => row.sites, sortable: true },
  {
    name: 'Acciones',
    cell: row => (
      <>
        <button onClick={() => alert('Reenviar')}>Reenviar</button>
        <button onClick={() => alert('Editar')}>✏️</button>
        <button onClick={() => alert('Eliminar')}>🗑️</button>
      </>
    ),
  },
];

const TableUsers = () => {
  return (
    <div className="container">
      <h1 className='mt-[80px]'>Administración de Usuarios</h1>
      <button className="add-user-btn">Agregar usuarios</button>
      <DataTable
        title="Todas las aplicaciones"
        columns={columns}
        data={users}
        pagination
      />
    </div>
  );
};

export default TableUsers;
