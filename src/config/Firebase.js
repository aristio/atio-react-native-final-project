import Firebase from 'firebase';

// export const initialize = () =>
//   firebase.initializeApp({
//     apiKey: 'AIzaSyBRt_frsJXd7OEnge3RxHv2CT2PxGdw-6k',
//     authDomain: 'atioreactfirebase.firebaseapp.com',
//     databaseURL: 'https://atioreactfirebase.firebaseio.com',
//     projectId: 'atioreactfirebase',
//     storageBucket: '',
//     messagingSenderId: '546202576803',
//     appId: '1:546202576803:android:0d0610407909b677021c16',
//   });
var firebaseConfig = {
  apiKey: 'AIzaSyBRt_frsJXd7OEnge3RxHv2CT2PxGdw-6k',
  authDomain: 'atioreactfirebase.firebaseapp.com',
  databaseURL: 'https://atioreactfirebase.firebaseio.com',
  projectId: 'atioreactfirebase',
  storageBucket: '',
  messagingSenderId: '546202576803',
  appId: '1:546202576803:android:0d0610407909b677021c16',
};

let apps = Firebase.initializeApp(firebaseConfig);
export const firebaseDb = apps.database();
export const firebaseAuth = apps.auth();

export const setListener = (endpoint, updaterFn) => {
  firebaseDb.ref(endpoint).on('value', updaterFn);
  return () => firebaseDb.ref(endpoint).off();
};

export const pushData = (endpoint, data) => {
  return firebaseDb.ref(endpoint).push(data);
};

export const login = (email, pass) =>
  firebaseAuth.signInWithEmailAndPassword(email, pass);

// export const login = async (email, password) => {
//   await firebase.auth().signInWithEmailAndPassword(email, password);
// };

export const signup = (email, pass) =>
  firebaseAuth.createUserWithEmailAndPassword(email, pass);
