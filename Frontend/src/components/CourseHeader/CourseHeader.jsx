import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


function CourseHeader(CourseHeaderProps) {
  const { title, user, desc, href } = CourseHeaderProps;
  const navigate = useNavigate()
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        marginBottom: "2rem",
      }}
    >
    
      <IconButton
      onClick={() => {navigate('/')}}
        // href={href || "/courses"}
        aria-label={"Go back to courses"}
        title={"Go back to courses"}
      >
        <ArrowBackIcon color={"action"}></ArrowBackIcon>
      </IconButton>
      <div>
        <Typography variant="h4" component="h1">
          {title}
        </Typography>
        <Typography>{desc}</Typography>
        <Typography>{user}</Typography>
      </div>
    </div>
  );
}

export default CourseHeader
