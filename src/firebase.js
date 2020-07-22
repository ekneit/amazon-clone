import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCmI928h74ij_5W3vOX98_mczzKgLMJpHw",
  authDomain: "clone-c32b2.firebaseapp.com",
  databaseURL: "https://clone-c32b2.firebaseio.com",
  projectId: "clone-c32b2",
  storageBucket: "clone-c32b2.appspot.com",
  messagingSenderId: "297389597723",
  appId: "1:297389597723:web:b0bc4b9cbae21c0e07c4be",
});
const auth = firebase.auth();

export { auth };
