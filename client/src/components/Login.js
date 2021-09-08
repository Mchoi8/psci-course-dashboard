import * as React from 'react';

import firebase from "firebase/app";
import "firebase/auth";

import Button from '@material-ui/core/Button';
import { styled, makeStyles, withStyles} from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import googleIcon from '../google_icon.png';
import { Typography } from '@material-ui/core';
import { Link } from "react-router-dom";

const { useEffect, useState } = React;


const BootstrapButton = styled(Button)(() => ({
    '&:nth-of-type(1)': {
      backgroundColor: '#FFD200',
      textAlign: 'right',
      color: 'black',
      boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      width: '225px',
      marginTop: '30px',
      marginBottom: '10px',
      lineHeight: 1.5,
          '&:hover': {
        backgroundColor: '#FFD200',
        borderColor: '#0062cc',
        boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;',
      },
    }
  }));


  const GoogleButton = styled(Button)(() => ({
    '&:nth-of-type(1)': {
      backgroundColor: '#4285F4',
      color: 'white',
      boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',      
      width: '225px',
      marginTop: '25px',
      marginBottom: '25px',
      lineHeight: 1.5,
          '&:hover': {
        backgroundColor: '#4285F4',
        borderColor: '#0062cc',
        boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;',
      },
    }
  }));


  
  const card = (
    <React.Fragment>
      <CardContent >

        <div>
        <Typography variant="h6" component="h2">
          Please sign in with your UCI email!
        </Typography>
        </div>

        <GoogleButton
                  aria-controls="1-menu"
                  aria-haspopup="true"
                  variant="contained"
                  onClick={() => onSubmit()}
                >
                <img src={googleIcon} width='25' className='googleicon' />  Sign in with Google
        </GoogleButton>

        <div className='orOption'>
        <Typography variant="h6" component="h2">
          <hr className='hr1'/>Or<hr className='hr2'/>
        </Typography>

        </div>

        <div className='signinfields'>
        <TextField id="outlined-basic" label="Email Address" variant="outlined" />
        </div>

        <div className='signinfields' >
        <TextField id="outlined-basic" label="Password" variant="outlined" type='password'  />
        </div>

        <div>
        <BootstrapButton
                  aria-controls="1-menu"
                  aria-haspopup="true"
                  variant="contained"
                >
                  Sign In
        </BootstrapButton>
        </div>

        <div>
          <Link to='/signin'>Create your account</Link>
        </div>
    </CardContent>
    </React.Fragment>
  );

  const onSubmit = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
    
      firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

  };
  

export default function Login() {
    const [loginState, setLoginState] = React.useState(false);
    const [username, setUsername] = React.useState("");

    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          var uid = user.uid;

          setLoginState(true);
          setUsername(user.displayName);
        } else {
          // User is signed out
          setLoginState(false);
        }
      });

    }, []);

    return (
        <div className="Login" >

          {
            loginState ?

            <Box sx={{ minWidth: 275 }}>
              <Card sx={{width: '50%', height: 475, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', display: 'inline-block'}} variant="outlined">
                <div className='loginSuccessful'>
                  {
                    username.length > 0 ?

                    <Typography variant="h6" component="h2">
                      {username} successfully logged in!
                    </Typography>
                    :
                    <Typography variant="h6" component="h2">
                      User successfully logged in!
                    </Typography>
                  }
                </div>
              </Card>
            </Box>
            :
            <Box sx={{ minWidth: 275 }}>
            <Card sx={{width: '50%', height: 475, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', display: 'inline-block'}} variant="outlined">{card}</Card>
            </Box>
          }

      </div>
    );
    


}