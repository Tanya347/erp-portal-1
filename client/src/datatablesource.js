export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.profilePicture || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "role",
    headerName: "Role",
    width: 100,
  },
  {
    field: "team",
    headerName: "Team",
    width: 100,
  },
  {
    field: "subteam",
    headerName: "Sub Team",
    width: 100,
  },
  {
    field: "year",
    headerName: "Year",
    width: 100,
  },
  {
    field: "branch",
    headerName: "Branch",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "isGEC",
    headerName: "GEC",
    width: 100,
  }
];


export const taskColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "title",
    headerName: "Task",
    width: 150,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 100,
  },
  {
    field: "assignedTo",
    headerName: "Assigned To",
    width: 100,
  },
  {
    field: "deadline",
    headerName: "Deadline",
    width: 100,
  },
];

export const updateColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "title",
    headerName: "Update",
    width: 150,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 500,
  },
];

export const userSearchKeys = ["username", "name", "email", "role", "team", "subteam", "year", "branch", "phone"];
export const taskSearchKeys = ["title", "desc", "assignedTo", "deadline"];
export const updateSearchKeys = ["title", "desc"];