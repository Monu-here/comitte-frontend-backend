import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";
import { Navigate } from "react-router-dom";
function Add() {
  const [post, setPost] = useState({
    name: "",
    address: "",
    number: "",
    c_name: "",
    age: "",
    dob: "",
    citzenship: "",
  });

  // const [c_name, setC_Name]= useState()

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    axios
      .post(`http://localhost:8000/api/add`, post)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    event.preventDefault();
    <Navigate to="/" />;
  }

  const [comitte, setComitte] = useState([]);
  useEffect(() => {
    async function fetch() {
      const commitie = await axios.get(
        `http://localhost:8000/api/comitte/list`
      );
      setComitte(commitie.data);
    }
    fetch();
  }, []);

  console.log(comitte);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-floating">
          <div className="row">
              <div className="col-md-4">
                 <div>
                 <select name="c_name" onChange={handleInput}>
              {comitte.map((item, i) => {
                return <option key={i}>{item.c_name}</option>;
              })}
              </select>
                 </div>
           
                <div className="form-floating m-5">
                  <input
                    type="text"
                    onChange={handleInput}
                    className="form-control"
                    placeholder="Enter name"
                    name="name"
                  />
                  <label for="floatingInput">Name</label>
                </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating m-5">
                    <input
                      type="text"
                      onChange={handleInput}
                      className="form-control"
                      placeholder="Enter address"
                      name="address"
                    />
                    <label for="floatingInput">Address</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className=" form-floating m-5">
                    <input
                      type="text"
                      onChange={handleInput}
                      className="form-control"
                      placeholder="Enter phone number"
                      name="number"
                    />
                    <label for="floatingInput">Number</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className=" form-floating m-5">
                    <input
                      type="text"
                      onChange={handleInput}
                      className="form-control"
                      placeholder="Enter phone number"
                      name="age"
                    />
                    <label for="floatingInput">Age</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className=" form-floating m-5">
                    <input
                      type="text"
                      onChange={handleInput}
                      className="form-control"
                      placeholder="Enter phone number"
                      name="dob"
                    />
                    <label for="floatingInput">Date of Birth</label>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className=" form-floating m-5">
                    <input
                      type="text"
                      onChange={handleInput}
                      className="form-control"
                      placeholder="Enter phone number"
                      name="citzenship"
                    />
                    <label for="floatingInput">Citizenship Number</label>
                  </div>
                </div>

                <div className=" m-5">
                  <button onClick={handleSubmit} className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Add;
