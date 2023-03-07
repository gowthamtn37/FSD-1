import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState("success");

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: { username: "gowtham", password: "gowtham@123" },
    onSubmit: async (values) => {
      console.log(values);

      const data = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (data.status === 401) {
        console.log("error");
        setFormState("error");
      } else {
        setFormState("success");
        const result = await data.json();
        console.log(result);
        localStorage.setItem("token", result.token);
        navigate("/mobiles");
      }
    },
  });
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>

      <div className="login-form-container">
        <TextField
          value={values.username}
          onChange={handleChange}
          label="username"
          name="username"
          variant="outlined"
        />
        <TextField
          value={values.password}
          onChange={handleChange}
          label="password"
          name="password"
          variant="outlined"
        />
        <Button type="submit" color={formState} variant="contained">
          {formState === "success" ? "Submit" : "Retry"}
        </Button>
      </div>
    </form>
  );
}
