import React, { useState } from "react";
import useFetchCoursesData from "../hooks/useFetchCourseData";
import CourseGrid from "../components/CourseGrid/CourseGrid";
import CourseHeader from "../components/CourseHeader/CourseHeader";
import SearchIcon from "@mui/icons-material/Search";

const CoursePage = () => {
  const courses = useFetchCoursesData();
  const [searchCourse, setSearchCourse] = useState("");

  return (
    <div className="m-4">
      <CourseHeader
        href={"/"}
        title={"Courses"}
        desc={
          "Choose from our many courses on Frontend development and start your learning journey today!"
        }
      />

      <div className="flex justify-center w-100% mb-9">
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
            className="px-3 py-2 text-blue-500 rounded-lg bg-transparent outline-none  duration-200 "
            placeholder="Search Course"
          />
        </div>
      </div>

      <CourseGrid searchCourse={searchCourse} />
    </div>
  );
};

export default CoursePage;
