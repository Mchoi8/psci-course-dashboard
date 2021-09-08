import * as React from 'react';

import firebase from "firebase/app";
import "firebase/auth";

import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

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
      lineHeight: 1.5,
          '&:hover': {
        backgroundColor: '#FFD200',
        borderColor: '#0062cc',
        boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;',
      },
    }
  }));



export default function Signin() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    // A way to validate email using regex
    const validateEmail = () => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }


    let getEmail = (e) => {
      console.log(e.target.value);
      setEmail(e.target.value);
    };

    let getPw = (e) => {
      console.log(e.target.value);
      setPassword(e.target.value);
    };


    return (
        <div className="Login" >
        <Box sx={{ minWidth: 275 }}>
        <Card sx={{width: '50%', height: 450, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', display: 'inline-block'}} variant="outlined">
            <React.Fragment>
          <CardContent >
            
            <div>
            <Typography variant="h6" component="h2">
              Please sign up with your UCI email account!
            </Typography>
            </div>

            <div className='signinfields'>
            <TextField id="outlined-basic" label="Email Address" variant="outlined" onChange={getEmail} />
            </div>

            <div className='signinfields' >
            <TextField id="outlined-basic" label="Password" variant="outlined" type='password' onChange={getPw} />
            </div>

            <div className='signinfields' >
            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type='password'  />
            </div>

            <div>
            <BootstrapButton
                      aria-controls="1-menu"
                      aria-haspopup="true"
                      variant="contained"
                      onClick={() => {
                        
                        firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then((userCredential) => {
                          // Signed in 
                          var user = userCredential.user;
                        })
                        .catch((error) => {
                          var errorCode = error.code;
                          var errorMessage = error.message;
                        });
                      }}
                    >
                      Sign Up
            </BootstrapButton>
            </div>
        </CardContent>
        </React.Fragment>
        </Card>
        </Box>
      </div>
    );
    


}