import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch.js"
import { useEffect } from "react";
import axios from "axios";
import Modal from "../modal/Modal";

const Datatable = ({ column }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [list, setList] = useState([]);
  const { data } = useFetch(`/${path}`)
  const [openModal, setOpenModal] = useState(false);
  const [rowid, setRowid] = useState("");

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

  const handleClick = (id) => {
    setOpenModal(true);
    setRowid(id);
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {path === "users" &&
              <a href={params.row.folderLink} rel="noopener" target='_blank'>
                < div className="viewButton" >Folder Link</div>
              </a>

            }

            {(path === "users") ? (<><Link to={`/admin/${path}/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link></>) : (<div className="viewButton" onClick={() => handleClick(params.row._id)}>View</div>)}

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div >
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
      {openModal && <Modal setOpen={setOpenModal} id={rowid} type={path} />}
    </div>
  );
};

export default Datatable;
