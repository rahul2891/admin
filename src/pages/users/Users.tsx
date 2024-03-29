import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { 
      field: 'img', headerName: 'Avatar', width: 100,
      renderCell: (params) => (
          <img src={params.row.img || "/noavatar.png"} alt=""/>
      )
   },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 200,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'string',
    width: 200,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: 'string',
    width: 200,
  },
  {
    field: 'verified',
    headerName: 'Verified',
    type: 'string',
    width: 100,
  },
  { field: 'status', headerName: 'Status', width: 100, type: 'boolean' },
];

const Users = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add new users</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="users" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users