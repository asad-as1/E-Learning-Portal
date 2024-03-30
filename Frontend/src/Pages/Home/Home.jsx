import React from 'react'
import { Paper, Typography } from '@mui/material'
import useFetchCourseData from '../../hooks/useFetchCourseData'
import scss from './home.module.scss'

import CourseGrid from '../../components/CourseGrid/CourseGrid'

const Home = () => {
  const courses = useFetchCourseData();
  return (
    <>
         <Paper className={scss.home} elevation={5}>
       <Typography variant='h6' component='h1'>Welcome to My E-Learning-App</Typography>
         </Paper>
         <CourseGrid />
    </>
  )
}

export default Home