import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import axios from "axios";
import scss from "./CourseGrid.module.scss";
const CourseGrid = () => {
  // const hero = courses.courses.data
  const [courseData, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      const allCourses = await axios.get(
        "http://localhost:1337/api/courses?populate=*"
      );
      setCourses(allCourses.data.data);
    };
    fetchCourse();
  }, []);

  return (
    <div className={scss.CourseGrid}>
      {courseData.map((course) => {
        // console.log(course.id)
        return (
          <section key={course.id}>
            <CourseCard
              keys={course.id}
              courseId={course.id}
              title={course.attributes.title}
              desc={course.attributes.desc}
            />
          </section>
        );
      })}
    </div>
  );
};

export default CourseGrid;
