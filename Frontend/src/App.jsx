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

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("100");
  };

  const darkTheme = () => {
    setThemeMode("900");
  };

  // actual change in theme

  useEffect(() => {
    // document.querySelector("html").classList.remove("100", "900");
    // document.querySelector("html").classList.add(themeMode);
    console.log(document.querySelector('html').classList)
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      {/* <h1 className="bg-gray-900">fdfn</h1> */}
      <div >
        <Header userData={userData} />
        <Outlet />
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
