import axios from "axios";
import "../../App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ComitteList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8000/api/comitte/list")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };
  const deleteComitte = (id) => {
    axios
      .post("http://localhost:8000/api/comitte/delete", { id: id })
      .then((response) => {
        fetchData();
      })
      .catch((error) => console.log(error));
  };
  const editComitte = (id, updatedData) => {
    axios
      .post("http://localhost:8000/api/comitte/edit", {
        id: id,
        ...updatedData,
      })
      .then((response) => {
        fetchData();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="row m-0 ps-0">
        <div class="col-md-7 p-5">
          <h1>Add Comitte</h1>
        </div>
        <div className="col-md-3">
          <a href="../comitte/add" className="btn btn-primary text-centre m-5">
            Add Comitte
          </a>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>State</th>
            <th>District</th>
            <th>City</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={item.id}>
              <td>{item.c_name}</td>
              <td>{item.country}</td>
              <td>{item.state}</td>
              <td>{item.district}</td>
              <td>{item.city}</td>
              <td>{item.des}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteComitte(item.id)}
                >
                  Delete
                </button>
                <Link className="btn btn-success" 
                to={`/comitte/edit/${item.id}`} onChange={editComitte}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ComitteList;
