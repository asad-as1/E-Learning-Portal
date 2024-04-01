import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Paper, Typography } from "@mui/material";
import scss from "./CourseCard.module.scss";
import Cookies from "js-cookie";

const CourseCard = (CourseCardProps) => {
  const { keys, title, desc, courseId, img } = CourseCardProps;
  let cookie = null
  const response = Cookies.get("userData");
  if (response) cookie = JSON.parse(response);

  let link = cookie == null? ("/login") : (`/courses/${courseId}`);
  // console.log(cookie.isLoggedIn);

  return (
    <div
      className={scss.courseLink}
      style={{ textDecoration: "none", width: "100%" }}
    >
      <Link to={link}>
        <Paper
          className={scss.CourseCard}
          key={keys}
          variant={"elevation"}
          sx={{ p: 2, bgcolor: "background.default" }}
        >
          <img
            className={scss.img}
            src={`http://localhost:1337${img}`}
            alt=""
          />
          <Typography
            fontSize={12}
            color={"primary.light"}
            fontWeight={"bold"}
            letterSpacing={3}
            sx={{ textTransform: "uppercase" }}
          >
            Course
          </Typography>

          <Typography
            fontSize={"16px"}
            variant={"body1"}
            fontWeight={"bold"}
            component={"h2"}
            sx={{ marginBottom: "0.25rem" }}
          >
            {title}
          </Typography>

          <Typography fontSize={"medium"}>{desc}</Typography>
        </Paper>
      </Link>
    </div>
  );
};
export default CourseCard;
