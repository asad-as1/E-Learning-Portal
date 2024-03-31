import React from "react";
import useFetchCoursesData from "../hooks/useFetchCourseData";
import CourseGrid from "../components/CourseGrid/CourseGrid";
import CourseHeader from "../components/CourseHeader/CourseHeader";

const CoursePage = () => {
  const courses = useFetchCoursesData();

  return (
    <div>
      <CourseHeader
        href={'/'}
        title={"Courses"}
        desc={
          "Choose from our many courses on Frontend development and start your learning journey today!"
        }
      />
      <CourseGrid courseData={courses} />
    </div>
  );
}

export default CoursePage;