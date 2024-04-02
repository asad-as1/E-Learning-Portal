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
      <CourseHeader href={"/courses"} title={""} desc={""} />
      <div className="flex justify-center w-full">
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full ">
          <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
            <span className="bg-indigo-500 text-white px-3 py-1 text-md text-center rounded mb-10">
              All Lessons
            </span>
            <ul>
              {courseData.length != 0 ? (
                courseData.map((lesson) => {
                  return (
                    <li key={lesson.id} className="mb-6">
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
        </div>
      </div>
    </div>
  );
};

export default LessonsPage;
