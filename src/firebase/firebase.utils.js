import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase config for harrys-hoods-db project.
const config = {
    apiKey: "AIzaSyBbgJK6REGFbkNCLmbgRaJLX0G9a3HckXg",
    authDomain: "harrys-hoods-db.firebaseapp.com",
    databaseURL: "https://harrys-hoods-db.firebaseio.com",
    projectId: "harrys-hoods-db",
    storageBucket: "",
    messagingSenderId: "728782853789",
    appId: "1:728782853789:web:39ea1081a0e502a9536674",
    measurementId: "G-W7KPNN5L2J"
}

// Initialize firebase with this project's config.
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/**
 * Google authentication utility.
 */
const provider = new firebase.auth.GoogleAuthProvider();

// Trigger Google pop-up.
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
