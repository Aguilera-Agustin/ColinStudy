import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  export const firebaseConfig = {
    apiKey: "AIzaSyAcD7H12GbyOh7eKQghNtmQzmDLUpVAt38",
    authDomain: "colinstudy-94210.firebaseapp.com",
    projectId: "colinstudy-94210",
    storageBucket: "colinstudy-94210.appspot.com",
    messagingSenderId: "567111348052",
    appId: "1:567111348052:web:3e6469ee826f7a9526e2c1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
export  {
    db,
    firebase
}