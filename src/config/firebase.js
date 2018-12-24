import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCAOKFb9p-_5gzY9W0jq6zQCGhpiXg9TkA",
  authDomain: "ywc-volunteer.firebaseapp.com",
  databaseURL: "https://ywc-volunteer.firebaseio.com",
  projectId: "ywc-volunteer",
  storageBucket: "ywc-volunteer.appspot.com",
  messagingSenderId: "743615069317"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;

export const db = firebase.database();

export const getAll = (collection) => db.ref(`${collection}`)

export const getOne = (collection, attr) => db.ref(`${collection}/${attr}`)

export const insert = (collection, value) => db.ref(`${collection}`).set({ ...value })

export const auth = firebase.auth
