import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
};

exprt const firebaseApp = firebase.initializeApp(firebaseConfig);


