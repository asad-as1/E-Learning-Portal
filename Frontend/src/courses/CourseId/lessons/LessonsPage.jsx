import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const LessonsPage = () => {
  const [courseData, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      const allCourses = await axios.get(
        "http://localhost:1337/api/courses?populate=*"
      );
      setCourses(allCourses.data.data[1].attributes.lessons.data);
    };
    fetchCourse();
  }, []);

  console.log(courseData)

  return (
    <div>
      <h1>All Lessons</h1>
      <ul>
        {courseData.map((lesson) => {
              return (
                <li key={lesson.id}>
                  <Link to={`/courses/${1}/lessons/${lesson.id}`}>
                    <Typography color={"primary"}>
                      Lesson: {lesson.attributes.title}
                    </Typography>
                  </Link>
                </li>
              )})
        }
      </ul>
    </div>
  );
};

export default LessonsPage;
