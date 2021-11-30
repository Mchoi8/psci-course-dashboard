import React from 'react';


import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { makeStyles, styled } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
import ArticleIcon from '@material-ui/icons/Article';

import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase'
const { useEffect, useState } = React;


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;',
  },
});


const BootstrapButton = styled(Button)(() => ({
  '&:nth-of-type(1)': {
    backgroundColor: '#FFD200',
    color: 'black',
    boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    '&:hover': {
      backgroundColor: '#FFD200',
      borderColor: '#0062cc',
      boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;',
    },
  }
}));


// ************************************************



export default function Dashboard() {
  const classes = useStyles();
  const [courses, setCourses] = useState([]); 
  //const [data, setData] = useState([]);
  const [professorRankings, setProfRankings] = useState({}); 


  const getProfessorRankings = ( profData ) => {
    let profRankings = {};
    // {course_name: {fall: '', winter: '', spring: ''}}

    if(profData.length > 1) {
      for(let i=0; i<profData.length; i++) {
        let professor = profData[i];

        const pCourse1 = professor.course_1.c_name;
        const pCourse2 = professor.course_2.c_name;
        const pCourse3 = professor.course_3.c_name;
        const pCourse4 = professor.course_4.c_name;
        const pCourse5 = professor.course_5.c_name;
        const pCourse6 = professor.course_6.c_name;
        const pCourse7 = professor.course_7.c_name;


        if( !(pCourse1 in profRankings)) {
          profRankings[pCourse1] = {fall: '', winter:'', spring:''};
        }
        if( professor.course_1.r_one  === 'Fall') {
          if( profRankings[pCourse1].fall.length === 0) {
            profRankings[pCourse1].fall += professor.name;
          } else {
            profRankings[pCourse1].fall += ', ' + professor.name;
          }
        } else if ( professor.course_1.r_one  === 'Winter' ) {
          if( profRankings[pCourse1].winter.length === 0) {
            profRankings[pCourse1].winter += professor.name;
          } else {
            profRankings[pCourse1].winter += ', ' + professor.name;
          }
          } else if ( professor.course_1.r_one  === 'Spring' ) {
            if( profRankings[pCourse1].spring.length === 0) {
              profRankings[pCourse1].spring += professor.name;
            } else {
              profRankings[pCourse1].spring += ', ' + professor.name;
            }
          } 

        if( !(pCourse2 in profRankings)) {
          profRankings[pCourse2] = {fall: '', winter:'', spring:''};
        }
        if( professor.course_2.r_one  === 'Fall') {
          if( profRankings[pCourse2].fall.length === 0) {
            profRankings[pCourse2].fall += professor.name;
          } else {
            profRankings[pCourse2].fall += ', ' + professor.name;
          }
        } else if ( professor.course_2.r_one  === 'Winter' ) {
          if( profRankings[pCourse2].winter.length === 0) {
            profRankings[pCourse2].winter += professor.name;
          } else {
            profRankings[pCourse2].winter += ', ' + professor.name;
          }
        } else if ( professor.course_2.r_one  === 'Spring' ) {
          if( profRankings[pCourse2].spring.length === 0) {
            profRankings[pCourse2].spring += professor.name;
          } else {
            profRankings[pCourse2].spring += ', ' + professor.name;
          }
        } 

        if( !(pCourse3 in profRankings)) {
          profRankings[pCourse3] = {fall: '', winter:'', spring:''};
        }
        if( professor.course_3.r_one  === 'Fall') {
          if( profRankings[pCourse3].fall.length === 0) {
            profRankings[pCourse3].fall += professor.name;
          } else {
            profRankings[pCourse3].fall += ', ' + professor.name;
          }
        } else if ( professor.course_3.r_one  === 'Winter' ) {
          if( profRankings[pCourse3].winter.length === 0) {
            profRankings[pCourse3].winter += professor.name;
          } else {
            profRankings[pCourse3].winter += ', ' + professor.name;
          }
        } else if ( professor.course_3.r_one  === 'Spring' ) {
          if( profRankings[pCourse3].spring.length === 0) {
            profRankings[pCourse3].spring += professor.name;
          } else {
            profRankings[pCourse3].spring += ', ' + professor.name;
          }        
        } 

        if( !(pCourse4 in profRankings)) {
          profRankings[pCourse4] = {fall: '', winter:'', spring:''};
        }
        if( professor.course_4.r_one  === 'Fall') {
          if( profRankings[pCourse4].fall.length === 0) {
            profRankings[pCourse4].fall += professor.name;
          } else {
            profRankings[pCourse4].fall += ', ' + professor.name;
          }        
        } else if ( professor.course_4.r_one  === 'Winter' ) {
          if( profRankings[pCourse4].winter.length === 0) {
            profRankings[pCourse4].winter += professor.name;
          } else {
            profRankings[pCourse4].winter += ', ' + professor.name;
          }         
        } else if ( professor.course_4.r_one  === 'Spring' ) {
          if( profRankings[pCourse4].spring.length === 0) {
            profRankings[pCourse4].spring += professor.name;
          } else {
            profRankings[pCourse4].spring += ', ' + professor.name;
          }           
        } 

        if( !(pCourse5 in profRankings)) {
          profRankings[pCourse5] = {fall: '', winter:'', spring:''};
        }
        if( professor.course_5.r_one  === 'Fall') {
          if( profRankings[pCourse5].fall.length === 0) {
            profRankings[pCourse5].fall += professor.name;
          } else {
            profRankings[pCourse5].fall += ', ' + professor.name;
          }  
        } else if ( professor.course_5.r_one  === 'Winter' ) {
          if( profRankings[pCourse5].winter.length === 0) {
            profRankings[pCourse5].winter += professor.name;
          } else {
            profRankings[pCourse5].winter += ', ' + professor.name;
          }  
        } else if ( professor.course_5.r_one  === 'Spring' ) {
          if( profRankings[pCourse5].spring.length === 0) {
            profRankings[pCourse5].spring += professor.name;
          } else {
            profRankings[pCourse5].spring += ', ' + professor.name;
          }  
        } 

        if( !(pCourse6 in profRankings)) {
          profRankings[pCourse6] = {fall: '', winter: '', spring:''};
        }
        if( professor.course_6.r_one  === 'Fall') {
          if( profRankings[pCourse6].fall.length === 0) {
            profRankings[pCourse6].fall += professor.name;
          } else {
            profRankings[pCourse6].fall += ', ' + professor.name;
          }  
        } else if ( professor.course_6.r_one  === 'Winter' ) {
          if( profRankings[pCourse6].winter.length === 0) {
            profRankings[pCourse6].winter += professor.name;
          } else {
            profRankings[pCourse6].winter += ', ' + professor.name;
          }  
        } else if ( professor.course_6.r_one  === 'Spring' ) {
          if( profRankings[pCourse6].spring.length === 0) {
            profRankings[pCourse6].spring += professor.name;
          } else {
            profRankings[pCourse6].spring += ', ' + professor.name;
          }  
        } 

        if( !(pCourse7 in profRankings)) {
          profRankings[pCourse7] = {fall: '', winter:'', spring:''};
        }
        if( professor.course_7.r_one  === 'Fall') {
          if( profRankings[pCourse7].fall.length === 0) {
            profRankings[pCourse7].fall += professor.name;
          } else {
            profRankings[pCourse7 ].fall += ', ' + professor.name;
          }  
        } else if ( professor.course_7.r_one  === 'Winter' ) {
          if( profRankings[pCourse7].winter.length === 0) {
            profRankings[pCourse7].winter += professor.name;
          } else {
            profRankings[pCourse7].winter += ', ' + professor.name;
          }  
        } else if ( professor.course_7.r_one  === 'Spring' ) {
          if( profRankings[pCourse7].spring.length === 0) {
            profRankings[pCourse7].spring += professor.name;
          } else {
            profRankings[pCourse7].spring += ', ' + professor.name;
          }  
        } 

      }
  }
    console.log(profRankings);

    return profRankings;
  };

  const getCourseLists = ( professorData ) => {
    let courseTypes = {};

    if( professorData.length > 1) {
      for(let i=0; i<professorData.length; i++) {
        let prof = professorData[i];
  
        if(!( prof.course_1.c_type in courseTypes )) {
          courseTypes[prof.course_1.c_type] = new Set();
        }
        courseTypes[prof.course_1.c_type].add(prof.course_1.c_name);
        
        if(!( prof.course_2.c_type in courseTypes )) {
          courseTypes[prof.course_2.c_type] = new Set();
        }
        courseTypes[prof.course_2.c_type].add(prof.course_2.c_name);
  
        if(!( prof.course_3.c_type in courseTypes )) {
          courseTypes[prof.course_3.c_type] = new Set();
        }
        courseTypes[prof.course_3.c_type].add(prof.course_3.c_name);
  
        if(!( prof.course_4.c_type in courseTypes )) {
          courseTypes[prof.course_4.c_type] = new Set();
        }
        courseTypes[prof.course_4.c_type].add(prof.course_4.c_name);
  
        if(!( prof.course_5.c_type in courseTypes )) {
          courseTypes[prof.course_5.c_type] = new Set();
        }
        courseTypes[prof.course_5.c_type].add(prof.course_5.c_name);
  
        if(!( prof.course_6.c_type in courseTypes )) {
          courseTypes[prof.course_6.c_type] = new Set();
        }
        courseTypes[prof.course_6.c_type].add(prof.course_6.c_name);
  
        if(!( prof.course_7.c_type in courseTypes )) {
          courseTypes[prof.course_7.c_type] = new Set();
        }
        courseTypes[prof.course_7.c_type].add(prof.course_7.c_name);
  
      }
    }


    return courseTypes;
  };


  useFirestoreConnect([
    { collection: 'professors' } // or 'todos'
  ]);
  const professors = useSelector((state) => state.firestore.ordered.professors);  


  useEffect(() => {
    //setData(professors);

  }, []);


  const updateTheData = () => {
    //setData(professors);

    let courses = [];
    const curatedLists = getCourseLists(professors);

    if( curatedLists ) {

      for (let key in curatedLists) {
        // do something for each key in the object 
        if( key.length > 0) {
          courses.push(key + '8');
        }
        let keySet = curatedLists[key];
        keySet.forEach(item =>   {
          if( item.length > 0) {
            courses.push(item);
          }
        });    
      }

      setCourses(courses);
  }

    const rankings = getProfessorRankings(professors);
    setProfRankings(rankings);



  };


  const downloadSheet = () => {

    let excelData = [];


    for (let key in professorRankings) {
      let dataObj = {};
      let keyVal = professorRankings[key];

      dataObj['fall'] = keyVal.fall;
      dataObj['winter'] = keyVal.winter;
      dataObj['spring'] = keyVal.spring;

      excelData.push(dataObj);
       
    }





  };


  return (
    <div className='dashboard'>
      <div className='updateBtnDiv'>
        <div className='mainBtn'>

          <BootstrapButton onClick={() => updateTheData()} variant="contained" startIcon={<UpdateIcon />}  disableRipple className={classes.margin}>
            Update Data
          </BootstrapButton>
        </div>

        <div className='mainBtn'>
            <ReactHTMLTableToExcel 
              className='table'
              table='excel-table'
              filename='dashboard_analysis'
              sheet='dashboard_table'
              buttonText='Export to Excel'
              id='excelbtn'
            />
        </div>

      </div>

      <TableContainer className={classes.table} component={Paper}>
        <Table className={classes.table} aria-label="simple table" id='excel-table'>
          <TableHead>
            <TableRow>
              <TableCell >Course Type/ Name</TableCell>
              <TableCell >FALL</TableCell>
              <TableCell >WINTER</TableCell>
              <TableCell >SPRING</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
          {
            courses ?
             courses.map((course) => (
                <TableRow >
                  {
                    course.slice(-1) === '8' ?
                      <TableCell key={course} component="th" scope="row" style={{backgroundColor: 'lightgray'}}>
                        <b>{course.substring(0, course.length-1)}</b>
                      </TableCell>
                    :
                      <TableCell key={course} component="th" scope="row">
                        {course}
                      </TableCell>
                  }

                  {
                    professorRankings[course] ? 
                    <TableCell key='fall' >{professorRankings[course].fall}</TableCell>
                    :
                    course.slice(-1) === '8' ?
                    <TableCell key='fall' style={{backgroundColor: 'lightgray'}} ></TableCell>
                    :
                    <TableCell key='fall' ></TableCell>
                  }

                  {
                    professorRankings[course] ? 
                    <TableCell key='winter' >{professorRankings[course].winter}</TableCell>
                    :
                    course.slice(-1) === '8' ?
                    <TableCell key='winter' style={{backgroundColor: 'lightgray'}} ></TableCell>
                    :
                    <TableCell key='winter' ></TableCell>
                  }

                  {
                    professorRankings[course] ? 
                    <TableCell key='spring' >{professorRankings[course].spring}</TableCell>
                    :
                    course.slice(-1) === '8' ?
                    <TableCell key='spring' style={{backgroundColor: 'lightgray'}} ></TableCell>
                    :
                    <TableCell key='spring' ></TableCell>
                  }
                </TableRow>
              ))

              :
              <p></p>

            }
            
          </TableBody>
        </Table>
      </TableContainer>


      

    </div>
  );

  
}