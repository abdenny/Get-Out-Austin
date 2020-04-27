import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAhmblrVhS3aMw5A32ti9Di4dxw6h3qe4g',
  authDomain: 'getoutaustin-32f43.firebaseapp.com',
  databaseURL: 'https://getoutaustin-32f43.firebaseio.com',
  projectId: 'getoutaustin-32f43',
  storageBucket: 'getoutaustin-32f43.appspot.com',
  messagingSenderId: '40785541138',
  appId: '1:40785541138:web:c74ac36b31fdebb62440cb',
  measurementId: 'G-3K2GGTWJF0',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
