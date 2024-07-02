import React, { useEffect, useState } from 'react';
const Bd = () => {
    const [usuario, setUsuario] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/usuario')
        .then(res => res.json( ))
        .then(usuario => setUsuario(usuario))
        .catch(err => console.log(err));
    }, []);
    return (
        <div>
            <table>
                <thead>
                    <th>Cedula</th>
                    <th>nombre</th>
                    <th>rol</th>
                    <th>fecha Nacimiento</th>
                    <th>Correo</th>
                    <th>telefono</th>
                    <th>coins</th>
                    <th>Tipo Documento</th>
                    <th>Password</th>
                </thead>
                <tbody>
                    {usuario.map((user,i) => (
                        <tr key={i}>
                            <td>{user.id_usuario}</td>
                            <td>{user.nombre}</td>
                            <td>{user.rol}</td>
                            <td>{user.fecha_nacimiento}</td>
                            <td>{user.correo}</td>
                            <td>{user.telefono}</td>
                            <td>{user.coins}</td>
                            <td>{user.tipo_documento}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Bd;
