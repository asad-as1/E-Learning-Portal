import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Cookies from "js-cookie";
// import { useUserData } from './hooks/useUserData';
import { ThemeProvider } from "./contexts/theme";
import Footer from "./components/Footer/Footer";

function App() {
  const userDataCookie = Cookies.get("userData");
  const userData = JSON.parse(userDataCookie || "{}");
  // console.log(userData)

  const [themeMode, setThemeMode] = useState(true);
  const [a, setA] = useState("black");
  const [bg, setBg] = useState("bg-gray-100");

  const theme = () => {

  // actual change in theme
  setThemeMode(!themeMode);
    if (themeMode === true) {
        setBg("bg-gray-900");
        setA("white")
    }
    else {
      setBg("bg-gray-100");
      setA("black")
    }

  useEffect(() => {
    // document.querySelector("html").classList.remove("light", "dark");
    // document.querySelector("html").classList.add(themeMode  ? "light" : "dark");

  }, [themeMode, bg]); 

}

  return (
    <ThemeProvider value={{ themeMode, theme }}>
      <div className={`text-${a} ${bg}` } >
        <Header userData={userData} />
        <Outlet />
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
