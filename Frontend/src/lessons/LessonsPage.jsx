import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import CourseHeader from "../components/CourseHeader/CourseHeader";
import axios from "axios";

const LessonsPage = () => {
  const [courseData, setCourses] = useState([]);
  const location = useLocation();
  let loc = location.pathname;
  let locArr = loc.split("/");
  let locId = Number(locArr[locArr.length - 1]);

  useEffect(() => {
    const fetchCourse = async () => {
      let allCourses = await axios.get(
        "http://localhost:1337/api/subjects?populate=lessons"
      );
      setCourses(allCourses.data.data[locId - 1].attributes.lessons.data);
    };
    fetchCourse();
  }, []);

  return (
    <div>
      <ul>
        <CourseHeader href={"/courses"} title={""} desc={""} />
        <h1>All Lessons</h1>
        {courseData.length != 0 ? (
          courseData.map((lesson) => {
            return (
              <li key={lesson.id}>
                <Link to={`/courses/${locId}/lessons/${lesson.id}`}>
                  <Typography color={"primary"}>
                    Lesson: {lesson.attributes.title}
                  </Typography>
                </Link>
              </li>
            );
          })
        ) : (
          <h1>Sorry !! No lessons available for this course.</h1>
        )}
      </ul>
    </div>
  );
};

export default LessonsPage;
