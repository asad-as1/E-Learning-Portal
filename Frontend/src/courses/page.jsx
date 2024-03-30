import React from "react";
import useFetchCoursesData from "../hooks/useFetchCourseData";
import CourseGrid from "../components/CourseGrid/CourseGrid";
import CourseHeader from "../components/CourseHeader/CourseHeader";
import { useNavigate } from "react-router-dom";


const CoursePage = () => {
  const courses = useFetchCoursesData();
  const navigate = useNavigate()
  return (
    <div>
      <CourseHeader
        onClick={() => {navigate('/')}}
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