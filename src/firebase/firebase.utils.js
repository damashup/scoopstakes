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

const defaultUserRef = (userAuth)  => {
    return firestore.doc(`users/${userAuth.uid}`);}

export const createUserProfileDocument = async (userAuth, additionalData, userRef=defaultUserRef(userAuth)) => {
  if (!userAuth) return;
  
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

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export const githubProvider = new firebase.auth.GithubAuthProvider();
githubProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGitHub = () => auth.signInWithPopup(githubProvider);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const twitterProvider = new firebase.auth.TwitterAuthProvider();
twitterProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithTwitter = () => auth.signInWithPopup(twitterProvider);

export const conditionalProvider = providerName => {
  if (providerName === 'facebookProvider'){
    return facebookProvider;
  } else if (providerName === 'githubProvider'){
    return githubProvider;
  } else if (providerName === 'googleProvider'){
    return googleProvider;
  }  else if (providerName === 'twitterProvider'){
      return twitterProvider;
  }
}

export const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

export const ERROR_MSG_ACCOUNT_EXISTS = `
  A Scoopstakes account with this e-mail address already exists. 
  Try to login with this account instead. 
  If you think the account is already used from one of the social logins, try to sign-in with one of them.
  You can link your social accounts from your profile page.
`;



export default firebase;
