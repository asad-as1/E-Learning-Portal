import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import axios from "axios";
import scss from "./CourseGrid.module.scss";

const CourseGrid = ({ searchCourse }) => {
  // const hero = courses.courses.data
  const [courseData, setCourses] = useState([]);
  if (!searchCourse) searchCourse = "";

  useEffect(() => {
    const fetchCourse = async () => {
      const allCourses = await axios.get(
        "http://localhost:1337/api/subjects/?populate=*"
      );
      setCourses(allCourses.data.data);
    };
    fetchCourse();
  }, []);
  //  console.log(courseData)
  return (
    <div className={scss.CourseGrid}>
      {courseData.map((course) => {
        // console.log("course", course.attributes?.img.data.attributes?.url)
        const title = course.attributes.title.toLowerCase();
        if (title.includes(searchCourse.toLowerCase()))
          return (
            <section key={course.id}>
              <CourseCard
                keys={course.id}
                courseId={course.id}
                title={course.attributes.title}
                desc={course.attributes.desc}
                img={course.attributes?.img.data.attributes?.url}
              />
            </section>
          );
      })}
    </div>
  );
};

export default CourseGrid;
