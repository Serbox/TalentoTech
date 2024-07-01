import "../../App.css"
import Header from "../../components/Header/Header"
import TableAsis from "../../components/tables/tableAsis/TableAsis"



const AsistenciaPage = () => {
  return (
    
    <>
        <div className='header'>
        <Header />
      </div> 
      <div>
        <TableAsis/>
      </div>
    </>
  )
}

export default AsistenciaPage
