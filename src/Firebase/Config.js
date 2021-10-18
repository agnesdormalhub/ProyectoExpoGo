
import app from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQa7wVrwRAHZ4qhQKKlpG4w34kG-mGWCU",
  authDomain: "proyectoexpogo.firebaseapp.com",
  projectId: "proyectoexpogo",
  storageBucket: "proyectoexpogo.appspot.com",
  messagingSenderId: "383401573",
  appId: "1:383401573:web:19ddab31cc7a1a9027d08c"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = app.firestore();
export const storage = app.storage();