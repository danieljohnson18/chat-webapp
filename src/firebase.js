import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyD1V4-6zbCvAMrxzhkMsq2A8NxANAGmTPI",
    authDomain: "dchat-18c80.firebaseapp.com",
    projectId: "dchat-18c80",
    storageBucket: "dchat-18c80.appspot.com",
    messagingSenderId: "854384128016",
    appId: "1:854384128016:web:2647675136c6389cd3da95",
  })
  .auth();
