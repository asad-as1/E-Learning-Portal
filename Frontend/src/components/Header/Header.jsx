import { Button, Typography } from "@mui/material";
import scss from "./Header.module.scss";
import { Link } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";

const Header = ({ userData }) => {
  //  console.log(userData);

  return (
    <>
      <header className={scss.header}>
        <ul className={scss.menu}>
          <li>
            <Link className={scss.logo} to="/">
              <Typography variant="h6" color={"yellow"}>
                Learning App
              </Typography>
            </Link>
          </li>

          {!userData?.isLoggedIn ? (
            <li>
              <Link to="/login">
                <Typography color={"white"}>Login</Typography>
              </Link>
            </li>
          ) : (
            <div className={scss.me}>
              <li>
                <Link to="/">
                  {" "}
                  <Typography color={"white"}>Home</Typography>{" "}
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  {" "}
                  <Typography color={"white"}>Profile</Typography>{" "}
                </Link>
              </li>
              <li>
                <Link to="/courses">
                  {" "}
                  <Typography color={"white"}>Courses</Typography>{" "}
                </Link>
              </li>
            </div>
          )}
        </ul>

        <div className={scss.buttonMenu}>
          {userData?.isLoggedIn ? (
            <div className={scss.mee}>
              <ThemeBtn />
              <Button variant="contained" color="error">
                <Link to="/logout">Sign out</Link>
              </Button>
            </div>
          ) : (
            <div className={scss.mee}>
              <ThemeBtn />
              <Button variant="contained" color="success">
                <Link to="/login">Sign in</Link>
              </Button>
              <Button variant="contained" color="info">
                <Link to="/register">Register</Link>
              </Button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
