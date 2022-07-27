import "./list.scss"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List = ({ column }) => {
  return (
    <div className="list">
      {/* <Sidebar /> */}
      <div className="AdminListContainer">
        <Navbar />
        <Datatable column={column} />
      </div>
    </div>
  )
}

export default List