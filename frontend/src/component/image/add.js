import React, { useState } from "react";
import axios from "axios";

function ImageAdd() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    axios
      .post("http://localhost:8000/api/image/add", formData)
      .then(() => console.log("posted"))
      .catch((error) => console.log(error));
      window .location.reload();
  }

 
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-floating">
            <div className="row">
              <div className="col-md-4">
                <div className="form-floating m-5">
                  <input
                    type="text"
                    className="form-control"
                    name="image_name"
                  />
                  <label htmlFor="floatingInput">Image Name</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating m-5">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="form-control"
                    name="image"
                    
                  />
                  <label htmlFor="floatingInput">Image</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating m-5">
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                  />
                  <label htmlFor="floatingInput">Description</label>
                </div>
              </div>
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ImageAdd;
