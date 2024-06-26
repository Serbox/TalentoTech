import Header from "../../components/Header/Header"
import "../../App.css"
import TableUsers from "../../components/tableUsers/TableUsers"

const UsersPage = () => {
  return (
    <>
      <div className='header'>
        <Header />
      </div> 
      <div>
      <TableUsers/>
      </div>
    </>
  )
}

export default UsersPage
