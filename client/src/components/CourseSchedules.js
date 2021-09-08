import * as React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import StaticDatePicker from '@material-ui/lab/StaticDatePicker';

import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase'



export default function CourseSchedules() {
    const [value, setValue] = React.useState(new Date());

    useFirestoreConnect([
        { collection: 'course_schedules' } 
      ]);
    const course_schedules = useSelector((state) => state.firestore.ordered.professors);  
    

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>

        <StaticDatePicker
        
          orientation="landscape"
          openTo="day"
          value={value}
          shouldDisableDate={isWeekend}
      
          onChange={(newValue) => {
            setValue(newValue);
          }}
      
          renderInput={(params) => <TextField {...params} />}
        />
      
      </LocalizationProvider>
    );
    


}