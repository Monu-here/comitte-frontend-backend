import axios from "axios";
import React, { useEffect, useState } from "react";
function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/api/auth/login", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };
  return (
    <>
      <label htmlFor="">email</label>
      <input type = "email" name = "email" value = {formData.email} onChange = {handleChange}/>
      <label htmlFor="">Password</label>
      <input type="password" name="password" onChange={handleChange}/>
    </>
  );
}
export default Login;
