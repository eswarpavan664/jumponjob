/* eslint-disable no-unused-vars */

import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyArbEMlSyOUwRNE9eB_uJJYFqyPN9S8dTA",
  authDomain: "jump-on-job.firebaseapp.com",
  databaseURL: "https://jump-on-job-default-rtdb.firebaseio.com",
  projectId: "jump-on-job",
  storageBucket: "jump-on-job.appspot.com",
  messagingSenderId: "39008287993",
  appId: "1:39008287993:web:820458ebc92c59bded3628",
  measurementId: "G-5PDLZETG61"
  };
  
  const fire=firebase.intializeApp(config);
  export default fire;