import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch.js"
import { useEffect } from "react";
import axios from "axios";
import { userSearchKeys, taskSearchKeys, updateSearchKeys } from "../../datatablesource";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Datatable = ({ column }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [list, setList] = useState([]);
  const { data } = useFetch(`/${path}`)
  const navigate = useNavigate();

  useEffect(() => {
    if (path === "users")
      setList(data.filter((d) => d.isAdmin === false));
    else
      setList(data)
  }, [data])

  const handleDelete = async (id) => {
    try {

      await axios.delete(`http://localhost:5500/api/${path}/${id}`, { withCredentials: false }
      );

      setList(list.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err)
    }
  };

  // console.log(list)

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {path === "users" &&
              <div className="viewButton" onClick={() => navigate(`https://${params.row.folderLink}`)}>Folder Link</div>
            }

            {path === "users" && <Link to={`/admin/${path}/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>}

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">

      {/* not required now since create separate buttons in sidebar */}

      {/* <div className="datatableTitle">
        Add New {name}
        <Link to={'new'} className="link">
          Add New
        </Link>
      </div> */}

      {<DataGrid
        className="datagrid"
        rows={list}
        columns={column.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
        getRowId={row => row._id}
      />}
    </div>
  );
};

export default Datatable;
