import "./list.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import AdminNavbar from "../../../components/adminNavbar/AdminNavbar"
import Datatable from "../../../components/datatable/Datatable"

const List = ({ column, name }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="AdminListContainer">
        <AdminNavbar />
        <Datatable column={column} name={name} />
      </div>
    </div>
  )
}

export default List