import React, { useState } from "react";
import axios from "axios";
import '../../App.css'
function ComitteAdd() {
  const [post, setPost] = useState({
    c_name: "",
    country: "",
    state: "",
    district: "",
    city: "",
    des: "",
  });
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    axios
      .post(`http://localhost:8000/api/comitte/add`, post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      window.location.reload();
    event.preventDefault();
  };
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-floating">
          <div className="row">
            <div className="col-md-4">
              <div className="form-floating m-5">
                <input
                  type="text"
                  onChange={handleInput}
                  className="form-control"
                  placeholder="Enter name"
                  name="c_name"
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
                  name="country"
                />
                <label for="floatingInput">Country</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-floating m-5">
                <input
                  type="text"
                  onChange={handleInput}
                  className="form-control"
                  placeholder="Enter address"
                  name="state"
                />
                <label for="floatingInput">State</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" form-floating m-5">
                <input
                  type="text"
                  onChange={handleInput}
                  className="form-control"
                  placeholder="Enter phone number"
                  name="district"
                />
                <label for="floatingInput">District</label>
              </div>
            </div>
            <div className="col-md-4">
              <div className=" form-floating m-5">
                <input
                  type="text"
                  onChange={handleInput}
                  className="form-control"
                  placeholder="Enter phone number"
                  name="city"
                />
                <label for="floatingInput">City</label>
              </div>
            </div>
            <div className="col-md-3">
              <div className=" form-floating m-5">
                <div class="md-form">
                  <textarea
                    id="form7"
                    value={post.des}
                    onChange={handleInput}
                    class="md-textarea form-control"
                    rows="3"
                    placeholder="Description"
                    name="des"
                  />
                </div>
              </div>

             
            </div>
            <button onClick={handleSubmit} className="btn btn-primary">
                Submit
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ComitteAdd;
