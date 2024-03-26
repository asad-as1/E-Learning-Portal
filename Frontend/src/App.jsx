import { Typography } from '@mui/material'
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
       < Header />
       <Typography variant='h6' component='h1'>Welcome to My E-Learning-App</Typography>
       <Outlet />
    </>
  )
}

export default App
