import React, { useState } from "react";
import { Paper, Typography } from "@mui/material";
import scss from "./home.module.scss";
import CourseGrid from "../../components/CourseGrid/CourseGrid";
import Cookies from "js-cookie";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  let cookies = Cookies.get("userData");
  const [searchCourse, setSearchCourse] = useState("");
  return (
    <>
      <div className="flex justify-center w-100%">
        <div
          style={{ width: "40%" }}
          className="flex mt-10 shadow-md  rounded-3xl  justify-center py-1 px-2 items-center border border-gray-200"
        >
          <SearchIcon />
          <input
            type="text"
            style={{ width: "90%" }}
            value={searchCourse}
            onChange={(e) => setSearchCourse(e.target.value)}
            className="px-3 py-2  rounded-lg bg-transparent text-blue-500 outline-none  duration-200"
            placeholder="Search Course"
          />
        </div>
      </div>

      <Paper className={scss.home} elevation={5}>
        <Typography className="text-center" variant="h6" component="h1">
          Welcome to My E-Learning-App
          <img
            className={scss.img}
            src="https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg"
            alt="img"
          />
        </Typography>
      </Paper>
      <CourseGrid searchCourse={searchCourse} />
    </>
  );
};

export default Home;
