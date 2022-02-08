import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyA-GvE2YipkZAd2J_U5_DBq9oeZuDquxmw",
  authDomain: "crwn-db-31bd6.firebaseapp.com",
  projectId: "crwn-db-31bd6",
  storageBucket: "crwn-db-31bd6.appspot.com",
  messagingSenderId: "356405913652",
  appId: "1:356405913652:web:a549ac4c662a3e8c250261",
  measurementId: "G-K8B1YMWZEY"
}

// Initialize Firebase
const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
