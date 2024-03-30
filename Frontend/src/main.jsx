import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home/Home.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import Login from './Pages/Login/Login.jsx'
import Logout from './Pages/Logout/Logout.jsx'
import Register from './Pages/Register/Register.jsx'
import CoursePage from './courses/page.jsx'
import LessonPage from './courses/CourseId/lessons/LessonsPage.jsx'
 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/register' element={<Register />} />
      <Route path='/courses' element={<CoursePage />} />
      <Route path='/courses/:courseId' element={<LessonPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
