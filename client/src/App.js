import React from "react";

import firebase from "firebase/app";
//import { getAuth, signOut } from "firebase/auth";

import "@fontsource/poppins"; 
import './App.css';
import Dashboard from './components/Dashboard';
import SurveyForms from './components/SurveyForms';
import ProfessorList from './components/ProfessorList';
import CourseSchedules from "./components/CourseSchedules";
import Login from "./components/Login";
import Signin from "./components/Signin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { makeStyles } from '@material-ui/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LogoutIcon from '@material-ui/icons/Logout';

import image from './ucipsych.PNG';

const { useEffect, useState } = React;


const drawerWidth = 200;

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,

  },
  drawerContainer: {
    overflow: 'auto',
    color: 'white',
    backgroundColor: '#0064A4',

  },
  content: {
    flexGrow: 1
        //padding: theme.spacing(3),
  }
}));



// From Material UI
// Drawer (dasboard layout), Accordion (maybe for table but maybe not), Divider (table), Avatar (email), Table (collapsible, pagination), Material Icons, Typography

export default function App() {
  const classes = useStyles();
  const [signinCheck, setsigninCheck] = useState(false);


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log('User is signed in, looking from App.js');
        setsigninCheck(true);

      } else {
        // User is signed out
        console.log('User is signed out or logged out');
      }
    });

  }, []);



  return (
    <Router>
      <ThemeProvider theme={theme}>

        <div className={classes.root}>
            <CssBaseline />
          <AppBar position="fixed" sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
              backgroundColor: '#0064A4'
          }} >
            <Toolbar className='imgToolbar'>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"

            classes={{
              paper: classes.drawerPaper,
            }}

            sx={{
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#0064A4'},
            }}

          >
            <img alt='uci icon' src={image} width='200' height='63' className='uci_icon' />
 
            <div className={classes.drawerContainer}>
              {
                signinCheck ?

                <List>
                  <ListItem button key={'Dashboard'} component={Link} to={'/home'}>
                      <ListItemIcon><DashboardIcon style={{fill: "white"}} /></ListItemIcon>
                      <ListItemText primary='Dashboard' />
                  </ListItem>

                  <ListItem button key={'Surveys and Forms'} component={Link} to={'/surveyforms'}>
                    <ListItemIcon><AssignmentIcon style={{fill: "white"}} /></ListItemIcon>
                    <ListItemText primary='Surveys and Forms' />
                  </ListItem>

                  <ListItem button key={'Professors'} component={Link} to={'/professors'}>
                    <ListItemIcon><PeopleIcon style={{fill: "white"}} /></ListItemIcon>
                    <ListItemText primary='Professors' />
                  </ListItem>

                  <ListItem button key={'CourseSchedules'} component={Link} to={'/courseschedules'}>
                    <ListItemIcon><DateRangeIcon style={{fill: "white"}} /></ListItemIcon>
                    <ListItemText primary='Course Schedules' />
                  </ListItem>

                  <Divider />
                  <ListItem button key={'Logout'} 
                  component={Link} 
                  to={'/'}
                  onClick={() => {
                    firebase.auth().signOut().then(() => {
                      setsigninCheck(false);
                      // Sign-out successful.
                    }).catch((error) => {
                      // An error happened.
                    });
                  }}
                  >
                    <ListItemIcon><LogoutIcon style={{fill: "white"}} /></ListItemIcon>
                    <ListItemText primary='Log Out' />

                  </ListItem>
              </List>

                :

                <List></List>

              }

            </div>
          </Drawer>
          <main className={classes.content}>
            <Toolbar />
                  

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Login}>
          </Route>
          {
            signinCheck ?
            <Route exact path="/signin" component={Signin}>
            </Route>
            :
            <Redirect to="/" />
          }
          {
            signinCheck ?
            <Route path="/home" component={Dashboard}>
            </Route>
            :
            <Redirect to="/" />
          }
          {
            signinCheck ?
            <Route path="/surveyforms" component={SurveyForms}>
            </Route>
            :
            <Redirect to="/" />
          }
          {
            signinCheck ?
            <Route path="/professors" component={ProfessorList}>
            </Route>
            :
            <Redirect to="/" />
          }
          {
            signinCheck ?
            <Route path="/courseschedules" component={CourseSchedules}>
            </Route>
            :
            <Redirect to="/" />
          }

        </Switch>
        </main>
      </div>
      </ThemeProvider>

    </Router>
  );
}

