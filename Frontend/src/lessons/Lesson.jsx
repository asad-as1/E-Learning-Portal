import React from "react";
import useFetchLessonData from "../hooks/useFetchLessonData";
import CourseHeader from "../components/CourseHeader/CourseHeader";
import { useLocation, useNavigate } from "react-router-dom";

const Lesson = () => {
  const location = useLocation().pathname;
  const locArr = location.split("/");
  const lessonId = Number(locArr[locArr.length - 1]);
  const courseId = Number(locArr[locArr.length - 3]);

  // Fetch lesson data using the lesson ID
  const lesson = useFetchLessonData(lessonId);
  const navigate = useNavigate();

  return (
    <div>
      {lesson ? (
        <div style={{ maxWidth: "80rem", margin: "auto" }}>
          <CourseHeader
            href={`/courses/${courseId}`}
            title={lesson?.title}
            description={lesson?.description}
          />

          <iframe
            width="80%"
            height="480"
            style={{ display: "flex", margin: "auto" }}
            src={`${lesson?.video_url}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />

          <p>{lesson?.desc}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Lesson;
