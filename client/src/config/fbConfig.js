import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initializing Firebase

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLQltjo6y0DNDuUaSB-0atDzwTinVAsC8",
    authDomain: "course-planner-24f71.firebaseapp.com",
    projectId: "course-planner-24f71",
    storageBucket: "course-planner-24f71.appspot.com",
    messagingSenderId: "919546005555",
    appId: "1:919546005555:web:387f89baba3717a490fb46",
    measurementId: "G-2NKW9QNBB7"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampInSnapshots: true});

export default firebase;