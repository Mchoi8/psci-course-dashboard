import React from "react";
import "@fontsource/poppins"; 
import './App.css';
import Dashboard from './components/Dashboard';
import SurveyForms from './components/SurveyForms';
import ProfessorList from './components/ProfessorList';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';

import image from './ucipsych.PNG';
const { useEffect, useState } = React;


const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: '#0064A4',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#0064A4'
  },
  drawerContainer: {
    overflow: 'auto',
    color: 'white',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));



// From Material UI
// Drawer (dasboard layout), Accordion (maybe for table but maybe not), Divider (table), Avatar (email), Table (collapsible, pagination), Material Icons, Typography

export default function App() {
  const classes = useStyles();

  useEffect(() => {

  }, []);


  return (
    <Router>

        <div className={classes.root}>
              <CssBaseline />
          <AppBar position="fixed" className={classes.appBar} >
            <Toolbar className='imgToolbar'>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <img alt='uci icon' src={image} width='235' height='63' className='uci_icon' />
 
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button key={'Dashboard'} component={Link} to={'/'}>
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

              </List>
              <Divider />
              <List>
                {['Settings'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon >< SettingsIcon style={{fill: "white"}} /></ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
          <main className={classes.content}>
            <Toolbar />
                  

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Dashboard}>
          </Route>
          <Route path="/surveyforms" component={SurveyForms}>
          </Route>
          <Route path="/professors" component={ProfessorList}>
          </Route>
        </Switch>
        </main>
      </div>
    </Router>
  );
}

