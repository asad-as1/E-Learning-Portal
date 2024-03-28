import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header';
import { useUserData } from './hooks/useUserData';

function App() {
  const userData = useUserData();
  // console.log(userData)
  return (
    <>
      <Header  userData={userData}/>
       <Outlet />
    </>
  )
}

export default App
