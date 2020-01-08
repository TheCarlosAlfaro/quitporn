import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAv7p-dMj0n2cXI9z9wBFdqUyEK3Iam6PY',
  authDomain: 'quitporn-9f93b.firebaseapp.com',
  databaseURL: 'https://quitporn-9f93b.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
