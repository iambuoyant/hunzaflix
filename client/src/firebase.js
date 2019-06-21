import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBbAwzvGck8LzyX662GkAKHmDkf7WidjDg",
  authDomain: "hultor-5c6c9.firebaseapp.com",
  databaseURL: "https://hultor-5c6c9.firebaseio.com",
  projectId: "hultor-5c6c9",
  storageBucket: "",
  messagingSenderId: "364893091514"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export { firebase, firebaseDB, googleAuth };

// firebaseDB.ref('users').orderByChild('lastname').equalTo('Ball').once('value')
// .then((snapshot)=>{
//     console.log(snapshot.val());
// })
