// import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Formlist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8000/api/list")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };


 
  const handleDelete = (id) => {
    axios
      .post(`http://localhost:8000/api/delete`, { id: id })
      .then(() => {
        fetchData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="row m-0">
        <div class="col-md-7">
          <h1 className="m-5">Add Person</h1>
        </div>
        <div class="col-md-3">
          <a href="../person/add" className="btn btn-primary text-centre m-5">
            Add Person
          </a>
        </div>
      </div>
      <table className="table table-striped ">
        <thead>
          <tr>
            <th>Comitte Name</th>
            <th>Name</th>
            <th>Address</th>
            <th>Number</th>
            <th>Age</th>
            <th>Date Of Birth</th>
            <th>Citizenship Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item , i)=>{
            return<tr>
              <td>
                {item.c_name}
              </td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.number}</td>
              <td>{item.age}</td>
              <td>{item.dob}</td>
              <td>{item.citzenship}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </>
  );
}

export default Formlist;
