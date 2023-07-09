import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ComitteEdit() {
  const { id } = useParams();   

  const [value, setValue] = useState({
    id: id, 
    c_name: 'c_name',
    country: "",
    state: "",
    city: "",
    district: "",
  });

 


  useEffect(() => {
    axios
      .post(`http://localhost:8000/api/comitte/edit`, { id: id }) 
      .then((res) => {
        const { c_name, country, state, city, district } = res.data;
        setValue({
          ...value,
          c_name: c_name,
          country: country,
          state: state,
          city: city,
          district: district,
        });
      })
      .catch((error) => console.log(error));
  }, [id]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/comitte/edit`, value) 
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
 
  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}> 
          <div className="form-floating">
            <div className="row">
              <div className="col-md-4">
                <div className="form-floating m-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    name="c_name"
                    value={value.c_name}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInput">Name</label>  
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating m-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter country"
                    name="country"
                    value={value.country}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInput">Country</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating m-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter state"
                    name="state"
                    value={value.state}
                    onChange={handleChange }
                  />
                  <label htmlFor="floatingInput">State</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating m-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter district"
                    name="district"
                    value={value.district}
                    onChange={handleChange }
                  />
                  <label htmlFor="floatingInput">District</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating m-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city"
                    name="city"
                    value={value.city}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInput">City</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-floating m-5">
                  <div className="md-form">
                    <textarea
                      id="form7"
                      className="md-textarea form-control"
                      rows="3"
                      placeholder="Description"
                      name="des"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12"> {/* Added missing closing div tag */}
                <button className="btn btn-primary" type="submit">Submit</button> {/* Changed onSubmit to type="submit" */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ComitteEdit;
