import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, colors } from "@mui/material";
import scss from "./login.module.scss";
import Cookies from "js-cookie";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    // When reading the cookie, parse the JSON data
    const userDataCookie = Cookies.get("userData");
    const parsedUserData = JSON.parse(userDataCookie || "{}");
    setUserData(parsedUserData);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await response.json();
      // console.log(data)

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
      } else {
        setLoginError(data.message[0].message[0].message);
      }
    } catch (error) {
      console.log("Login error", error);
      setLoginError("An error occurred during login. Please try again later.");
    }
  };

  return (
    <div className={scss.login}>
      {!userData?.isLoggedIn ? (
        <div>
          <form onSubmit={handleLogin}>
            <Typography>Login</Typography>
            <TextField
              label="Username or Email"
              variant="outlined"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              autoComplete={"true"}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
            />
            {loginError && <p style={{ color: "red" }}>{loginError}</p>}
            <Button
              type="submit"
              variant="contained"
              color="success"
              style={{ marginRight: "0.5rem" }}
            >
              Login
            </Button>
            <Button variant="contained" color={"info"}>
              <Link to="/register">Register</Link>
            </Button>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Login;
