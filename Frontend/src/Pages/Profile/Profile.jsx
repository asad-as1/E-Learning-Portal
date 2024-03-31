import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Typography, Button } from "@mui/material";
import scss from "./profile.module.scss";
import { useTheme } from "@mui/system";
import { Link } from "react-router-dom";

const Profile = () => {
  const [parsedData, setParsedData] = useState();

  useEffect(() => {
    // Read the user data cookie and parse the JSON data
    const userDataCookie = Cookies.get("userData");
    let parsed= JSON.parse(userDataCookie || "{}");
    setParsedData(parsed);
  }, []);
  
  const isLoggedIn = parsedData?.isLoggedIn;
  const theme = useTheme();

  return (
    <div className={scss.profile}>
      {isLoggedIn ? (
        <>
          <Typography
            variant={"h6"}
            component={"h1"}
            color={theme?.palette?.text?.primary}
          >
            Welcome to your profile page 
            <span style={{ color: "red" }}> {parsedData.userName} </span>
          </Typography>
          <Button
            style={{ marginTop: "2rem" }}
            variant="contained"
            color={"error"}
          >
            <Link to="/logout">Log Out</Link>
          </Button>
        </>
      ) : (
        <Typography>You need to sign in.</Typography>
      )}
    </div>
  );
};

export default Profile;
