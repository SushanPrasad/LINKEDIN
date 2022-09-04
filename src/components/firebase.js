import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEYN-2ir56W0jXVKQNR5LzifuZcp9wePQ",
  authDomain: "suji-linkedin.firebaseapp.com",
  projectId: "suji-linkedin",
  storageBucket: "suji-linkedin.appspot.com",
  messagingSenderId: "370026519789",
  appId: "1:370026519789:web:c3bb3ac6371bb9af4280e4",
  measurementId: "G-LW7Z44ZNJ0"
};


const firebaseApp = firebase.initializeApp (firebaseConfig);
console.log('firebase;;;;',firebaseApp)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};

export default db;


  // const firebaseApp = firebase.initializeApp (firebaseConfig);
  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();

  // // const storageRef = firebase.storage().ref();



  // export { db, auth, provider  };



  

                            