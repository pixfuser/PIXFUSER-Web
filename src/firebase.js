import firebase from "firebase/compat/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "pixfusr.firebaseapp.com",
  projectId: "pixfusr",
  storageBucket: "pixfusr.appspot.com",
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = app.firestore();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

const logOut = () => {
  signOut(auth);
};

export { auth, signInWithGoogle, logOut, db };
