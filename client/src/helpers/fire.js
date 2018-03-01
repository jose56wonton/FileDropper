import firebase from "firebase";
var config = {
  apiKey: "AIzaSyCDghQBr9ww_wMbXDPdcQlQAQuCAEYOfrY",
  authDomain: "filedropper-c166b.firebaseapp.com",
  databaseURL: "https://filedropper-c166b.firebaseio.com",
  projectId: "filedropper-c166b",
  storageBucket: "filedropper-c166b.appspot.com",
  messagingSenderId: "433380721638"
};
firebase.initializeApp(config);
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
