import authReducer from "./authReducer";
import professorReducer from "./professorReducer";
import { combineReducers } from "redux";
import {
    firebaseReducer
  } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({

    auth: authReducer,
    professors: professorReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;