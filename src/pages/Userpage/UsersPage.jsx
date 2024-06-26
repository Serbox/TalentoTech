import Header from "../../components/Header/Header"
import "../../App.css"
import TableUsers from "../../components/tableUsers/TableUsers"

const UsersPage = () => {
  return (
    <>
      <div className="container-users">
        <div className="header-users">
          <Header/>
        </div>
        <div className="table-users-component">

         <TableUsers/>

        </div>
      </div>

    </>
  )
}

export default UsersPage
