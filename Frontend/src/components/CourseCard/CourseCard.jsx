import React from "react";
import { Link } from 'react-router-dom'
import { Avatar , Paper, Typography } from '@mui/material'
import scss from './CourseCard.module.scss'


const CourseCard = (CourseCardProps) => {
    const { keys, title, desc, courseId } = CourseCardProps;
  // console.log(courseId)
    return (
        <Link 
          className={scss.courseLink}
          to={`/courses/${courseId}`}
          style={{ textDecoration: 'none', width: "100%" }}  
        >
          <Paper
            className={scss.CourseCard}
            key={keys}
            variant={'elevation'}
            sx={{ p: 2, bgcolor: "background.default" }}
          >
            <Typography
               fontSize={12}
               color={"primary.light"}
               fontWeight={"bold"}
               letterSpacing={3}
               sx={{textTransform: "uppercase"}}
            >
               Course 
            </Typography>

            <Typography
               fontSize={"16px"}
               variant={"body1"}
               fontWeight={"bold"}
               component={"h2"}
               sx={{ marginBottom: "0.25rem"}}
            >
               {title} 
            </Typography>

            <Typography fontSize={"medium"}>{desc}</Typography>
            <div className={scss.author} style={{ marginBottom: "1rem"}}>
                <Avatar sx={{ height: 34, width: 34 }} />
                <Typography fontSize={"small"}>Asad Ansari</Typography>
            </div>
          </Paper>
        </Link>
    )
}
export default CourseCard;