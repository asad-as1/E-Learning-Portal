import React from "react";
import { Paper, Typography } from "@mui/material";
import scss from "./home.module.scss";
import CourseGrid from "../../components/CourseGrid/CourseGrid";
import Cookies from "js-cookie";

const Home = () => {
  // const courses = useFetchCourseData();
  let cookies = Cookies.get("userData");
  // console.log("cookies",cookies);
  return (
    <>
      <Paper className={scss.home} elevation={5}>
        <Typography variant="h6" component="h1">
          Welcome to My E-Learning-App
        </Typography>
      </Paper>
      {cookies && <CourseGrid />}
    </>
  );
};

export default Home;
