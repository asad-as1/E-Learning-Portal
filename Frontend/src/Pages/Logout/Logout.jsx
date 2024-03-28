import React, {useEffect, useState} from 'react';
import { Typography, Button } from "@mui/material";
import Cookies from "js-cookie";
import { UserDataType } from '../../hooks/useUserData'
import scss from './logout.module.scss';
import { Link } from 'react-router-dom'


const Logout = () => {
  const [userData, setUserData] = useState(UserDataType);

  useEffect(() => {
    
    // When reading the cookie, parse the JSON data
    const userDataCookie = Cookies.get('userData');
    const parsedUserData = JSON.parse(userDataCookie || '{}') 
    setUserData(parsedUserData);
  }, []);

    const handleSignOut = () => {
      Cookies.remove('userData');
      setUserData(null);
      location.reload()
    };

  return (
    <div className={scss.logout}>
    {
        userData?.isLoggedIn ? (
            <>
                <Typography variant={'h6'}>Are you sure you want to sign out?</Typography>
                <Button variant="contained" onClick={handleSignOut}>
                    Sign Out
                </Button>
            </>
        ) : (
            <>
                <Typography variant={'h6'}>Thank you for signing out</Typography>
                <Button variant="contained">
                   <Link to='/login'>Sign In</Link>
                </Button>
            </>
        )
    }
</div>
  )
}

export default Logout