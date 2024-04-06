import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Cookies from "js-cookie";
import { ThemeProvider } from "./contexts/theme";
import Footer from "./components/Footer/Footer";

function App() {
  const userDataCookie = Cookies.get("userData");
  const userData = JSON.parse(userDataCookie || "{}");

  // Load theme mode preference from local storage or default to false if not available
  const initialThemeMode = localStorage.getItem("toggled") === "true";
  const [themeMode, setThemeMode] = useState(initialThemeMode);

  useEffect(() => {
    // Set theme based on the initial theme mode preference
    const bg = themeMode ? "bg-gray-900" : "bg-gray-100";
    const textColor = themeMode ? "white" : "black";
    document.body.className = `text-${textColor} ${bg}`;
  }, [themeMode]);

  const toggleTheme = () => {
    const toggledMode = !themeMode;
    setThemeMode(toggledMode);
    localStorage.setItem("toggled", toggledMode);
  };

  return (
    <ThemeProvider value={{ themeMode, theme: toggleTheme }}>
      <div>
        <Header userData={userData} />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
