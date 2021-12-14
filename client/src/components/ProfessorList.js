import React from "react";
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase'


import '../App.css';

import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { styled, makeStyles, withStyles} from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell, { tableCellClasses } from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';
import ArticleIcon from '@material-ui/icons/Article';


// Sort Button
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Chip from '@material-ui/core/Chip';
// -------------


const { useEffect, useState } = React;


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'black',
    color: 'white',
    padding: 20

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,

  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#ebebeb',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const useStyles = makeStyles({
  table: {
    minWidth: 1000,
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








const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));



export default function ProfessorList() {
  const classes = useStyles();
  const [data, setData] = useState([]); 
  const [savedData, setSavedData] = useState([]); 
  const [currData, setCurrData] = useState(false);


  // Sorting
  const [sortCheck, setSortCheck] = useState(false);
  const [sortTypeVal, setSortTypeVal] = useState("");
  const [sortNameVal, setSortNameVal] = useState("");

  const [c_type, setC_Type] = useState([]);
  const [c_name, setC_Name] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);



  const handleClick1 = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = event => {
    setAnchorEl1(event.currentTarget);
  };

  const sortHelper = (value, arr, type) => {
    // Helper function that returns list of matching course type/name

    let result = [];

    if( type === 't') {

      for(let i=0; i<arr.length; i++) {
        let prof = arr[i];

        if( value === prof.course_1.c_type || value === prof.course_2.c_type || value === prof.course_3.c_type || value === prof.course_4.c_type || 
          value === prof.course_5.c_type || value === prof.course_6.c_type || value === prof.course_7.c_type) {
          result.push(prof);
        }
      }
        
    } else if( type === 'n') {

      for(let i=0; i<arr.length; i++) {
        let prof = arr[i];

        if( value === prof.course_1.c_name || value === prof.course_2.c_name || value === prof.course_3.c_name || value === prof.course_4.c_name || 
          value === prof.course_5.c_name || value === prof.course_6.c_name || value === prof.course_7.c_name) {
          result.push(prof);
        }
      }
    
    }

    return result;
  };


  const handleClose1 = event => {
    // Handle sorting for Course TYPE
    setAnchorEl(null);
    const { myValue } = event.currentTarget.dataset;
    
    setSortTypeVal(myValue);
    setSortCheck(true);

    const sortedList = sortHelper(myValue, data, 't')
    setData(sortedList);
  };

  const handleClose2 = event => {
    // Handle sorting for Course NAME
    setAnchorEl1(null);
    const { myValue } = event.currentTarget.dataset;
    
    setSortNameVal(myValue);
    setSortCheck(true);

    const sortedList = sortHelper(myValue, data, 'n')
    setData(sortedList);

  };

  const handleDelete = () => {
    setSortCheck(false);
    setSortTypeVal("");
    setSortNameVal("");
    setData(savedData);
  };


  useFirestoreConnect([
      { collection: 'professors' } // or 'todos'
    ]);
  const professors = useSelector((state) => state.firestore.ordered.professors);  
  


  useEffect(() => {
    const cTypeList = ['Large Undergraduate SE Course (10, 13, 194W)', 'Large Undergraduate Fundamentals', 'Large Undergraduate Health', 'Large Undergraduate Social', 'Large Undergraduate Developmental', 'Large Undergraduate Clinical', 'Small Undergraduate Health', 'Small Undergraduate Social', 'Small Undergraduate Developmental', 'Small Undergraduate Clinical', 'Small Undergraduate SE (Honors, Statistics, etc)', 'SE195', 'SE195W', '196', '290 - 295', 'Graduate Course Affective Science', 'Graduate Course Developmental', 'Graduate Course Health', 'Graduate Course Social', 'Graduate Course General', 'Graduate Course Statistics', 'Other'];
    setC_Type(cTypeList);
    
    const cNameList = ['PSCI 9. Introduction to Psychology', 'PSCI 11A. Psychology Fundamentals', 'PSCI 11B. Psychology Fundamentals', 'PSCI 11C. Psychology Fundamentals', 'PSCI 100. Special Topics in Social Behavior', 'PSCI 101D. Life Span Developmental Psychology', 'PSCI 102C. Abnormal Psychology', 'PSCI 103H. Health Psychology', 'PSCI 104S. Social Animal: An Introduction to Social Psychology', 'PSCI 110D. Infant Development', 'PSCI 111D. Child Development', 'PSCI 111W. Advanced Research Methods', 'PSCI 112D. Adolescent Development', 'PSCI 113D. Adult Development', 'PSCI 115D. Cognitive Development', 'PSCI 116D. Human Development and Cross-Cultural Perspectives', 'PSCI 117D. The Psychology of Gender', 'PSCI 118D. Human Sexuality', 'PSCI 121D. Work and Family', 'PSCI 126D. Development of Motivation Across the Lifespan', 'PSCI 127D. Attachment Relationships', 'PSCI 136H. Behavioral Medicine', 'PSCI 137H. Human Stress', 'PSCI 138H. Child Health Psychology', 'PSCI 139H. Clinical Sport Psychology', 'PSCI 140H. The Hardiness Approach to Stress Management', 'PSCI 141H. Clinical Health Psychology', 'PSCI 142H. Introduction to Interdisciplinary Salivary Bioscience', 'PSCI 143H. The Science and Practice of Wellness and Resilience', 'PSCI 150C. Clinical Psychology', 'PSCI 152C. Clinical Child Psychology', 'PSCI 153C. Developmental Psychopathology', 'PSCI 154C. Cognitive Behavior Therapy', 'PSCI 155C. Child Therapies', 'PSCI 156C. Forensic Psychology: Advanced Seminar', 'PSCI 159C. Clinical Neuropsychology', 'PSCI 160C. Clinical Neuroscience', 'PSCI 161C. Forensic Psychology', 'PSCI 162C. Psychodynamic Studies', 'PSCI 163C. Human Neuropsychology', 'PSCI 164C. Addiction', 'PSCI 165C. Adult Psychopathology', 'PSCI 166S. Chicano/Latino Families', 'PSCI 170S. Personality', 'PSCI 171S. Environmental Psychology', 'PSCI 173S. Social Relationships', 'PSCI 174S. Error and Bias in Social Judgement', 'PSCI 176S. Motivation', 'PSCI 178S. Violence in Society', 'PSCI 179S. Cultural Psychology', 'PSCI 183S. Social Epidemiology', 'PSCI 184S. Positive Psychology', 'PSCI 185S. Industrial-Organizational Psychology', 'PSCI 187S. Psychology of Inequality', 'PSCI 188S. Evolutionary Psychology', 'PSCI 190. Applied Statistics in Social and Behavioral Research', 'PSCI 192B. The Science and Practice of Compassion', 'PSCI 192Q. Chicano/Latino Social Psychology', 'PSCI 192S. Health and the Latino Paradox', 'PSCI 192T. Cognition and Learning in Educational Settings', 'PSCI 192U. Psychology of Learning, Abilities, and Intelligence', 'PSCI 192V. Language and Literacy', 'PSCI 192X. Introduction to Positive Psychology in Education', 'PSCI 193B. Juvenile Delinquency', 'PSCI 193C. Social Control of Delinquency', 'PSCI 193E. Psychology and the Law', 'PSCI 193F. Family Law', 'PSCI 193G. Eyewitness Testimony', 'PSCI 196. Research Seminar in Psychological Science', 'PSCI C200. Evidence-Based Treatments', 'PSCI P200. Introduction to Legal and Forensic Psychology', 'PSCI C201. Clinical Assessment and Interviewing', 'PSCI P201. Research Methods in Psychology', 'PSCI C202. Cognitive and Neuropsychological Assessment', 'PSCI P202. Data Analysis and Statistics', 'PSCI C203. Professional Issues and Ethics in Clinical Psychology', 'PSCI P203. Big Data Analytics for the Social Sciences I', 'PSCI C204. Practicum in Clinical Psychology', 'PSCI P204. Adolescence', 'PSCI C205. History and Systems', 'PSCI P206. Big Data Analytics for the Social Sciences II', 'PSCI P208. Research Methods', 'PSCI P209A. Applied Psychological Research', 'PSCI P210. The New Statistics and Open Science', 'PSCI P213. Stigma, Discrimination, and Health', 'PSCI C214. Clinical Psychology Research Designs and Methods', 'PSCI P214. Seminar in Social Psychology', 'PSCI C215. Evidence-Based Psychological Treatments II', 'PSCI P215. Psychology and Law', 'PSCI C216. Adult Psychopathology', 'PSCI P216. Psychological Wellbeing and Health', 'PSCI C217. Psychological Assessment', 'PSCI P217. Life-Span Development', 'PSCI P218. Infancy', 'PSCI P219. Forensic Neuropsychology', 'PSCI P220. Developmental Psychology: Theories and History', 'PSCI P221. Critical Perspectives in Diversity Science', 'PSCI P222. Forensic Assessment', 'PSCI P223. Cross-Cultural Developmental Psychology', 'PSCI P224. Children and the Law', 'PSCI P224. Children and the Law', 'PSCI P226. Emotion in Psychology', 'PSCI P231. Professional Issues in Psychology', 'PSCI P232. Trauma and Resilience', 'PSCI P234. Childhood', 'PSCI P235. Social Health Psychology', 'PSCI P238. Child Psychopathology', 'PSCI P242. Legal Reasoning and Jurisprudence', 'PSCI P246. Affective Neuroscience', 'PSCI P247. EEG Methods', 'PSCI P249. Advanced Social Psychology', 'PSCI P250. Emotion, Reasoning, and Memory', 'PSCI P251. Clinical Interviewing and Treatment in a Forensic Setting', 'PSCI P252. Law and Behavior: Compliance and Enforcement', 'PSCI P253. Master of Legal and Forensic Psychology Capstone', 'PSCI P254. Mental Health and the Law', 'PSCI P255. Violence, Anger, and Psychopathology', 'PSCI P256. Family and the Law', 'PSCI P258. Health Psychology', 'PSCI P260. Technology and Health', 'PSCI P261. Intensive Longitudinal Data Analysis', 'PSCI P262. Interpersonal Processes and Health', 'PSCI P263. Eyewitness Testimony', 'PSCI P264. Intensive Writing Workshop', 'PSCI P265. Memory and the Law', 'PSCI P266. Psychology and the Law', 'PSCI P268. Coping with Stressful Life Events', 'PSCI P271. Human Evolution and Behavior', 'PSCI P273. Biobehavioral Aspects of Health and Illness', 'PSCI P275. Special Topics in Psychological Science', 'PSCI P276. Meta Analysis', 'PSCI P280A. Interdisciplinary Salivary Bioscience', 'PSCI P280B. Interdisciplinary Salivary Bioscience Lab', 'PSCI P281. Race and the Law', 'PSCI P282. Salivary Bioscience Data Analysis', 'PSCI P283H. Psychoneuroimmunology', 'PSCI P284. Health and Emotion', 'PSCI P285. Anger: A Turbulent Emotion', 'PSCI P286. Motivation', 'PSCI P288. Human Neuropsychology', 'PSCI P289. The Teaching of Psychology', 'PSCI P290. Research in Developmental Psychology', 'PSCI P291. Research in Health Psychology', 'PSCI P292. Research in Psychopathology and Behavior Disorder', 'PSCI P293. Research in Social and Personality Psychology', 'PSCI P294A. Research Directions in Psychological Science I', 'PSCI P294B. Research Directions in Psychological Science II', 'PSCI P294C. Research Directions in Psychological Science III', 'PSCI P295. Research in Psychology and Law', 'PSCI P296. Doctoral Dissertation Research and Writing', 'PSCI P298. Directed Studies in Psychological Science', 'PSCI P299. Independent Studies in Psychological Science'];
    setC_Name(cNameList);
  }, []);


  const updateProfList = () => {
    setData(professors);
    setCurrData(true);
    setSavedData(professors);

    console.log(data);
    console.log(c_name);
    console.log(c_type);


    setSortCheck(false);
    setSortTypeVal("");
    setSortNameVal("");
  };


    return (
        <div className="professors">

          <div className='updateBtnDiv'>
              <div className='mainBtn'>
                <BootstrapButton onClick={() => updateProfList()} variant="contained" startIcon={<UpdateIcon />}  disableRipple className={classes.margin}>
                  Update Data
                </BootstrapButton>
              </div>

              <div className='sortBtn'>
                <BootstrapButton
                  aria-controls="1-menu"
                  aria-haspopup="true"
                  variant="contained"
                  onClick={handleClick1}
                  endIcon={<ArrowDropDownIcon/>}
                >
                  Course Type
                </BootstrapButton>
                <StyledMenu
                  id="1-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                >
                  {
                    c_type.map((type) => (
                      <MenuItem onClick={handleClose1} data-my-value={type}>
                        <ListItemText primary={type} />
                      </MenuItem>
                    ))
                  }

                </StyledMenu>
              </div>

                <div className='sortBtn'>
                <BootstrapButton
                  aria-controls="customized-menu"
                  aria-haspopup="true"
                  variant="contained"
                  color="primary"
                  onClick={handleClick2}
                  endIcon={<ArrowDropDownIcon/>}
                >
                  Course Name
                </BootstrapButton>
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl1}
                  keepMounted
                  open={Boolean(anchorEl1)}
                >
                  {
                    c_name.map((name) => (
                      <MenuItem onClick={handleClose2} data-my-value={name}>
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))
                  }

                </StyledMenu>
              </div>

              <div className='sortBtn'>
                  {
                    sortCheck && sortNameVal.length > 0 ?
                    <Chip label={sortNameVal} onDelete={handleDelete} className="chip" />
                    :
                    sortCheck && sortTypeVal.length > 0 ?
                    <Chip label={sortTypeVal} onDelete={handleDelete} className="chip" />
                    :
                    <p></p>
                  }
              </div>

              <div className='mainBtn'>
                <ReactHTMLTableToExcel 
                  className='profTable'
                  table='prof-excel-table'
                  filename='professor_analysis'
                  sheet='professor_list'
                  buttonText='Export to Excel'
                  id='excelbtn'
                    />
              </div>

          </div>
    
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table" id='prof-excel-table'>
              <TableHead>
                <TableRow>
                <StyledTableCell>Faculty</StyledTableCell>
                  <StyledTableCell >Email</StyledTableCell>
                  <StyledTableCell >Academic Year</StyledTableCell>
                  <StyledTableCell >Course 1</StyledTableCell>
                  <StyledTableCell >Course Type</StyledTableCell>

                  <StyledTableCell >Course 2</StyledTableCell>
                  <StyledTableCell >Course Type</StyledTableCell>

                  <StyledTableCell >Course 3</StyledTableCell>
                  <StyledTableCell >Course Type</StyledTableCell>

                  <StyledTableCell >Course 4</StyledTableCell>
                  <StyledTableCell >Course Type</StyledTableCell>

                  <StyledTableCell >Course 5</StyledTableCell>
                  <StyledTableCell >Course Type</StyledTableCell>

                  <StyledTableCell >Course 6</StyledTableCell>
                  <StyledTableCell >Course Type</StyledTableCell>

                  <StyledTableCell >Course 7</StyledTableCell>
                  <StyledTableCell >Course Type</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                data.map((row) =>
                
                currData && row.course_1
                ?
                (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell  scope="row" >
                      <b>{row.name}</b>
                    </StyledTableCell>
                    <StyledTableCell >{row.email}</StyledTableCell>
                    <StyledTableCell >{row.academic_yr}</StyledTableCell>

                    <StyledTableCell >{row.course_1.c_name}</StyledTableCell>
                    <StyledTableCell ><b>{row.course_1.c_type}</b></StyledTableCell>

                    <StyledTableCell >{row.course_2.c_name}</StyledTableCell>
                    <StyledTableCell ><b>{row.course_2.c_type}</b></StyledTableCell>

                    <StyledTableCell >{row.course_3.c_name}</StyledTableCell>
                    <StyledTableCell ><b>{row.course_3.c_type}</b></StyledTableCell>

                    <StyledTableCell >{row.course_4.c_name}</StyledTableCell>
                    <StyledTableCell ><b>{row.course_4.c_type}</b></StyledTableCell>

                    <StyledTableCell >{row.course_5.c_name}</StyledTableCell>
                    <StyledTableCell ><b>{row.course_5.c_type}</b></StyledTableCell>

                    <StyledTableCell >{row.course_6.c_name}</StyledTableCell>
                    <StyledTableCell ><b>{row.course_6.c_type}</b></StyledTableCell>

                    <StyledTableCell >{row.course_7.c_name}</StyledTableCell>
                    <StyledTableCell ><b>{row.course_7.c_type}</b></StyledTableCell>
                  </StyledTableRow>

                )
                :
                (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                    <StyledTableCell ></StyledTableCell>
                  </StyledTableRow>
                ))
                }
              
            
              </TableBody>
            </Table>
          </TableContainer>

        </div>
      );
}
