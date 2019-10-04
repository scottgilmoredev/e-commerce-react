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

/**
 * Create a db record when a new user signs in.
 * @param {Object} userAuth - Google auth user data.
 * @param {Object} additionalData - any additional data we may receive.
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    // Retrieve DocumentReference for the current user.
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    /**
     * Once we get the DocumentReference, we can get the DocumentSnapshot and
     * determine whether or not a record exists.
     */
    const snapShot = await userRef.get();

    // If no record exists, create one.
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // Create record with displayName, email, createdAt, and additional data.
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
};

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
