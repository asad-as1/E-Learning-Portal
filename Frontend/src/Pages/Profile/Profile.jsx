import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Typography, Button } from "@mui/material";
import scss from "./profile.module.scss";
import { useTheme } from "@mui/system";
import { Link } from "react-router-dom";

const Profile = () => {
  const [parsedData, setParsedData] = useState();

  useEffect(() => {
    // Read the user data cookie and parse the JSON data
    const userDataCookie = Cookies.get("userData");
    let parsed = JSON.parse(userDataCookie || "{}");
    // console.log(parsedData)
    setParsedData(parsed);
  }, []);

  const isLoggedIn = parsedData?.isLoggedIn;
  const theme = useTheme();

  return (
    <div className={`${scss.profile}`}>
      {isLoggedIn ? (
        <>
          <Typography
            variant={"h6"}
            component={"h1"}
            color={theme?.palette?.text?.primary}
          >
            Welcome to your profile page
            <span style={{ color: "red" }}> {parsedData.userName} </span>
          </Typography>
          <Button
            style={{ marginTop: "2rem" }}
            variant="contained"
            color={"error"}
          >
            <Link to="/logout">Log Out</Link>
          </Button>
        </>
      ) : (
        <Typography>You need to sign in.</Typography>
      )}
      <section className="text-gray-600 flex justify-center  body-font ">
        <div className="  px-5 py-24 mx-auto  flex ">
          <div className="flex   flex-wrap -m-4">
            <div className="p-4 w-30 ">
              <div className="flex border-2 bg-blue-50 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3"></h2>
                  <p className="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
