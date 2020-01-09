import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAv7p-dMj0n2cXI9z9wBFdqUyEK3Iam6PY',
  authDomain: 'quitporn-9f93b.firebaseapp.com',
  databaseURL: 'https://quitporn-9f93b.firebaseio.com',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
});

export default app;
