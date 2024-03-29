import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header';
import Cookies from "js-cookie";
// import { useUserData } from './hooks/useUserData';
import { ThemeProvider } from './contexts/theme'


function App() {
  const userDataCookie = Cookies.get('userData');
  const userData = JSON.parse(userDataCookie || '{}')
  // console.log(userData)

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
       <Header userData={userData}/>
       <Outlet />
    </ThemeProvider>
  )
}

export default App
