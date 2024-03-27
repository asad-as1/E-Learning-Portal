import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography } from '@mui/material'
import scss from './login.module.scss'

 
  userData = {
  authToken: String,  //jwt
  userName: String,
  isLoggedIn: Boolean
}

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [userData, setUserData] = useState<userData | null>(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:1337/api/auth/local', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await response.json();

      if(response.ok) {
        //Format the user-related data before storing in the cookie
        const userData = {
          authToken: data.jwt,
          userName: data.user.userName,
          isLoggedIn: data.user.confirmed,
        };
        setUserData(userData);
        console.log(userData)
      } else {
        setLoginError(data.message[0].message[0].message);
      }
    } catch (error) {
      console.log('Login error', error);
      setLoginError('An error occurred during login. Please try again later.');
    }
  }

  const handleSignOut = () => {
    setUserData(null);
    console.log(userData)
  };

  return (
    <div className={scss.login}>
      <Typography>Login</Typography>
      {!userData?.isLoggedIn && (

      )
      }
    </div>
  )
}

export default Login