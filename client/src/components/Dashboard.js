import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import UpdateIcon from '@material-ui/icons/Update';

import { connect } from 'react-redux';
import { updateData } from '../store/actions/projectActions';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const BootstrapButton = withStyles({
  root: {
    boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#FFD200',
    '&:hover': {
      backgroundColor: '#FFD200',
      borderColor: '#0062cc',
      boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;',
    },

  },
})(Button);


// ************************************************

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const updateTheData = () => {


};


export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className='dashboard'>
      <div className='updateBtnDiv'>

      <BootstrapButton onClick={() => updateTheData()} variant="contained" startIcon={<UpdateIcon />}  disableRipple className={classes.margin}>
        Update Data
      </BootstrapButton>

      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Course Type</TableCell>
              <TableCell >FALL</TableCell>
              <TableCell >WINTER</TableCell>
              <TableCell >Spring</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell >{row.calories}</TableCell>
                <TableCell >{row.fat}</TableCell>
                <TableCell >{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

  
}

// Connects the redux store to Dasboard component, to get state
const stateToProps = (state) => {
    return {
      professors: state.professors.professors
    }
}

// export default connect(stateToProps)(Dashboard);