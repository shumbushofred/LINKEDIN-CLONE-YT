import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCzqSp-YbUdjyumJSGjVySQ-K1weSd8fI4",
    authDomain: "linkedin-clone-ff6dd.firebaseapp.com",
    projectId: "linkedin-clone-ff6dd",
    storageBucket: "linkedin-clone-ff6dd.appspot.com",
    messagingSenderId: "482356547878",
    appId: "1:482356547878:web:1d5c2a3d7a7c6566e131e7",
    measurementId: "G-1PQF64W8JR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}