import axios from "axios";
import React, { useEffect, useState } from "react";

function ImageList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:8000/api/image/list")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios.post("http://localhost:8000/api/image/delete", { id: id})
    .then((res) => {
      fetchData();
    })
    .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="row m-0">
        <div className="col-md-7">
          <h1 className="m-5">Add Image</h1>
        </div>
        <div className="col-md-3">
          <a href="/image/add" className="btn btn-primary text-centre m-5">
            Add Image
          </a>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.image_name}</td>
              <td>
                <img src={"http://localhost:8000/"+item.image} style={{ width: "100px", height: "100px" }}/>
              </td>
              <td>{item.description}</td>
              <td>
                <button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ImageList;
