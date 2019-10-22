import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDB15tILV3K4H1rFPo9bg6A3GHXRunddqQ",
  authDomain: "nanzo-db.firebaseapp.com",
  databaseURL: "https://nanzo-db.firebaseio.com",
  projectId: "nanzo-db",
  storageBucket: "",
  messagingSenderId: "100445339176",
  appId: "1:100445339176:web:970befe2be2a0094cbff1d",
  measurementId: "G-681RJZC938"

};

firebase.initializeApp(config);




export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;
