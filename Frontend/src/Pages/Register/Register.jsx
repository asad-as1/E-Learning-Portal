import React, { useState, useEffect } from "react";
import { TextField, Button, Typography } from "@mui/material";
import scss from "./register.module.scss";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // When reading the cookie, parse the JSON data
    const userDataCookie = Cookies.get("userData");
    const parsedUserData = JSON.parse(userDataCookie || "{}");
    setUserData(parsedUserData);
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:1337/api/auth/local/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        }
      );
      const data = await response.json();
      // console.log(data.user.confirmed)

      if (response.ok) {
        //Format the user-related data before storing in the cookie
        const userData = {
          authToken: data.jwt,
          userName: data.user.username,
          isLoggedIn: data.user.confirmed,
        };

        Cookies.set("userData", JSON.stringify(userData), { expires: 1 }); // Expires in 1 day

        setUserData(userData);
        navigate("/");
        location.reload();
      }
        else {
          alert("Some error occured!! Please try again later")
          throw new Error("Email already registered.");
        }
      } catch (error) {
      console.error("Registration error:", error);
      setError(error);
      // console.log(error)

    }
  };

  return (
    <div className={scss.register}>
      <form onSubmit={handleRegister}>
        <Typography>Register</Typography>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        {error != null ? (
          <Typography className="m-1rem" variant='contained' color="error">Username is not available!!</Typography>
        ) : ("")}
        <br></br>
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
