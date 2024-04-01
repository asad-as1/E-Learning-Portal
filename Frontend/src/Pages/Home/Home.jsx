import React from "react";
import { Paper, Typography } from "@mui/material";
import scss from "./home.module.scss";
import CourseGrid from "../../components/CourseGrid/CourseGrid";
import Cookies from "js-cookie";

const Home = () => {
  let cookies = Cookies.get("userData");
  // console.log("cookies",cookies);
  return (
    <>
      <Paper className={scss.home} elevation={5}>
        <Typography className="text-center" variant="h6" component="h1">
          Welcome to My E-Learning-App
          <img className={scss.img} src="https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg" alt="img" />
        </Typography>
      </Paper>
      <CourseGrid />
    </>
  );
};

export default Home;
