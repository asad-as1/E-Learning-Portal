import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header';
import Cookies from "js-cookie";
// import { useUserData } from './hooks/useUserData';

function App() {
  const userDataCookie = Cookies.get('userData');
  const userData = JSON.parse(userDataCookie || '{}')
  // console.log(userData)
  return (
    <>
       <Header userData={userData}/>
       <Outlet />
    </>
  )
}

export default App
