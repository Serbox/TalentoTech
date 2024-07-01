import Header from "../../components/Header/Header"
import "../../App.css"
import TableUsers from "../../components/tableUsers/TableUsers"
import Container from "react-bootstrap/Container"

const UsersPage = () => {
  return (
    <>
      <div className="container-users">
        <div className="header-users">
          <Header/>
        </div>
        <Container className=" pt-5">
          {/*Titulo*/}
          <div className="flex flex-row gap-2">
            <h1 className=" font-bold text-gray-500">Administrar</h1>
            <h1 className=" font-bold text-blue-400">Usuario</h1>
          </div> 
          {/*Add User Table*/}
          
        </Container>
        <div className="table-users-component">
         <TableUsers/>
        </div>
      </div>

    </>
  )
}

export default UsersPage
