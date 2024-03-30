import {useEffect, useState} from "react";

const useFetchLessonData = (lessonId) => {
    const [lesson, setLesson] = useState([]);

    useEffect(() => {
      async function fetchLessonData() {
        try {
            const response = await fetch(`http://localhost:1337/api/lessons/${lessonId}`,);
            if (!response.ok) {
                throw new Error(`HTTP error! Status:  + ${response.status}`);
            }
            const lessonData = await response.json();
            setLesson(lessonData.data.attributes);

        } catch (error) {
            console.log("Error fetching courses data", error);
        }
      }

      if(lessonId)  fetchLessonData();
      
    }, [lessonId]);

    return lesson;
    
};

export default useFetchLessonData;