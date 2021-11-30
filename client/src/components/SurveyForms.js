import React from "react";

import '../App.css';

import { makeStyles, styled } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';



import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


const { useEffect, useState } = React;


const useStyles = makeStyles({
  root: {
    minWidth: 75,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  }
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



export default function SurveyForms() {

  const classes = useStyles();
  const [uciCourses, setUciCourses] = React.useState([]);
  const [checkedCourses, setCheckedCourses] = React.useState([]);
  const [submittedCourses, setSubmittedCourses] = React.useState(false);


  useEffect(() => {
    setUciCourses(courses);

  }, []);

  const courses = [
    'PSCI 9. Introduction to Psychology',
    'PSCI 11A. Psychology Fundamentals',
    'PSCI 11B. Psychology Fundamentals',
    'PSCI 11C. Psychology Fundamentals',
    'PSCI 100. Special Topics in Social Behavior',
    'PSCI 101D. Life Span Developmental Psychology',
    'PSCI 102C. Abnormal Psychology',
    'PSCI 103H. Health Psychology',
    'PSCI 104S. Social Animal: An Introduction to Social Psychology',
    'PSCI 110D. Infant Development',
    'PSCI 111D. Child Development',
    'PSCI 111W. Advanced Research Methods',
    'PSCI 112D. Adolescent Development',
    'PSCI 113D. Adult Development',
    'PSCI 115D. Cognitive Development',
    'PSCI 116D. Human Development and Cross-Cultural Perspectives',
    'PSCI 117D. The Psychology of Gender',
    'PSCI 118D. Human Sexuality',
    'PSCI 121D. Work and Family',
    'PSCI 126D. Development of Motivation Across the Lifespan',
    'PSCI 127D. Attachment Relationships',
    'PSCI 136H. Behavioral Medicine',
    'PSCI 137H. Human Stress',
    'PSCI 138H. Child Health Psychology',
    'PSCI 139H. Clinical Sport Psychology',
    'PSCI 140H. The Hardiness Approach to Stress Management',
    'PSCI 141H. Clinical Health Psychology',
    'PSCI 142H. Introduction to Interdisciplinary Salivary Bioscience',
    'PSCI 143H. The Science and Practice of Wellness and Resilience',
    'PSCI 150C. Clinical Psychology',
    'PSCI 152C. Clinical Child Psychology',
    'PSCI 153C. Developmental Psychopathology',
    'PSCI 154C. Cognitive Behavior Therapy',
    'PSCI 155C. Child Therapies',
    'PSCI 156C. Forensic Psychology: Advanced Seminar',
    'PSCI 159C. Clinical Neuropsychology',
    'PSCI 160C. Clinical Neuroscience',
    'PSCI 161C. Forensic Psychology',
    'PSCI 162C. Psychodynamic Studies',
    'PSCI 163C. Human Neuropsychology',
    'PSCI 164C. Addiction',
    'PSCI 165C. Adult Psychopathology',
    'PSCI 166S. Chicano/Latino Families',
    'PSCI 170S. Personality',
    'PSCI 171S. Environmental Psychology',
    'PSCI 173S. Social Relationships',
    'PSCI 174S. Error and Bias in Social Judgement',
    'PSCI 176S. Motivation',
    'PSCI 178S. Violence in Society',
    'PSCI 179S. Cultural Psychology',
    'PSCI 183S. Social Epidemiology',
    'PSCI 184S. Positive Psychology',
    'PSCI 185S. Industrial-Organizational Psychology',
    'PSCI 187S. Psychology of Inequality',
    'PSCI 188S. Evolutionary Psychology',
    'PSCI 190. Applied Statistics in Social and Behavioral Research',
    'PSCI 192B. The Science and Practice of Compassion',
    'PSCI 192Q. Chicano/Latino Social Psychology',
    'PSCI 192S. Health and the Latino Paradox',
    'PSCI 192T. Cognition and Learning in Educational Settings',
    'PSCI 192U. Psychology of Learning, Abilities, and Intelligence',
    'PSCI 192V. Language and Literacy',
    'PSCI 192X. Introduction to Positive Psychology in Education',
    'PSCI 193B. Juvenile Delinquency',
    'PSCI 193C. Social Control of Delinquency',
    'PSCI 193E. Psychology and the Law',
    'PSCI 193F. Family Law',
    'PSCI 193G. Eyewitness Testimony',
    'PSCI 196. Research Seminar in Psychological Science',
    'PSCI C200. Evidence-Based Treatments',
    'PSCI P200. Introduction to Legal and Forensic Psychology',
    'PSCI C201. Clinical Assessment and Interviewing',
    'PSCI P201. Research Methods in Psychology',
    'PSCI C202. Cognitive and Neuropsychological Assessment',
    'PSCI P202. Data Analysis and Statistics',
    'PSCI C203. Professional Issues and Ethics in Clinical Psychology',
    'PSCI P203. Big Data Analytics for the Social Sciences I',
    'PSCI C204. Practicum in Clinical Psychology',
    'PSCI P204. Adolescence',
    'PSCI C205. History and Systems',
    'PSCI P208. Research Methods',
    'PSCI P206. Big Data Analytics for the Social Sciences',
    'PSCI P209A. Applied Psychological Research',
    'PSCI P210. The New Statistics and Open Science',
    'PSCI P213. Stigma, Discrimination, and Health',
    'PSCI C214. Clinical Psychology Research Designs and Methods',
    'PSCI P214. Seminar in Social Psychloogy',
    'PSCI C215. Evidence-Based Psychological Treatments II',
    'PSCI P215. Psychology and Law',
    'PSCI C216. Adult Psychopathology',
    'PSCI P216. Psychological Wellbeing and Health',
    'PSCI C217. Psychological Assessment',
    'PSCI P217. Life-Span Development',
    'PSCI P218. Infancy',
    'PSCI P219. Forensic Neuropsychology',
    'PSCI P220. Developmental Psychology: Theories and History',
    'PSCI P221. Critical Perspectives in Diversity Science',
    'PSCI P222. Forensic Assessment',
    'PSCI P223. Cross-Cultural Developmental Psychology',
    'PSCI P224. Children and the Law',
    'PSCI P226. Emotion in Psychology',
    'PSCI P231. Professional Issues in Psychology',
    'PSCI P232. Trauma and Resilience',
    'PSCI P234. Childhood',
    'PSCI P235. Social Health Psychology',
    'PSCI P238. Child Psychopathology',
    'PSCI P242. Legal Reasoning and Jurisprudence',
    'PSCI P246. Affective Neuroscience',
    'PSCI P247. EEG Methods',
    'PSCI P249. Advanced Social Psychology',
    'PSCI P250. Emotion, Reasoning, and Memory', 
    'PSCI P251. Clinical Interviewing and Treatment in a Forensic Setting', 
    'PSCI P252. Law and Behavior: Compliance and Enforcement', 
    'PSCI P253. Master of Legal and Forensic Psychology Capstone', 
    'PSCI P254. Mental Health and the Law', 
    'PSCI P255. Violence, Anger, and Psychopathology', 
    'PSCI P256. Family and the Law', 
    'PSCI P258. Health Psychology', 
    'PSCI P260. Technology and Health', 
    'PSCI P261. Intensive Longitudinal Data Analysis',
    'PSCI P262. Interpersonal Processes and Health', 
    'PSCI P263. Eyewitness Testimony', 
    'PSCI P264. Intensive Writing Workshop', 
    'PSCI P265. Memory and the Law', 
    'PSCI P266. Psychology and the Law', 
    'PSCI P268. Coping with Stressful Life Events', 
    'PSCI P271. Human Evolution and Behavior', 
    'PSCI P273. Biobehavioral Aspects of Health and Illness', 
    'PSCI P275. Special Topics in Psychological Science', 
    'PSCI P276. Meta Analysis', 
    'PSCI P280A. Interdisciplinary Salivary Bioscience', 
    'PSCI P280B. Interdisciplinary Salivary Bioscience Lab', 
    'PSCI P281. Race and the Law', 
    'PSCI P282. Salivary Bioscience Data Analysis', 
    'PSCI P283H. Psychoneuroimmunology', 
    'PSCI P284. Health and Emotion', 
    'PSCI P285. Anger: A Turbulent Emotion', 
    'PSCI P286. Motivation', 
    'PSCI P288. Human Neuropsychology',
    'PSCI P289. The Teaching of Psychology', 
    'PSCI P290. Research in Developmental Psychology', 
    'PSCI P291. Research in Health Psychology', 
    'PSCI P292. Research in Psychopathology and Behavior Disorder', 
    'PSCI P293. Research in Social and Personality Psychology', 
    'PSCI P294A. Research Directions in Psychological Science I', 
    'PSCI P294B. Research Directions in Psychological Science II', 
    'PSCI P294C. Research Directions in Psychological Science III', 
    'PSCI P295. Research in Psychology and Law', 
    'PSCI P296. Doctoral Dissertation Research and Writing', 
    'PSCI P298. Directed Studies in Psychological Science', 
    'PSCI P299. Independent Studies in Psychological Science'
  ];


  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);

    if (e.target.checked == true) {
      let new_list = [...checkedCourses];
      new_list.push(e.target.value);
      setCheckedCourses(new_list);

    } else {
      let new_list = [...checkedCourses];

      for(let i=0; i<checkedCourses.length; i++) {
        if(checkedCourses[i] === e.target.value) {
          new_list.splice(i, 1);
        }
      }
      setCheckedCourses(new_list);

    }


  };
  
  const submitForm = () => {

    console.log('Submit form list');
    console.log(checkedCourses);
    setSubmittedCourses(true);

  };



  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  // Functional Component inside Form Component
  const FormScheduleCourses = ({course, index}) => {
    const [value, setValue] = React.useState("");
    const [waitlistVal, setWaitlistVal] = React.useState("");


    const twoAndFourDayTimeSlots = [
      '8:00am - 10:50am',
      '9:30am - 12:20pm',
      '11:00am - 1:50pm',
      '12:30pm - 3:20pm',
      '2:00pm - 4:50pm',
      '3:30pm - 6:20pm',
      '5:00pm - 7:50pm',
      '7:00pm - 9:50pm',
      'Monday',
      'Wednesday',
      'Friday',
      'Other'
    ];


    const twoDayTimeSlots2 = [
      '8:00am - 9:20am',
      '9:30am - 10:50am',
      '11:00am - 12:20pm',
      '12:30pm - 1:50pm',
      '2:00pm - 3:20pm',
      '3:30pm - 4:50pm',
      '5:00pm - 6:20pm',
      '6:30pm - 7:50pm',
      'Monday',
      'Wednesday',
      'Friday',
      'Other'
    ];

    const sixDayTimeSlots = [
      'MWF 8:00am - 8:50am',
      'MWF 9:00am - 9:50am',
      'MWF 10:00am - 10:50am',
      'MWF 11:00am - 11:50am',
      'MWF 12:00am - 12:50pm',
      'MWF 1:00pm - 1:50pm',
      'MWF 2:00pm - 2:50pm',
      'MWF 3:00pm - 3:50pm',
      'MWF 4:00pm - 4:50pm',
      'MWF 5:00pm - 5:50pm',
      'TuTH 8:00am - 9:20am',
      'TuTH 9:30am - 10:50am',
      'TuTH 11:00am - 12:20pm',
      'TuTH 12:30pm - 1:50pm',
      'TuTH 2:00pm - 3:20pm',
      'TuTH 3:30pm - 4:50pm',
      'TuTH 5:00pm - 6:20pm',
      'MW 8:00am - 9:20am',
      'MW 9:30am - 10:50am',
      'MW 11:00am - 12:20pm',
      'MW 12:30pm - 1:50pm',
      'MW 2:00pm - 3:20pm',
      'MW 3:30pm - 4:50pm',
      'MW 5:00pm - 6:20pm',
      'Other'
    ];




    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const handleChange1 = (event) => {
      setWaitlistVal(event.target.value);
    };

    return (

      <div >
        <h1>Course {index}: For {course}</h1>

        <FormControl component="fieldset1">
          <FormLabel component="legend">
          </FormLabel>
          <FormGroup>

          <RadioGroup
            aria-label="Please be aware that all courses are now EAD (electronic add/drop), meaning that students add/drop courses electronically (without add/drop cards). A restriction (B or X) can be placed on a course so that the instructor has more authority over which students can add during the first three weeks and drop during the first two weeks. Please indicate if you would like to add one of these restrictions:
            "
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="B restriction: Allows students to add, drop, or change grading option/units with a single 4-digit code." />
            <FormControlLabel value="male" control={<Radio />} label="X restriction: Separate authorization codes for adding, dropping, or changing grading option/units; students must obtain separate codes for each enrollment transaction." />
          </RadioGroup>


          <h2>Waitlist</h2>
          <p>Is the default of 15% of the maximum capacity OK?</p>
          <RadioGroup
            aria-label="Is the default of 15% of the maximum capacity OK?
            "
            name="controlled-radio-buttons-group"
            value={waitlistVal}
            onChange={handleChange1}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="other" control={<Radio />} label="Other..." />
          </RadioGroup>

          <form  noValidate autoComplete="off">
            <p>If selected "Other" from above: I would like to require a new percentage or fixed number of students, indicate below:</p>
            <TextField id="standard-basic" label="Short answer text" />
          </form>


          <h2>Discussion or Lab Section</h2>
          <p>Does this course have discussion or lab sections?  If Yes, see below</p>

          <RadioGroup
            aria-label="Does this course have discussion or lab sections?  If Yes, see below
            "
            name="controlled-radio-buttons-group"
            value={waitlistVal}
            onChange={handleChange1}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>


          <p>Are these sections mandatory? </p>

          <RadioGroup
            aria-label="Are these sections mandatory? 
            "
            name="controlled-radio-buttons-group"
            value={waitlistVal}
            onChange={handleChange1}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>


          <form  noValidate autoComplete="off">
            <p>Please list the number of sections and the maximum capacity of each</p>
            <TextField id="standard-basic" className='longtext' label="Long answer text" multiline />
          </form>


          </FormGroup>
        </FormControl>



        <h2>Class Duration</h2>


        <form  noValidate autoComplete="off">
            <p>Initial here if this course is entirely online (no ranking necessary below):</p>
            <TextField id="standard-basic" label="Short answer text" />
          </form>




        <h3>Large Undergraduate Course Time Preference</h3>
        <p>MW is considered off-module and is given last priority</p>

        <h4>Please rank a minimum of 6 days/times you are available to teach the course:</h4>

        <FormControl component="fieldset">

          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">

            {[1,2,3,4,5,6].map((index) => (
              <FormControlLabel value={index} control={<Radio />} label={index} />
            ))}

          </RadioGroup>

        </FormControl>

        <form  noValidate autoComplete="off">
            <p>If other, please explain:</p>
            <TextField id="standard-basic" label="Short answer text" />
        </form>






        <h3>Small Undergraduate Course Time Preference</h3>
        <p>MW is considered off-module and is given last priority</p>

        <h4>Please rank a minimum of 6 days/times you are available to teach the course:</h4>

        <FormControl component="fieldset">

          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">

            {[1,2,3,4,5,6].map((index) => (
              <FormControlLabel value={index} control={<Radio />} label={index} />
            ))}

          </RadioGroup>
        </FormControl>

        <form  noValidate autoComplete="off">
            <p>If other, please explain:</p>
            <TextField id="standard-basic" label="Short answer text" />
        </form>





        <h3>Graduate Course Time Preference (not stats)</h3>
        <p>PLEASE TRY TO SCHEDULE GRADUATE COURSES ON M, W, AND/OR F SO STUDENTS CAN
            REMAIN IN THE TA POOL! 

            PLEASE DO NOT REQUEST COURSES ON M FROM 12:00PM TO 1:30PM (COLLOQUIUM) OR
            ON M FROM 3:00PM TO 5:00PM (FACULTY MEETING).</p>


        <FormControl component="fieldset">
          <FormLabel component="legend">Please pick a preference and fill out the corresponding time slots below</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="once" control={<Radio />} label="I would like to teach 2 hours 50 minutes once per week" />
            <FormControlLabel value="one" control={<Radio />} label="I would like to teach 1 hours 20 minutes" />
          </RadioGroup>
        </FormControl>



        <h4>Please rank a minimum of 2 times/days you are available to teach the course (2 hrs 50min):</h4>

        <FormControl component="fieldset">

          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">

            {[1,2].map((index) => (
              <FormControlLabel value={index} control={<Radio />} label={index} />
            ))}

          </RadioGroup>
        </FormControl>
        
        <form  noValidate autoComplete="off">
            <p>If other, please explain:</p>
            <TextField id="standard-basic" label="Short answer text" />
        </form>






        <h4>Please rank a minimum of 2 times/days you are available to teach the course (1 hr 20min):</h4>

        <FormControl component="fieldset">

          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">

            {[1,2].map((index) => (
              <FormControlLabel value={index} control={<Radio />} label={index} />
            ))}

          </RadioGroup>
        </FormControl>
        
        <form  noValidate autoComplete="off">
            <p>If other, please explain:</p>
            <TextField id="standard-basic" label="Short answer text" />
        </form>






        <h3>Stats Graduate Course Time Preference </h3>
        <p>PLEASE TRY TO SCHEDULE GRADUATE COURSES ON M, W, AND/OR F SO STUDENTS CAN
            REMAIN IN THE TA POOL! 

            PLEASE DO NOT REQUEST COURSES ON M FROM 12:00PM TO 1:30PM (COLLOQUIUM) OR
            ON M FROM 3:00PM TO 5:00PM (FACULTY MEETING).</p>

        <FormControl component="fieldset">
          <FormLabel component="legend">Please pick a preference and fill out the corresponding time slots below</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="once" control={<Radio />} label="I would like to teach 2 hours 50 minutes once per week" />
            <FormControlLabel value="one" control={<Radio />} label="I would like to teach 1 hours 20 minutes" />
          </RadioGroup>
        </FormControl>



        <h4>Please rank a minimum of 4 times/days you are available to teach the course (2 hrs 50min):</h4>

        <FormControl component="fieldset">

          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">

            {[1,2].map((index) => (
              <FormControlLabel value={index} control={<Radio />} label={index} />
            ))}

          </RadioGroup>
        </FormControl>
        
        <form  noValidate autoComplete="off">
            <p>If other, please explain:</p>
            <TextField id="standard-basic" label="Short answer text" />
        </form>





        <h4>Please rank a minimum of 4 times/days you are available to teach the course (1 hrs 20min):</h4>

          <FormControl component="fieldset">

            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">

              {[1,2].map((index) => (
                <FormControlLabel value={index} control={<Radio />} label={index} />
              ))}

            </RadioGroup>
          </FormControl>

          <form  noValidate autoComplete="off">
              <p>If other, please explain:</p>
              <TextField id="standard-basic" label="Short answer text" />
          </form>






          <h3>Class Time Preference (195)</h3>
          <h4>Please rank a minimum of 4 times/days you are available to teach the course:</h4>

            <FormControl component="fieldset">

              <RadioGroup row aria-label="gender" name="row-radio-buttons-group">

                {[1,2].map((index) => (
                  <FormControlLabel value={index} control={<Radio />} label={index} />
                ))}

              </RadioGroup>
            </FormControl>

            <form  noValidate autoComplete="off">
                <p>If other, please explain:</p>
                <TextField id="standard-basic" label="Short answer text" />
            </form>






          <h3>Class Time Preference (196)</h3>
          <h4>Please rank a minimum of 4 times/days you are available to teach the course:</h4>

            <FormControl component="fieldset">

              <RadioGroup row aria-label="gender" name="row-radio-buttons-group">

                {[1,2].map((index) => (
                  <FormControlLabel value={index} control={<Radio />} label={index} />
                ))}

              </RadioGroup>
            </FormControl>

            <form  noValidate autoComplete="off">
                <p>If other, please explain:</p>
                <TextField id="standard-basic" label="Short answer text" />
            </form>





            <h3>Smart Classroom</h3>

            <FormControl component="fieldset">
            <FormLabel component="legend">Do you require a smart classroom?</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>



      </div>

    );

  }


  // Functional Component inside SurveyForms Component
  const Form = ({courses}) => {

    const submitForm = () => {
      // Submit data to Google Sheets
  
      console.log('Submit form list');
  
    };
   
    return (
      <div >
  
        <Card  variant="outlined" className='form'>
              <CardContent>

              <h1>Form Results: </h1>
  
              <Typography  gutterBottom>
              <p>This survey is designed to understand your individual teaching preferences for the 2021/2022 academic year. </p>
  
              <p>Please complete this survey no later than 12/15/2021. </p>
  
              <p> A few items to note: </p>
  
              <p>1. The normal teaching load is 5 courses. </p>
  
              <p>2. Regardless of buyouts, releases, leaves, partial sabbaticals, etc., everyone is expected to teach one 'large' (i.e., n{'>'}200) undergraduate lecture course. You may elect to teach two 'large' (i.e., n{'>'}200) undergraduate courses, which counts as 3 courses. </p>
  
              <p>3. Everyone is expected to teach SE195 Field Study. Alternatively, faculty may elect to teach SE195W - the writing seminar - which counts for 2 classes. </p>
  
              <p>4. Make sure you complete all of the fields below. If you have a course release, please write "release" as the course title and give a brief explanation in the course number text box (e.g., buyout from grant #XXX or maternity leave).       </p>     
              </Typography>



              {
                  courses.map((c, index) => (
                    <div>
                      <FormScheduleCourses course={c} index={index+1} />
                      <hr/>
                    </div>
                  ))
              }
              
              
              <BootstrapButton onClick={() => submitForm()} variant="contained" disableRipple >Submit Form</BootstrapButton>

            </CardContent>

        </Card>



      </div>
    );
  };
  



  return (
        <div className="surveyforms">

        <div className='form' align="center">
          
          <h1> Curriculum Planning Survey </h1>

          <iframe title='curriculum planning survey' className='survey' src="https://docs.google.com/forms/d/e/1FAIpQLSe5IJwSJaOjO7kCIfAz0AKJuY-xd1cwIGNANlbw5bs22oB6WQ/viewform?embedded=true" width="700" height="800" frameBorder="10"  marginHeight="0" marginWidth="0">Loading…</iframe>
        
          <h1> Course Scheduling Form </h1>
          <iframe title='course scheduling survey' className='survey'  src="https://docs.google.com/forms/d/e/1FAIpQLScOowOcITAk2W2ErNPdzl_9HonuTd0-fRmUIGcQQthv5MUAoQ/viewform?embedded=true" width="700" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        
        </div>




        {/* <div className='dynamic-form' align="center">
          <h1> Course Scheduling Form </h1>
          <Card className='coursePicker' variant="outlined">
            <CardContent>

                  <FormControl component="fieldset">
                  <FormLabel component="legend">Choose courses being taught:</FormLabel>
                  <FormGroup>

                    {
                        uciCourses.map((c, index) => (
                          <FormControlLabel
                          key={index}
                          value={c}
                          control={<Checkbox onChange={handleChange} color="primary" /> }
                          label={c}
                          labelPlacement="end"
                        />
                        ))
                      }

                  </FormGroup>
                </FormControl>

                <BootstrapButton onClick={() => submitForm()} variant="contained" disableRipple className='submit-btn'>
                    Submit
                  </BootstrapButton>

                </CardContent>

            </Card>

          </div>


        <div className='form' align="center">
        {
              submittedCourses ?
                <Form className='formresults' courses={checkedCourses} />
              :
                <p></p>
            }

        </div> */}

        </div>


      );
}
