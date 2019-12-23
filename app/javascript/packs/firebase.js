import firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyDbrFniWhJaLBYFYJJ6sR6UxepWeMnFl2E",
    authDomain: "hellovue-e73ea.firebaseapp.com",
    databaseURL: "https://hellovue-e73ea.firebaseio.com",
    projectId: "hellovue-e73ea",
    storageBucket: "hellovue-e73ea.appspot.com",
    messagingSenderId: "204060488592",
    appId: "1:204060488592:web:38626535a1b06d4480f915",
    measurementId: "G-HK5Z9EY7CB"
  };
  firebase.initializeApp(config);
// databaseを利用して操作する
  export const db = firebase.database()