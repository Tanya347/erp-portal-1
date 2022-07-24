import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List = ({ column, name }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="AdminListContainer">
        <Navbar />
        <Datatable column={column} name={name} />
      </div>
    </div>
  )
}

export default List