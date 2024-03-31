import {useEffect, useState} from "react";

const useFetchCourseData = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      async function fetchCourseData() {
        try {
            const response = await fetch("http://localhost:1337/api/subjects?populate=lessons",);
            if (!response.ok) {
                throw new Error(`HTTP error! Status:  + ${response.status}`);
            }
            const courseData = await response.json();
            setCourses(courseData)
            // console.log(courses)
            
        } catch (error) {
            console.log("Error fetching courses data", error);
        }
      }
    
      fetchCourseData();
    }, []);

    return courses;
    
};

export default useFetchCourseData;